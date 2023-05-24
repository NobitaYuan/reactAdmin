import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import store2 from 'store2'

interface Istate{
    loginState: boolean
    adminname: string
    token: string
    role: number
    checkedKeys: any[]
}

const initialState:Istate = {
    loginState: store2.get('haigou-users') ? store2.get('haigou-users')['loginState'] : false,
    adminname: store2.get('haigou-users') ? store2.get('haigou-users')['adminname'] : '',
    token: store2.get('haigou-users') ? store2.get('haigou-users')['X-Token'] : '',
    role: store2.get('haigou-users') ? store2.get('haigou-users')['role'] : 0,
    checkedKeys: store2.get('haigou-users') ? store2.get('haigou-users')['checkedKeys'] : []
}

// 创建请求函数
const adminSlice = createSlice({
    name:'admin',//模块名称
    initialState,//初始数据
    reducers:{//函数处理函数
        changeLoginState(state,action:PayloadAction<boolean>){
            state.loginState = action.payload
        },
        changeAdminName(state,action:PayloadAction<string>){
            state.adminname = action.payload
        },
        changeToken(state,action:PayloadAction<string>){
            state.token = action.payload
        },
        changeRole(state,action:PayloadAction<number>){
            state.role = action.payload
        },
        changeCheckedKeys(state,action:PayloadAction<any>){
            state.checkedKeys = action.payload
        },
    }
})

export const {
    changeAdminName,
    changeCheckedKeys,
    changeLoginState,
    changeRole,
    changeToken,
} = adminSlice.actions;

export default adminSlice.reducer