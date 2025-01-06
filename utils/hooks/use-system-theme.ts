import { useEffect, useState } from 'react'

export function useSystemTheme(): 'dark' | 'light' {
  const hasWindow = typeof window !== 'undefined'

  const getIsCurrentDarkTheme = () => {
    // for ssr
    if (!hasWindow) {
      return
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [isDarkTheme, setIsDarkTheme] = useState(getIsCurrentDarkTheme())
  const mqListener = (e: MediaQueryListEventMap['change']) => setIsDarkTheme(e.matches)

  useEffect(() => {
    if (!hasWindow) {
      return
    }

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

    darkThemeMq.addEventListener('change', mqListener)

    return () => darkThemeMq.removeEventListener('change', mqListener)
  }, [])

  return isDarkTheme ? 'dark' : 'light'
}
