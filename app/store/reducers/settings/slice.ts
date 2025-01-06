import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AvailableLanguage, Themes } from '@/app/store/reducers/settings/types'
import patchStateReducer from '@/app/store/utils/patch-state'

export const storeKey = '@redux/settings'

export interface SettingsState {
  languageObject: AvailableLanguage
  theme: Themes
}

const initialState: SettingsState = {
  languageObject: undefined as never,
  theme: Themes.system
}

export const whitelist = ['languageObject', 'theme']

export const settingsSlice = createSlice({
  name: storeKey,
  initialState,
  reducers: {
    patchSettingsState: (state, action: PayloadAction<Partial<SettingsState>>) => {
      patchStateReducer(state, action)
    },
    setLanguage: (state: SettingsState, action: PayloadAction<AvailableLanguage>) => {
      state.languageObject = action.payload
    },
    setUiTheme: (state: SettingsState, action: PayloadAction<Themes>) => {
      state.theme = action.payload
    }
  }
})

export const { patchSettingsState, setLanguage, setUiTheme } = settingsSlice.actions
