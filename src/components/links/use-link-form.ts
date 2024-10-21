import { DropResult } from '@hello-pangea/dnd'
import { useEffect, useState } from 'react'
import {
  Control,
  SubmitHandler,
  useFieldArray,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import { platFormsLength } from '@/components/links/link-form-item'
import {
  useCreateLinksMutation,
  useFetchUserLinksQuery,
  useUpdateLinksMutation,
} from '@/redux/queries/link.queries'
import { updateUserInfo } from '@/redux/slice/user-links-slice'
import { isValidUrl } from '@/shared/utils'
import { PlatFormInput } from '@/shared/validators/platform-link.schema'
import { Link, PutLinksBody } from '@/types/link.types'

export const useLinkFieldsArray = (
  control: Control<PlatFormInput>,
  setValue: UseFormSetValue<PlatFormInput>,
  resetValues?: PutLinksBody
) => {
  const dispatch = useDispatch()
  const links = useWatch({ control, name: 'links' }) as Link[]
  const [updateLinks] = useUpdateLinksMutation()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  })

  const addLink = () => {
    if (fields.length >= platFormsLength)
      return toast.error('You have reached the maximum number of links', {
        id: 'max-links',
      })

    append({ name: 'Github', url: '' })
  }

  const removeLink = (index: number) => {
    remove(index)
  }

  const updateLinksOrder = async (links: Link[]) => {
    if (!resetValues) return
    //check if all the links are valid
    const isValid = links.every((link) => isValidUrl(link.url))
    if (!isValid) return toast.error('Please enter a valid url for each link')
    await updateLinks({ id: resetValues.id, links })
    toast.success('Links order updated successfully')
  }

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(fields)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setValue('links', items)
    if (resetValues) await updateLinksOrder(items)
  }

  useEffect(() => {
    dispatch(updateUserInfo({ key: 'links', value: links }))
  }, [links, dispatch])

  return { fields, addLink, removeLink, updateLinksOrder, onDragEnd }
}

export const useLinkForm = () => {
  const [resetValues, setReset] = useState<PutLinksBody>({ links: [], id: '' })
  const dispatch = useDispatch()

  const [createLinks, { isLoading, isError, isSuccess }] =
    useCreateLinksMutation()

  const [updateLinks, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdateLinksMutation()

  const onSubmit: SubmitHandler<PlatFormInput> = async (data) => {
    try {
      if (resetValues?.id) {
        await updateLinks({ id: resetValues.id, links: data.links })
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
      dispatch(updateUserInfo({ key: 'links', value: data?.links }))
    }
  }, [data, isFetching, isLinksFetched])

  return {
    onSubmit,
    resetValues,
    setReset,
    isLoading,
    isUpdating,
    isError,
    isUpdateError,
  }
}
