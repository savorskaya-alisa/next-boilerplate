import { Store } from '@reduxjs/toolkit'
import axios from 'axios'
import { selectedAccessToken } from '@/app/store/reducers/auth'

export const BASE_URL = ''

export const apiChat = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: undefined
  },
  timeout: 30000
})

// hack for remove circular dependencies
let locallyStore: Store | null = null

export function __setApiStore(store: Store) {
  locallyStore = store
}

apiChat.interceptors.request.use((config) => {
  const state = locallyStore?.getState()
  config.headers.authorization = `Bearer ${selectedAccessToken(state)}`

  return config
})
