
import { useFetchUserLinksQuery } from '@/redux/queries/link.queries'

export const useLoading = () => {
  const { isLoading: isLoadingUserInfoAndLinks } = useFetchUserLinksQuery(null)

  return { isLoadingUserInfoAndLinks }
}
