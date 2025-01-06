import { authSlice, whitelist as authWhitelist } from '@/app/store/reducers/auth'
import { counterSlice, whitelist as counterWhitelist } from '@/app/store/reducers/counter'
import { settingsSlice, whitelist as settingsWhitelist } from '@/app/store/reducers/settings'

export const whitelist = {
  [settingsSlice.name]: settingsWhitelist,
  [authSlice.name]: authWhitelist,
  [counterSlice.name]: counterWhitelist
}
