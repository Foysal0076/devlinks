import UserInfoAndLinksLoader from '@/components/loaders/user-info-and-links-loader'
import { render } from '@testing-library/react'

test('renders UserInfoAndLinksLoader correctly', () => {
  const { asFragment } = render(<UserInfoAndLinksLoader />)
  expect(asFragment()).toMatchSnapshot()
})
