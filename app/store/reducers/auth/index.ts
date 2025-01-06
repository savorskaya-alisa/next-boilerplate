import { objectKeys } from '@coxy/utils'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { deleteCookie, setCookie } from 'cookies-next'
import { AppState } from '@/app/store'
import { hydrateCookies } from '@/app/store/actions/hydrate'
import { CookiesPayload, CookiesTokens } from '@/app/store/constants'
import { actionUserLogout } from '@/app/store/reducers/auth/api'

export const storeKey = '@redux/auth'

export interface AuthState {
  accessToken: string
}

const initialState: AuthState = {
  accessToken: ''
}

export const whitelist = objectKeys(initialState)

export const authSlice = createSlice({
  name: storeKey,
  initialState,
  reducers: {
    setAccessToken: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload
      if (action.payload) {
        setCookie(CookiesTokens.accessToken, action.payload)
      } else {
        deleteCookie(CookiesTokens.accessToken)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(hydrateCookies, (state: AuthState, action: PayloadAction<CookiesPayload>) => {
      state.accessToken = action.payload[CookiesTokens.accessToken]
    })

    builder.addCase(actionUserLogout, (state: AuthState) => {
      state.accessToken = ''
      deleteCookie(CookiesTokens.accessToken)
    })
  }
})

export const { setAccessToken } = authSlice.actions

export const selectedAccessToken = (state: AppState) => state[storeKey].accessToken
