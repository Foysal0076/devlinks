import { render } from '@testing-library/react'
import NavlinksLoader from '@/components/loaders/nav-links-loader'

test('renders NavlinksLoader correctly', () => {
  const { asFragment } = render(<NavlinksLoader />)
  expect(asFragment()).toMatchSnapshot()
})
