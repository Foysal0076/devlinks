import React, { forwardRef } from 'react'

import { cn } from '@/shared/utils'

type TextFieldParams = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  labelClassName?: string
  helperText?: string
  layout?: 'horizontal' | 'vertical'
  error?: string
  startAdornment?: StartAdornment
  endAdornment?: EndAdornment
}

type StartAdornment = {
  adornment: React.ReactNode
  onClick?: () => void
  className?: string
}

type EndAdornment = {
  adornment: React.ReactNode
  onClick: () => void
  className?: string
}

export const Input = forwardRef<HTMLInputElement, TextFieldParams>(
  function CustomInput(
    {
      label,
      error,
      layout = 'vertical',
      className = '',
      labelClassName = '',
      helperText,
      startAdornment,
      endAdornment,
      ...inputParams
    },
    ref
  ) {
    return (
      <div
        className={cn('custom-input group flex', {
          'flex-col gap-1': layout === 'vertical',
        })}>
        {label && (
          <label
            htmlFor={inputParams.id as string}
            className={cn(
              'text-xs font-medium',
              {
                'text-neutral-600 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300':
                  !error,
                'text-red-500 group-focus-within:text-red-500': error,
                'after:ml-0.5 after:mr-1 after:text-red-500 after:content-["*"]':
                  inputParams.required,
                'mt-2': layout === 'horizontal',
              },
              labelClassName
            )}>
            {label}
            {layout === 'horizontal' && <span>:</span>}
          </label>
        )}
        <div className='relative flex flex-col'>
          <input
            ref={ref}
            {...inputParams}
            className={cn(
              'rounded-lg border-none px-4 text-neutral-600 outline-none ring-1 placeholder:text-neutral-50 disabled:bg-neutral-30 disabled:text-neutral-100 dark:bg-surface-100 dark:text-neutral-600 dark:disabled:bg-neutral-400',
              {
                'ring-neutral-50 focus:shadow-[0_0_10px_#c9bfff] focus:ring-primary-300 dark:focus:ring-primary-300':
                  !error,
                'ring-red-500 focus:ring-red-500': error,
                'pr-12': endAdornment,
                'pl-10 max-xs:max-w-[13.5rem]': startAdornment,
              },
              className
            )}
          />
          {helperText && (
            <span className='helper-text mt-1 text-xs font-normal text-neutral-400'>
              {helperText}
            </span>
          )}
          {error && (
            <div
              className={cn(
                'absolute -bottom-0 left-0',
                helperText ? 'translate-y-[80%]' : 'translate-y-[90%]'
              )}>
              <span className='text-xs text-red-500 dark:text-red-500'>
                {error}
              </span>
            </div>
          )}
          {startAdornment && (
            <button
              type='button'
              onClick={startAdornment?.onClick}
              className={cn(
                'absolute left-2 top-1/2 w-max -translate-y-1/2 rounded-full text-neutral-50 transition-colors duration-200 hover:bg-neutral-30',
                { 'pointer-events-none': !startAdornment.onClick },
                startAdornment.className
              )}
              aria-label='start-adornment btn'>
              {startAdornment.adornment}
            </button>
          )}
          {endAdornment && (
            <button
              type='button'
              onClick={endAdornment?.onClick}
              className={cn(
                'absolute right-2 top-1/2 w-max -translate-y-1/2 rounded-full text-neutral-50 transition-colors duration-200 hover:bg-neutral-30',
                { 'pointer-events-none': !endAdornment.onClick },
                endAdornment.className
              )}
              aria-label='end-adornment btn'>
              {endAdornment.adornment}
            </button>
          )}
        </div>
      </div>
    )
  }
)
