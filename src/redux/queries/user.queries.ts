import { apiSlice } from '@/redux/slice/apiSlice'
import { apiRoutes } from '@/shared/config/api-routes'
import { UserInformation, UserInformationPutFormData } from '@/types'

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
    updateUserProfile: builder.mutation<
      UserInformation,
      UserInformationPutFormData
    >({
      query: (body) => ({
        url: apiRoutes.userInformation,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const { useFetchUserInformationQuery, useUpdateUserProfileMutation } =
  userQueries
