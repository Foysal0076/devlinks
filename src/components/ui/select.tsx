import { CaretDown, Check } from '@phosphor-icons/react'
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { cn } from '@/shared/utils'

export type SelectOption = {
  value: string
  label: string
  icon?: React.ReactNode
}

type SelectProps = {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  required?: boolean
  label?: string
  labelClassName?: string
  caretClassName?: string
  error?: boolean
  errorMessage?: string
  disabled?: boolean
}

// Memoized option component
const SelectItem = memo(
  ({
    option,
    isSelected,
    isHighlighted,
    onSelect,
  }: {
    option: SelectOption
    isSelected: boolean
    isHighlighted: boolean
    onSelect: () => void
  }) => (
    <div
      role='option'
      aria-selected={isSelected}
      onClick={onSelect}
      className={cn(
        'flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-neutral-50',
        isSelected ? `dark:bg-primary-0 bg-primary-50 text-primary-800` : '',
        isHighlighted ? 'bg-neutral-50' : ''
      )}>
      {option.icon && <>{option.icon}</>}
      <span className='block select-none truncate text-inherit'>
        {option.label}
      </span>
      {isSelected && <Check className='ml-auto h-4 w-4' />}
    </div>
  )
)

SelectItem.displayName = 'SelectItem'

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value,
      onChange,
      label = 'Select Option',
      error = false,
      errorMessage,
      disabled = false,
      required,
      labelClassName = '',
      caretClassName = '',
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const selectedOption = options.find((opt) => opt.value === value)
    const closeDropdown = useCallback(() => {
      setIsOpen(false)
      setHighlightedIndex(-1)
      containerRef.current?.focus()
    }, [])

    const handleSelect = useCallback(
      (optionValue: string) => {
        onChange(optionValue)
        closeDropdown()
      },
      [onChange, closeDropdown]
    )

    const toggleOpen = useCallback(() => {
      if (!disabled) {
        setIsOpen((prev) => !prev)
      }
    }, [disabled])

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !containerRef.current?.contains(event.target as Node)
        ) {
          closeDropdown()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [closeDropdown])

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (disabled) return

        switch (event.key) {
          case 'Enter':
          case ' ':
            if (!isOpen) {
              setIsOpen(true)
            } else if (highlightedIndex !== -1) {
              handleSelect(options[highlightedIndex].value)
            }
            event.preventDefault()
            break
          case 'ArrowDown':
            event.preventDefault()
            if (!isOpen) {
              setIsOpen(true)
            } else {
              setHighlightedIndex((prev) =>
                prev === options.length - 1 ? 0 : prev + 1
              )
            }
            break
          case 'ArrowUp':
            event.preventDefault()
            if (!isOpen) {
              setIsOpen(true)
            } else {
              setHighlightedIndex((prev) =>
                prev <= 0 ? options.length - 1 : prev - 1
              )
            }
            break
          case 'Escape':
            closeDropdown()
            break
          case 'Tab':
            if (isOpen) {
              closeDropdown()
            }
            break
        }
      },
      [isOpen, highlightedIndex, options, handleSelect, disabled, closeDropdown]
    )

    return (
      <div ref={ref} className='relative w-full min-w-[200px]'>
        {label && (
          <label
            className={cn(
              'text-xs font-medium',
              {
                'text-neutral-600 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300':
                  !error,
                'text-red-500 group-focus-within:text-red-500': error,
                'after:ml-0.5 after:mr-1 after:text-red-500 after:content-["*"]':
                  required,
                'text-primary-500': isOpen,
              },
              labelClassName
            )}>
            {label}
          </label>
        )}
        <div
          ref={containerRef}
          role='combobox'
          aria-expanded={isOpen}
          aria-haspopup='listbox'
          aria-controls='select-dropdown'
          aria-label={label}
          aria-required={required}
          aria-invalid={error}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          className='rounded-lg bg-neutral-0 outline-none'>
          <div
            onClick={toggleOpen}
            className={cn(
              'flex w-full cursor-pointer items-center justify-between rounded-lg border border-neutral-10 bg-neutral-0 bg-transparent px-3 py-2 transition-all dark:bg-surface-100',
              disabled
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-neutral-400',
              {
                'border-neutral-50 focus:border-primary-300 dark:focus:border-primary-300':
                  !error,
                'ring-red-500 focus:ring-red-500': error,
                'border-primary-300 shadow-[0_0_10px_#c9bfff]': isOpen,
              }
            )}>
            <div className='flex items-center gap-2'>
              {selectedOption?.icon && <>{selectedOption.icon}</>}
              <span
                className={cn(
                  'block truncate',
                  !selectedOption ? 'text-neutral-400' : ''
                )}>
                {selectedOption ? selectedOption.label : 'Select option'}
              </span>
            </div>
            <CaretDown
              weight='bold'
              className={cn(
                'h-4 w-4 text-primary-500 transition-transform duration-300',
                isOpen ? 'rotate-180' : '',
                caretClassName
              )}
              aria-hidden='true'
            />
          </div>
        </div>

        {isOpen && (
          <div
            id='select-dropdown'
            ref={dropdownRef}
            role='listbox'
            aria-label={`${label} options`}
            className='absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-neutral-50 bg-neutral-0 py-1 shadow-lg dark:bg-surface-100'>
            {options.map((option, index) => (
              <SelectItem
                key={option.value}
                option={option}
                isSelected={option.value === value}
                isHighlighted={index === highlightedIndex}
                onSelect={() => handleSelect(option.value)}
              />
            ))}
          </div>
        )}

        {error && errorMessage && (
          <p role='alert' className='mt-1 text-sm text-red-500'>
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default memo(Select)
