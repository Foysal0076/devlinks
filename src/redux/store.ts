import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '@/redux/slice/apiSlice'
import userLinksReducer from '@/redux/slice/user-links-slice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userLinks: userLinksReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
