import { createAction } from '@reduxjs/toolkit'
import { AppState, AppStore } from '@/app/store'
import { CookiesPayload } from '@/app/store/constants'

export const hydrateServer = createAction<AppState>('HYDRATE_SERVER')
export const hydrateCookies = createAction<CookiesPayload>('HYDRATE_COOKIES')
export const hydrateLocalStorage = createAction<AppStore>('HYDRATE_LOCAL_STORAGE')
