import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '@/components/ui/button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary-500')
  })

  it('renders with custom variant and size', () => {
    render(
      <Button variant='secondary' size='lg'>
        Custom Button
      </Button>
    )
    const button = screen.getByRole('button', { name: /custom button/i })
    expect(button).toHaveClass('bg-none')
    expect(button).toHaveClass('h-[3rem]')
  })

  it('renders in loading state', () => {
    render(<Button loading>Loading</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom Class Button</Button>)
    const button = screen.getByRole('button', { name: /custom class button/i })
    expect(button).toHaveClass('custom-class')
  })

  it('matches snapshot', () => {
    const { container } = render(<Button>Click me</Button>)
    expect(container).toMatchSnapshot()
  })
})
