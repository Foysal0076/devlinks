import { apiSlice } from '@/redux/slice/apiSlice'
import { apiRoutes } from '@/shared/config/api-routes'
import { UserInformation } from '@/types'

export const userQueries = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUserInformation: builder.query<UserInformation[], any>({
      query: (params) => ({
        url: apiRoutes.userInformation,
        method: 'GET',
        params,
      }),
      providesTags: ['User'],
    }),
  }),
})

export const { useFetchUserInformationQuery } = userQueries
