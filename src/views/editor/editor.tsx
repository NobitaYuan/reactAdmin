import { FC } from "react";
import {Outlet} from 'react-router-dom'
const Index = ()=>{
    return (<>
        <h2>编辑器</h2>
        <Outlet/>
    </>)
}

export default Index