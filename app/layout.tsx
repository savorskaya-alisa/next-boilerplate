import React from 'react'
import { Viewport } from 'next'
import { Toaster } from 'react-hot-toast'
import { Hydrated } from '@/app/ui/containers/hydrated'
import { I18nWrapper } from '@/app/ui/containers/i18n-wrapper'
import { StoreProvider } from '@/app/ui/containers/store-provider'
import { ThemeAutoSelect } from '@/app/ui/containers/theme-auto-select'

import './styles/globals.scss'

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
  width: 'device-width',
  themeColor: '#FFFFFF'
}

export const metadata = {
  title: {
    default: 'Next Boilerplate',
    template: `Next Boilerplate`
  },
  description: '',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body id="root">
          <I18nWrapper>
            <Hydrated>
              <div>{children}</div>

              <Toaster position="bottom-center" />
              <ThemeAutoSelect />
            </Hydrated>
          </I18nWrapper>
        </body>
      </html>
    </StoreProvider>
  )
}
