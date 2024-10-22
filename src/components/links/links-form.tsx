'use client'

import LinksInputFieldsArrayDraggable from '@/components/links/links-input-fields-array-draggable'
import { useLinkForm } from '@/components/links/use-link-form'
import LinkFormLoader from '@/components/loaders/link-form-loader'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useLoading } from '@/shared/hooks/use-loading'
import {
  linksSchema,
  PlatFormInput,
} from '@/shared/validators/platform-link.schema'

const LinksForm = () => {
  const { onSubmit, isLoading, isUpdating, resetValues } = useLinkForm()
  const { isLoadingUserInfoAndLinks } = useLoading()

  if (isLoadingUserInfoAndLinks) return <LinkFormLoader />

  return (
    <Form<PlatFormInput>
      validationSchema={linksSchema}
      resetValues={resetValues}
      onSubmit={onSubmit}
      useFormProps={{
        mode: 'onChange',
      }}
      className='flex h-[calc(100vh-5.75rem)] flex-col overflow-y-auto md:h-[calc(100vh-9rem)]'>
      {({ register, control, setValue, formState: { errors } }) => (
        <>
          <LinksFormHeader />
          <div className='flex grow'>
            <div className='flex w-full flex-col justify-between gap-6'>
              <LinksInputFieldsArrayDraggable
                control={control}
                errors={errors}
                register={register}
                setValue={setValue}
                resetValues={resetValues}
              />
              <div className='sticky bottom-0 flex rounded-bl-xl rounded-br-xl bg-neutral-0 p-5 dark:bg-surface-100 md:p-6'>
                {isLoadingUserInfoAndLinks ? (
                  <div className='bg-loader ml-auto h-10 w-24 animate-pulse rounded' />
                ) : (
                  <Button
                    loading={isLoading || isUpdating}
                    className='ml-auto max-md:mx-auto max-md:w-full'>
                    Save
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Form>
  )
}

export default LinksForm

const LinksFormHeader = () => {
  return (
    <div className='p-5 md:p-6'>
      <h1 className='h4 mb-2 font-bold'>Customize your links</h1>
      <p className=''>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
    </div>
  )
}
