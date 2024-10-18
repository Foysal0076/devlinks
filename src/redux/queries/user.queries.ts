import { apiSlice } from '@/redux/slice/apiSlice'
import { UserInformation } from '@/types'

export const userQueries = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchUserInformation: builder.query<UserInformation[], any>({
      query: (params) => ({
        url: '/user-information',
        method: 'GET',
        params,
      }),
      providesTags: ['User'],
    }),
  }),
})

export const { useFetchUserInformationQuery } = userQueries
