import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from '@/components/ui/Input'

describe('Input component', () => {
  test('renders input with label', () => {
    render(<Input label='Username' id='username' />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  test('renders input with helper text', () => {
    render(<Input helperText='Enter your username' />)
    expect(screen.getByText('Enter your username')).toBeInTheDocument()
  })

  test('displays error message', () => {
    render(<Input error='This field is required' />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  test('renders start adornment', () => {
    const startAdornment = { adornment: <span>@</span> }
    render(<Input startAdornment={startAdornment} />)
    expect(screen.getByText('@')).toBeInTheDocument()
  })

  test('renders end adornment and handles click', () => {
    const handleClick = jest.fn()
    const endAdornment = { adornment: <span>Clear</span>, onClick: handleClick }
    render(<Input endAdornment={endAdornment} />)

    const button = screen.getByText('Clear')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('applies custom className', () => {
    render(<Input className='custom-class' />)
    expect(screen.getByRole('textbox')).toHaveClass('custom-class')
  })

  test('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  test('matches snapshot', () => {
    const { asFragment } = render(<Input />)
    expect(asFragment()).toMatchSnapshot()
  })
})
