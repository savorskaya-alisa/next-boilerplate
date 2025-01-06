import { authSlice } from '@/app/store/reducers/auth'
import { counterSlice } from '@/app/store/reducers/counter'
import { settingsSlice } from '@/app/store/reducers/settings'

export const reducers = {
  [settingsSlice.name]: settingsSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [counterSlice.name]: counterSlice.reducer
}

export const slices = {
  [settingsSlice.name]: settingsSlice,
  [authSlice.name]: authSlice,
  [counterSlice.name]: counterSlice
}
