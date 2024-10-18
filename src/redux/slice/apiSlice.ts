import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: async (headers, { getState }) => {
      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  keepUnusedDataFor: 600, //in seconds
  tagTypes: ['User', 'Links'],
  endpoints: (builder) => ({}),
})
