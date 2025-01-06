import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '@/app/store'
import { localizations } from '@/app/store/configs/localizations'
import { AvailableLanguage, Themes } from '@/app/store/reducers/settings/types'
import { storeKey } from './slice'

export const selectSettingsState = (state: AppState) => state[storeKey]
export const selectedTheme = createSelector(selectSettingsState, (state) => state.theme as Themes)
export const selectedLanguageObject = (state: AppState): AvailableLanguage =>
  state[storeKey].languageObject
export const selectedDefaultLanguageObject = (): AvailableLanguage => localizations[0]
