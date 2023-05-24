// src/layout/Index.tsx 主要的布局文件
import { Layout } from "antd";
import React, { useState } from "react";
import SideBar from "./components/SideBar";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout id="admin-app">
            {/* 左侧菜单栏 */}
            <SideBar />
            <Layout className="site-layout">
                {/* 头部 */}
                <AppHeader />
                {/* 内容 */}
                <AppMain />
            </Layout>
        </Layout>
    );
};

export default App;
