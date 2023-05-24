import React, { FC } from "react";
import { Layout } from "antd";
import menus from '@/router/menu'
import {renderRoute} from '@/router/utils'
import {Routes,Route} from 'react-router-dom'
import Page404 from '@/views/error/Page404'

interface IAPPMainProps {}
const AppMain: FC<IAPPMainProps> = () => {
    const { Content } = Layout;
    return (
        <Content
            className="site-layout-background"
            style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
            }}
        >
            
                <Routes>
                    {renderRoute(menus)}
                    <Route path="*" element = { <Page404 /> } />
                </Routes>
                
            
        </Content>
    );
};

export default AppMain;
