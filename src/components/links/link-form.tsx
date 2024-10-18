'use client'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import LinksInputArray from '@/components/links/link-input-fields-array'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  PlatFormInput,
  platformLinksSchema,
} from '@/shared/validators/platform-link.schema'

const defaultData = {
  platformLinks: [{ name: 'Github', url: 'https:github.com/foysal0076' }],
}

type Props = {
  initialData?: PlatFormInput
}

const LinkForm = ({ initialData = defaultData }: Props) => {
  const [reset, setReset] = useState(initialData || {})

  const onSubmit: SubmitHandler<PlatFormInput> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div className='p-5 md:p-6'>
        <h1 className='h4 mb-2 font-bold'>Customize your links</h1>
        <p className=''>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <Form<PlatFormInput>
        validationSchema={platformLinksSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialData,
        }}
        className='flex h-full max-h-[70vh] min-h-[70vh] flex-col overflow-y-auto'>
        {({ register, control, formState: { errors } }) => (
          <>
            <div className='flex grow'>
              <div className='flex w-full flex-col justify-between gap-6'>
                <LinksInputArray
                  control={control}
                  errors={errors}
                  register={register}
                />
                <div className='sticky bottom-0 flex rounded-bl-xl rounded-br-xl bg-neutral-0 p-5 dark:bg-surface-100 md:p-6'>
                  <Button className='ml-auto max-md:mx-auto max-md:w-full'>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  )
}

export default LinkForm
