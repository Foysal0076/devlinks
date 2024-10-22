'use client'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { Plus } from '@phosphor-icons/react'
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'

import LinkInputFieldsItem from '@/components/links/link-form-item'
import { useLinkFieldsArray } from '@/components/links/use-link-form'
import Button from '@/components/ui/button'
import { PlatFormInput } from '@/shared/validators/platform-link.schema'
import { PutLinksBody } from '@/types/link.types'

type LinkInputArrayProps = {
  control: Control<PlatFormInput>
  register: UseFormRegister<PlatFormInput>
  errors: FieldErrors<PlatFormInput>
  setValue: UseFormSetValue<PlatFormInput>
  resetValues?: PutLinksBody
}

const LinksInputFieldsArrayDraggable = ({
  control,
  errors,
  register,
  resetValues,
  setValue,
}: LinkInputArrayProps) => {
  const { addLink, removeLink, fields, onDragEnd } = useLinkFieldsArray(
    control,
    setValue,
    resetValues
  )

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='links-droppable'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
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
            <div className='flex flex-col gap-6 pt-6'>
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <LinkInputFieldsItem
                        index={index}
                        removeLink={removeLink}
                        control={control}
                        register={register}
                        errors={errors}
                        dragHandleProps={provided.dragHandleProps}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default LinksInputFieldsArrayDraggable
