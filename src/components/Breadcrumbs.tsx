import React, { FC, useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

interface IBreadcrumbsProps {}

const Breadcrumbs: FC<IBreadcrumbsProps> = () => {
    const [breadcrumbs, setBreadcrumbs] = useState<any>([]);
    const location = useLocation();

    useEffect(() => {
        var breadParese: any = {
            "/banner/add": "轮播图管理/轮播图添加",
            "/banner/home": "轮播图管理/轮播图首页",
            "/banner/active": "轮播图管理/活动页",
            "/pro/list/home": "产品管理/产品列表/首页",
            "/pro/list/detail": "产品管理/产品列表/详情推荐",
            "/pro/list/cart": "产品管理/产品列表/购物车",
            "/pro/search": "产品管理/筛选列表",
            "/account/userlist": "账户管理/用户列表",
            "/account/adminlist": "账户管理/管理员列表",
            "/setting": "设置",
        };

        var arr = [breadParese[location.pathname]];
        setBreadcrumbs(arr);
    }, [location]);
    return (
        <nav>
            <div
                style={{
                    position: "relative",
                    top: "20px",
                    height: "20px",
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {breadcrumbs &&
                    breadcrumbs.map((item: any, index: any) => {
                        return <div key={index}>{item}</div>;
                    })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
