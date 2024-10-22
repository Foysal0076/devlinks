import { apiSlice } from '@/redux/slice/apiSlice'
import { apiRoutes } from '@/shared/config/api-routes'
import { PostLinksBody, PutLinksBody, UserInfoAndLinks } from '@/types'

export const linksQueries = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUserLinks: builder.query<UserInfoAndLinks, any>({
      query: () => ({
        url: apiRoutes.userLinks,
        method: 'GET',
      }),
      providesTags: ['Links'],
    }),
    fetchPublicProfileLinks: builder.query<UserInfoAndLinks, string>({
      query: (id) => ({
        url: apiRoutes.getUserLinkById(id),
        method: 'GET',
      }),
    }),
    createLinks: builder.mutation<any, PostLinksBody>({
      query: (data) => ({
        url: apiRoutes.userLinks,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Links'],
    }),
    updateLinks: builder.mutation<any, PutLinksBody>({
      query: (data) => ({
        url: apiRoutes.userLinks,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Links'],
    }),
    deleteLinks: builder.mutation<any, string>({
      query: (id) => ({
        url: apiRoutes.deleteUserLinks(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Links'],
    }),
  }),
})

export const {
  useFetchUserLinksQuery,
  useFetchPublicProfileLinksQuery,
  useCreateLinksMutation,
  useUpdateLinksMutation,
  useDeleteLinksMutation,
  usePrefetch: usePrefetchLinks,
} = linksQueries
