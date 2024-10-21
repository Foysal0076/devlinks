'use client'

import LinksInputFieldsArrayDraggable from '@/components/links/links-input-fields-array-draggable'
import { useLinkForm } from '@/components/links/use-link-form'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  linksSchema,
  PlatFormInput,
} from '@/shared/validators/platform-link.schema'

const LinkForm = () => {
  const { onSubmit, isLoading, isUpdating, resetValues } = useLinkForm()

  return (
    <Form<PlatFormInput>
      validationSchema={linksSchema}
      resetValues={resetValues}
      onSubmit={onSubmit}
      useFormProps={{
        mode: 'onChange',
      }}
      className='flex h-full max-h-[70vh] min-h-[70vh] flex-col overflow-y-auto'>
      {({ register, control, setValue, formState: { errors } }) => (
        <>
          <div className='flex grow'>
            <div className='flex w-full flex-col justify-between gap-6'>
              {/* <LinksInputArray
                control={control}
                errors={errors}
                register={register}
              /> */}
              <LinksInputFieldsArrayDraggable
                control={control}
                errors={errors}
                register={register}
                setValue={setValue}
                resetValues={resetValues}
              />
              <div className='sticky bottom-0 flex rounded-bl-xl rounded-br-xl bg-neutral-0 p-5 dark:bg-surface-100 md:p-6'>
                <Button
                  loading={isLoading || isUpdating}
                  className='ml-auto max-md:mx-auto max-md:w-full'>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Form>
  )
}

export default LinkForm
