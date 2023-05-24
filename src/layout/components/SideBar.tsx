import React, { FC, useEffect, useMemo, useState } from "react";

import { Layout, Menu, Image, MenuProps } from "antd";
import { useAppSelector } from "@/store/hook";
import logo from "@/logo.svg";
import menus from "@/router/menu";
import { useNavigate, useLocation } from "react-router-dom";
import { renderMenu } from "@/router/utils";
interface ISideBarProps {}

const SideBar: FC<ISideBarProps> = () => {
    const { Sider } = Layout;
    const collapsed = useAppSelector((state) => state.app.collapsed);

    // const selectKeyinstore = useAppSelector((state)=>state.sidebar.key)

    const navigate = useNavigate();
    const { pathname } = useLocation();
    

    const [selectKey, setSelectKey] = useState<any>(pathname);

    const changeUrl = ({ key }: { key: string }) => {
        navigate(key);
        setSelectKey(key);
    };

    useMemo(() => {
        setSelectKey(pathname);
    }, [pathname]);


    return (
        <Sider theme="dark" trigger={null} collapsible collapsed={collapsed}>
            <div
                className="logo"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                }}
            >
                <Image src={logo} width="28px" height="28px" preview={false} />
                {!collapsed && (
                    <div
                        style={{
                            height: "32px",
                            overflow: "hidden",
                            lineHeight: "32px",
                        }}
                    >
                        嗨购后台管理系统
                    </div>
                )}
            </div>
            
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[selectKey]}
                onClick={changeUrl}
                items={menus}
            >
                {/* {renderMenu(menus)} */}
            </Menu>
        </Sider>
    );
};

export default SideBar;
