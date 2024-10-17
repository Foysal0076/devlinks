import clsx from 'clsx'
import React, { forwardRef } from 'react'

type TextFieldParams = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
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
      helperText,
      startAdornment,
      endAdornment,
      ...inputParams
    },
    ref
  ) {
    return (
      <div
        className={clsx('custom-input group flex', {
          'flex-col gap-1': layout === 'vertical',
        })}>
        {label && (
          <label
            htmlFor={inputParams.id as string}
            className={clsx(
              'text-sm font-medium',
              {
                'text-neutral-600 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300':
                  !error,
              },
              { 'text-red-500 group-focus-within:text-red-500': error },
              {
                'after:ml-0.5 after:mr-1 after:text-red-500 after:content-["*"]':
                  inputParams.required,
              },
              {
                'mt-2': layout === 'horizontal',
              }
            )}>
            {label}
            {layout === 'horizontal' && <span>:</span>}
          </label>
        )}
        <div className='relative flex flex-col'>
          <input
            ref={ref}
            {...inputParams}
            className={clsx(
              `rounded-lg border-none px-4 text-neutral-600 outline-none ring-1 placeholder:text-neutral-100 focus:placeholder:text-primary-100 disabled:bg-neutral-30 disabled:text-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 dark:disabled:bg-neutral-400 ${className}`,
              {
                'ring-neutral-50 focus:shadow-[0_0_10px_#c9bfff] focus:ring-primary-300 dark:focus:ring-primary-300':
                  !error,
                'ring-red-500 focus:ring-red-500': error,
                'pr-12': endAdornment,
                'pl-10': startAdornment,
              }
            )}
          />
          {helperText && (
            <span className='helper-text text-xs font-normal text-neutral-400 md:text-sm'>
              {`${helperText}`}
            </span>
          )}
          {error && (
            <div
              className={clsx(
                'absolute -bottom-0 left-0',
                { 'translate-y-[80%]': helperText },
                { 'translate-y-[90%]': !helperText }
              )}>
              <span className='-mt-1 text-xs text-red-500 dark:text-red-500'>
                {error}
              </span>
            </div>
          )}
          {startAdornment && (
            <button
              type='button'
              onClick={startAdornment?.onClick}
              className={clsx(
                'absolute left-2 top-1/2 w-max -translate-y-1/2 rounded-full text-neutral-50 transition-colors duration-200 hover:bg-neutral-30',
                `${startAdornment.className ? startAdornment.className : ''}`,
                { 'pointer-events-none': !startAdornment.onClick }
              )}
              aria-label='start-adornment btn'>
              {startAdornment.adornment}
            </button>
          )}
          {endAdornment && (
            <button
              type='button'
              onClick={endAdornment?.onClick}
              className={clsx(
                'absolute right-2 top-1/2 w-max -translate-y-1/2 rounded-full text-neutral-50 transition-colors duration-200 hover:bg-neutral-30',
                `${endAdornment.className ? endAdornment.className : ''}`,
                { 'pointer-events-none': !endAdornment.onClick }
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
