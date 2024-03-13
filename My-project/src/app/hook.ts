import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch } from './store'
import { RootState } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
