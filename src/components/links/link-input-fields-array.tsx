'use client'
import {
  FacebookLogo,
  GithubLogo,
  GitlabLogo,
  LinkedinLogo,
  Plus,
  TwitterLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import { Controller, useFieldArray } from 'react-hook-form'

import Button from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import Select from '@/components/ui/select'
import { PlatformOptionType } from '@/types/link.types'

const platformOptions: PlatformOptionType[] = [
  {
    label: 'Github',
    value: 'Github',
    icon: <GithubLogo weight='bold' size={18} />,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    icon: <LinkedinLogo weight='bold' size={18} />,
  },
  {
    label: 'YouTube',
    value: 'YouTube',
    icon: <YoutubeLogo weight='bold' size={18} />,
  },
  {
    label: 'Facebook',
    value: 'Facebook',
    icon: <FacebookLogo weight='bold' size={18} />,
  },
  {
    label: 'GitLab',
    value: 'GitLab',
    icon: <GitlabLogo weight='bold' size={18} />,
  },
  {
    label: 'Twitter',
    value: 'Twitter',
    icon: <TwitterLogo weight='bold' size={18} />,
  },
]

type LinkInputArrayProps = {
  control: any
  register: any
  errors: any
}

const LinksInputArray = ({
  control,
  errors,
  register,
}: LinkInputArrayProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  })

  const addLink = () => {
    append({ name: 'Github', url: '' })
  }

  const removeLink = (index: number) => {
    remove(index)
  }

  return (
    <div className=''>
      <div className='sticky top-0 z-20 bg-neutral-0 p-5 py-4 dark:bg-surface-100 md:p-6'>
        <Button
          type='button'
          className='flex w-full items-center justify-center'
          variant='secondary'
          onClick={addLink}>
          <div className='flex items-center gap-1'>
            <Plus size={20} weight='bold' />
            Add a new link
          </div>
        </Button>
      </div>
      <div className='flex flex-col gap-6'>
        {fields.map((field, index) => (
          <div key={field.id} className='px-5 md:px-6'>
            <div className='flex flex-col rounded-lg bg-neutral-10 p-4 !pb-6 dark:bg-surface-200/60 md:p-5'>
              <div className='mb-4 flex justify-between'>
                <span className='font-bold'>{`Link #${index + 1}`}</span>
                <button
                  onClick={() => removeLink(index)}
                  className='transition-colors duration-300 hover:text-red-500'>
                  Remove
                </button>
              </div>
              <div className='flex flex-col gap-6'>
                <Controller
                  name={`links[${index}].name`}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label='Platform'
                      labelClassName='mb-1.5 block'
                      options={platformOptions}
                      value={value}
                      onChange={(selectedOption) => onChange(selectedOption)}
                    />
                  )}
                />
                <Input
                  {...register(`links[${index}].url`)}
                  className='flex-grow'
                  label='Link'
                  labelClassName='mb-0.5 block'
                  placeholder='https://github.com/my-profile'
                  error={errors?.links?.[index]?.url?.message}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinksInputArray
