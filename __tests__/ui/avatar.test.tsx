import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '@/components/ui/avatar'

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe('Avatar component', () => {
  test('renders with initials when no URL is provided', () => {
    render(<Avatar name='John Doe' />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  test('applies custom className to the container', () => {
    const { container } = render(
      <Avatar name='John Doe' className='custom-class' />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  test('applies custom textClassName to the initials', () => {
    render(<Avatar name='John Doe' textClassName='custom-text-class' />)
    expect(screen.getByText('JD')).toHaveClass('custom-text-class')
  })

  test('uses createInitial function correctly', () => {
    render(<Avatar name='Alice Bob Charlie' />)
    expect(screen.getByText('AB')).toBeInTheDocument()
  })

  test('renders with default classes', () => {
    const { container } = render(<Avatar name='John Doe' />)
    expect(container.firstChild).toHaveClass(
      'relative',
      'flex',
      'h-8',
      'w-8',
      'items-center',
      'justify-center',
      'rounded-full',
      'border-neutral-100',
      'bg-surface-300',
      'text-base',
      'font-bold'
    )
  })
  test('matches snapshot', () => {
    const { asFragment } = render(<Avatar name='John Doe' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
