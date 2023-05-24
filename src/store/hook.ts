import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux'

import {AppDispatch,RootState} from './Index'


/* 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
*/

// 负责更改数据
export const useAppDispatch:()=>AppDispatch = useDispatch
// 负责获取数据
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector