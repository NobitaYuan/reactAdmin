// 路由遍历
//
import { Menu } from "antd";
import { Route } from "react-router-dom";

export const renderMenu = (menus: any[]) => {
    return menus.map((item) => {
        if (item.children) {
            return (
                <Menu.SubMenu
                    title={item.label}
                    icon={item.icon}
                    key={item.key}
                >
                    {renderMenu(item.children)}
                </Menu.SubMenu>
            );
        } else {
            return (
                <Menu.Item key={item.key} icon={item.icon}>
                    {item.label}
                </Menu.Item>
            );
        }
    });
};

export const renderRoute = (menus: any[]) => {
    return menus.map((item) => {
        if (item.children) {
            
            return (
                <Route key={item.key} path={item.key} element={item.element}>
                    {renderRoute(item.children)}
                </Route>
            );
        } else {
            // console.dir(item.key+'-'+JSON.stringify(item.element))
            return (
                
                <Route
                    key={item.key}
                    path={item.key}
                    element={item.element}
                ></Route>
            );
        }
    });
};
