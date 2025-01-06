'use client'
import React, { PropsWithChildren } from 'react'
import { I18nProvider } from '@coxy/i18n'
import { useAppSelector } from '@/app/store/hooks'
import {
  selectedDefaultLanguageObject,
  selectedLanguageObject
} from '@/app/store/reducers/settings'

export function I18nWrapper(props: PropsWithChildren) {
  const lang = useAppSelector(selectedLanguageObject)
  const defaultLang = useAppSelector(selectedDefaultLanguageObject)

  return (
    <I18nProvider fallback={defaultLang.code} language={lang?.code || defaultLang.code}>
      {props.children}
    </I18nProvider>
  )
}
