import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface ISidebar  {
    key:String
}

const initialState = {
    key:'/'
}

// 创建请求函数
const sidebarSlice = createSlice({
    name:'sidebar',//名字
    initialState,//初始数据
    reducers:{//处理函数
        changeSidebar(state,action:PayloadAction<string>){
            state.key = action.payload
        }
    }
})

export const {changeSidebar} = sidebarSlice.actions 

export default sidebarSlice.reducer