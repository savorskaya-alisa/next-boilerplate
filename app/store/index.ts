import { objectKeys } from '@coxy/utils'
import {
  configureStore,
  createListenerMiddleware,
  ThunkDispatch,
  UnknownAction
} from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import * as thunk from 'redux-thunk'
import { reducers, slices } from './reducers/reducers'
export { Provider } from 'react-redux'

export const listenerMiddleware = createListenerMiddleware()

const logger = createLogger({ collapsed: true })

export const createStore = (preloadedState: object, additionalReducers = {}) => {
  const initialReducers = {
    ...reducers,
    ...additionalReducers
  }

  // restore initial state
  objectKeys(preloadedState).forEach((storeKey: keyof typeof initialReducers) => {
    const initialStoreData = slices?.[storeKey]?.getInitialState() || {}
    const currentStateStore = (preloadedState as never)[storeKey]

    objectKeys(initialStoreData).forEach((initialKey) => {
      if (currentStateStore[initialKey] === undefined) {
        currentStateStore[initialKey] = initialStoreData[initialKey]
      }
    })
  })

  const middlewares: any[] = []

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  return configureStore({
    reducer: initialReducers,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
        actionCreatorCheck: false,
        immutableCheck: false
      })
        .concat(listenerMiddleware.middleware, thunk.withExtraArgument({}))
        .concat(middlewares)
    },
    preloadedState
  })
}

export type AppState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = ThunkDispatch<AppState, undefined, UnknownAction>
