import {
  DraggableProvidedDragHandleProps,
} from '@hello-pangea/dnd'
import { Equals } from '@phosphor-icons/react'
import { Link as LinkIcon } from '@phosphor-icons/react'
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from 'react-hook-form'

import {
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from '@/components/icons'
import { Input } from '@/components/ui/Input'
import Select from '@/components/ui/select'
import { PlatFormInput } from '@/shared/validators/platform-link.schema'
import { PlatformOptionType } from '@/types/link.types'

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

export const platFormsLength = platformOptions.length

type Props = {
  index: number
  removeLink: (index: number) => void
  control: Control<any>
  register: UseFormRegister<PlatFormInput>
  errors: FieldErrors<PlatFormInput>
  dragHandleProps: DraggableProvidedDragHandleProps | null
}

const LinkInputFieldsItem = ({
  index,
  removeLink,
  control,
  register,
  errors,
  dragHandleProps,
}: Props) => {
  return (
    <div className='px-5 md:px-6'>
      <div className='flex flex-col rounded-lg bg-neutral-10 p-4 !pb-6 dark:bg-surface-200/60 md:p-5'>
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex items-center'>
            <Equals
              weight='bold'
              className='mr-2 cursor-pointer'
              {...dragHandleProps}
            />
            <span className='font-bold'>{`Link #${index + 1}`}</span>
          </div>
          <button
            onClick={() => removeLink(index)}
            className='transition-colors duration-300 hover:text-red-500'>
            Remove
          </button>
        </div>
        <div className='flex flex-col gap-6'>
          <Controller
            name={`links.${index}.name`}
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
            {...register(`links.${index}.url` as const)} // Use 'as const' to assert the type
            className='flex-grow'
            label='Link'
            labelClassName='mb-0.5 block'
            placeholder='https://github.com/my-profile'
            startAdornment={{
              adornment: (
                <LinkIcon className='ml-1 text-neutral-600' weight='bold' />
              ),
            }}
            error={
              errors?.links?.[index]?.url?.message ??
              errors?.links?.[index]?.root?.message
            }
          />
        </div>
      </div>
    </div>
  )
}

export default LinkInputFieldsItem
