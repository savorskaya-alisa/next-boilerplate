'use client'
import { useEffect } from 'react'
import { useAppSelector } from '@/app/store/hooks'
import { selectedTheme } from '@/app/store/reducers/settings'
import { Themes } from '@/app/store/reducers/settings/types'
import { setCookieWindow } from '@/utils/cookie'
import { useSystemTheme } from '@/utils/hooks/use-system-theme'

export function ThemeAutoSelect() {
  const systemTheme = useSystemTheme()
  const currentTheme = useAppSelector(selectedTheme)

  useEffect(() => {
    // для системной смены темы
    const html = document.documentElement
    const theme = systemTheme
    setCookieWindow('theme', theme)
    html.className = `theme-${theme}`
  }, [systemTheme])

  useEffect(() => {
    const newTheme = currentTheme === Themes.system ? systemTheme : currentTheme
    const html = document.documentElement
    setCookieWindow('theme', newTheme)
    html.className = `theme-${newTheme}`
  }, [currentTheme])

  return null
}
