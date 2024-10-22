import { render } from '@testing-library/react'
import LinkFormLoader from '@/components/loaders/link-form-loader'

test('renders LinkFormLoader correctly', () => {
  const { asFragment } = render(<LinkFormLoader />)
  expect(asFragment()).toMatchSnapshot()
})
