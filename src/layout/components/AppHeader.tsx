import React, { FC } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { setCollapsed } from "@/store/modules/app";
import AppBreadcrumbs from "@/components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import { changeLoginState } from "@/store/modules/admin";
import store from 'store2'
import {message} from 'antd'

const { Header } = Layout;
interface IAppHeaderProps {}
const AppHeader: FC<IAppHeaderProps> = () => {
    // 获取侧边栏的状态
    const collapsed = useAppSelector((state) => state.app.collapsed);
    // 获取用户名
    const adminname = useAppSelector((state) => state.admins.adminname);
    const dispatch = useAppDispatch(); // ts推荐写法


    // 退出函数
    const logOut = ()=>{
        store.remove('haigou-users')
        dispatch(changeLoginState(false))
        message.success("退出登录成功");
    }
    return (
        <Header
            className="site-layout-background"
            style={{ padding: 0, display: "flex" }}
        >
            <div>
                {collapsed ? (
                    <MenuFoldOutlined
                        className="trigger"
                        onClick={() => {
                            dispatch(setCollapsed(!collapsed));
                        }}
                    />
                ) : (
                    <MenuUnfoldOutlined
                        className="trigger"
                        onClick={() => {
                            dispatch(setCollapsed(!collapsed));
                        }}
                    />
                )}
            </div>
            <div style={{flex:1}}>
                <AppBreadcrumbs />
            </div>
            <div style={{marginRight:'24px'}}>
                <span>{adminname}</span>
                <span onClick={logOut} style={{color:'skyblue',cursor:'pointer'}}>退出</span>
            </div>
        </Header>
    );
};
export default AppHeader;
