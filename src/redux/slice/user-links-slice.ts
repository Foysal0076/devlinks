import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/redux/store'
import { Link } from '@/types'

type UserBasicInfo = {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar: string
}

type State = UserBasicInfo & {
  links: Link[]
}

const initialState: State = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  links: [],
}

const userLinksSlice = createSlice({
  name: 'userLinks',
  initialState,
  reducers: {
    updateUserInfoAndLinks: (
      state,
      action: PayloadAction<{ key: keyof State; value: string | Link[] }>
    ) => {
      const { key, value } = action.payload
      if (key in state) {
        if (key === 'links' && Array.isArray(value)) {
          state.links = value
        } else if (key !== 'links' && typeof value === 'string') {
          state[key] = value
        }
      }
    },
    setUserInfoAndLinks: (state, action: PayloadAction<State>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const getUserInfoAndLinksFromRedux = (state: RootState) =>
  state.userLinks

export const { setUserInfoAndLinks, updateUserInfoAndLinks } =
  userLinksSlice.actions
export default userLinksSlice.reducer
