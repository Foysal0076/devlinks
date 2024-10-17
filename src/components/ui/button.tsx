import { cva } from 'class-variance-authority'

import Spinner from '@/components/ui/spinner'
import { cn } from '@/shared/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  loading?: boolean
}

const ButtonVariants = cva(
  'rounded-lg transition-all duration-200 text-nowrap focus:outline-none font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-100 text-neutral-0 focus:outline-primary-200 disabled:active:transform-none active:scale-[.95] disabled:text-neutral-200 disabled:bg-primary-100 disabled:cursor-not-allowed text-neutral-0 dark:text-neutral-900',
        secondary:
          'bg-none text-neutral-900 hover:bg-primary-50 focus:ring-primary-100 border-2 border-primary-500 text-primary-500 focus:ring-4 focus:ring-primary-100 disabled:active:transform-none active:scale-[.95] disabled:cursor-not-allowed disabled:text-neutral-200 disabled:border-neutral-50 disabled:hover:bg-neutral-0 dark:text-primary-200 dark:border-primary-200 dark:hover:bg-surface-200 dark:disabled:border-neutral-200 dark:disabled:text-neutral-200',
        danger:
          'bg-red-500 hover:bg-red-600 text-neutral-0 focus:ring-4 focus:ring-red-100 disabled:active:transform-none active:scale-[.95] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed text-neutral-0 dark:text-neutral-900',
        success:
          'bg-green-500 hover:bg-green-600 text-neutral-0 focus:ring-4 focus:ring-green-100 disabled:active:transform-none active:scale-[.95] disabled:text-neutral-200 disabled:bg-neutral-50 disabled:cursor-not-allowed text-neutral-0 dark:text-neutral-900',
      },
      size: {
        xs: 'h-[1.75rem] text-xs px-4',
        sm: 'h-[2rem] text-sm px-6',
        md: 'h-[2.5rem] text-md px-8',
        lg: 'h-[3rem] text-md px-11',
        xl: 'h-[3.5rem] text-lg px-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `relative select-none`,
        ButtonVariants({ variant, size }),
        className
      )}
      disabled={loading}
      {...buttonProps}>
      {loading && (
        <div
          className='absolute inset-0 flex items-center justify-center'
          data-testid='spinner'>
          <Spinner />
        </div>
      )}
      <div
        className={cn(`visible`, {
          invisible: loading,
          'opacity-0': loading,
        })}>
        {children}
      </div>
    </button>
  )
}

export default Button
