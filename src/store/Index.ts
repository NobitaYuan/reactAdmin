import {configureStore} from '@reduxjs/toolkit'
import appReducer from './modules/app'
import adminReducer from './modules/admin'
import sidebarReducer from './modules/sidebar'
const store = configureStore({
    // 整合模块
    reducer:{
        app:appReducer,
        admins:adminReducer,
        sidebar:sidebarReducer
    }
})

// 定义State和dispatch类型  从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;