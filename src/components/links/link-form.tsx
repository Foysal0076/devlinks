'use client'
import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

import LinksInputArray from '@/components/links/link-input-fields-array'
import Button from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  useCreateLinksMutation,
  useFetchUserLinksQuery,
  useUpdateLinksMutation,
} from '@/redux/queries/link.queries'
import {
  linksSchema,
  PlatFormInput,
} from '@/shared/validators/platform-link.schema'
import { PutLinksBody } from '@/types'

const LinkForm = () => {
  const [reset, setReset] = useState<PutLinksBody>({ links: [], id: '' })

  const [createLinks, { isLoading, isError, isSuccess }] =
    useCreateLinksMutation()

  const [updateLinks, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdateLinksMutation()

  const onSubmit: SubmitHandler<PlatFormInput> = async (data) => {
    try {
      if (reset?.id) {
        await updateLinks({ id: reset.id, links: data.links })
        toast.success('Links updated successfully')
        return
      }
      await createLinks({ links: data.links })
      toast.success('Links created successfully')
    } catch (error) {
      toast.error('An error occurred')
    }
  }

  const {
    data,
    isLoading: isFetching,
    isSuccess: isLinksFetched,
  } = useFetchUserLinksQuery(null)

  useEffect(() => {
    if (isLinksFetched && !isFetching && data) {
      setReset({ links: data?.links, id: data?.id })
    }
  }, [data, isFetching, isLinksFetched])

  return (
    <Form<PlatFormInput>
      validationSchema={linksSchema}
      resetValues={reset}
      onSubmit={onSubmit}
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
