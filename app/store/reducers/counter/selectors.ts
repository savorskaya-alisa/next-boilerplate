import { AppState } from '@/app/store'
import { storeKey } from './slice'

export const selectCounterState = (state: AppState) => state[storeKey].count
