import { FC } from "react";
import {Outlet} from 'react-router-dom'
const Index = ()=>{
    return (<>
        <h3>数据可视化</h3>
        <Outlet/>
    </>)
}

export default Index