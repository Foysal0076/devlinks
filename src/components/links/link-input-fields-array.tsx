'use client'
import { Link as LinkIcon, Plus } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Controller, useFieldArray, useWatch } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import {
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from '@/components/icons'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import Select from '@/components/ui/select'
import { updateUserInfo } from '@/redux/slice/user-links-slice'
import { Link, PlatformOptionType } from '@/types/link.types'

const platformOptions: PlatformOptionType[] = [
  {
    label: 'Github',
    value: 'Github',
    icon: <GithubIcon className='h-4 w-4' />,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    icon: <LinkedinIcon className='h-4 w-4' />,
  },
  {
    label: 'YouTube',
    value: 'YouTube',
    icon: <YoutubeIcon className='h-4 w-4' />,
  },
  {
    label: 'Facebook',
    value: 'Facebook',
    icon: <FacebookIcon className='h-4 w-4' />,
  },
  {
    label: 'GitLab',
    value: 'GitLab',
    icon: <GitlabIcon className='h-4 w-4' />,
  },
  {
    label: 'X',
    value: 'X',
    icon: <XIcon className='h-4 w-4' />,
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

  const links = useWatch({ control, name: 'links' }) as Link[]

  const dispatch = useDispatch()

  const addLink = () => {
    //prevent adding more than the length of platformOptions
    if (fields.length >= platformOptions.length)
      return toast.error('You have reached the maximum number of links', {
        id: 'max-links',
      })

    append({ name: 'Github', url: '' })
  }

  const removeLink = (index: number) => {
    remove(index)
  }

  useEffect(() => {
    dispatch(updateUserInfo({ key: 'links', value: links }))
  }, [links, dispatch])

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
                      onChange={(selectedOption) => {
                        return onChange(selectedOption)
                      }}
                    />
                  )}
                />
                <Input
                  {...register(`links[${index}].url`)}
                  className='flex-grow'
                  label='Link'
                  labelClassName='mb-0.5 block'
                  placeholder='https://github.com/my-profile'
                  startAdornment={{
                    adornment: (
                      <LinkIcon
                        className='ml-1 text-neutral-600'
                        weight='bold'
                      />
                    ),
                  }}
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
