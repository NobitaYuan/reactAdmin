import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface Istate{
    count:number
    collapsed:boolean
}

const initialState:Istate = {
    count:100,
    collapsed:localStorage.getItem('collapsed') == 'true'
}

// 创建请求函数
const appSlice = createSlice({
    name:'app',//模块名称
    initialState,//初始数据
    reducers:{//函数处理函数
        addCount(state,action:PayloadAction<number>){
            state.count+=action.payload
        },
        setCollapsed(state,action:PayloadAction<boolean>){
            localStorage.setItem('collapsed',String(action.payload))
            state.collapsed = action.payload
        }
    }
})

export const {addCount,setCollapsed} = appSlice.actions

export default appSlice.reducer