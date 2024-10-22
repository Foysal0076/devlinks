import { render } from '@testing-library/react'
import LinkFormItemLoader from '@/components/loaders/link-form-item-loader'

test('renders LinkFormItemLoader correctly', () => {
  const { asFragment } = render(<LinkFormItemLoader />)
  expect(asFragment()).toMatchSnapshot()
})
