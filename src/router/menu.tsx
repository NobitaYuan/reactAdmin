// src/router/menu.tsx

import {
    HomeOutlined,
    UploadOutlined,
    PictureOutlined,
    ProfileOutlined,
    OrderedListOutlined,
    FilterOutlined,
    TeamOutlined,
    UserOutlined,
    SettingOutlined,
} from "@ant-design/icons";

import Home from "@/views/home/Index";

import Banner from "@/views/banner/Index";
import BannerList from "@/views/banner/List";
import BannerActive from "@/views/banner/Active";
import BannerAdd from "@/views/banner/Add";

import Product from "@/views/product/Index";
import ProductSearch from "@/views/product/Search";
import ProductHomeList from "@/views/product/list/Home";
import ProductDetailList from "@/views/product/list/Detail";
import ProductCartList from "@/views/product/list/Cart";

import Account from "@/views/account/Index";
import UserList from "@/views/account/UserList";
import AdminList from "@/views/account/AdminList";

import Setting from "@/views/setting/Index";

import DataView from "@/views/dataView/Data";
import ECharts from "@/views/dataView/ECharts";
import HightCharts from "@/views/dataView/HightCharts";
import AntV from "@/views/dataView/AntV";

import Editor from "@/views/editor/editor";
import MarkDown from "@/views/editor/markDown";
import RichText from "@/views/editor/richText";

import Excel from "@/views/Excel/Index";
import Import from "@/views/Excel/Import";
import Export from '@/views/Excel/export'

import Map from '@/views/map/Index'
const menus: any[] = [
    {
        label: "系统首页",
        key: "/",
        icon: <HomeOutlined />,
        element: <Home />,
    },
    {
        label: "轮播图管理",
        key: "/banner",
        icon: <UploadOutlined />,
        element: <Banner />,
        children: [
            {
                label: "首页轮播图",
                key: "/banner/home",
                icon: <PictureOutlined />,
                element: <BannerList />,
            },
            {
                label: "活动页轮播图",
                key: "/banner/active",
                icon: <PictureOutlined />,
                element: <BannerActive />,
            },
            {
                label: "添加轮播图",
                key: "/banner/add",
                icon: <UploadOutlined />,
                element: <BannerAdd />,
            },
        ],
    },
    {
        label: "产品管理",
        key: "/pro",
        icon: <ProfileOutlined />,
        element: <Product />,
        children: [
            {
                label: "产品列表",
                key: "/pro/list",
                icon: <OrderedListOutlined />,
                // element: <ProductList />,
                children: [
                    {
                        label: "首页产品",
                        icon: <ProfileOutlined />,
                        key: "/pro/list/home",
                        element: <ProductHomeList />,
                    },
                    {
                        label: "详情推荐",
                        icon: <ProfileOutlined />,
                        key: "/pro/list/detail",
                        element: <ProductDetailList />,
                    },
                    {
                        label: "购物车推荐",
                        icon: <ProfileOutlined />,
                        key: "/pro/list/cart",
                        element: <ProductCartList />,
                    },
                ],
            },
            {
                label: "筛选列表",
                key: "/pro/search",
                icon: <FilterOutlined />,
                element: <ProductSearch />,
            },
        ],
    },
    {
        label: "账户管理",
        key: "/account",
        icon: <TeamOutlined />,
        element: <Account />,
        children: [
            {
                label: "用户列表",
                key: "/account/userlist",
                icon: <UserOutlined />,
                element: <UserList />,
            },
            {
                label: "管理员列表",
                key: "/account/adminlist",
                icon: <UserOutlined />,
                element: <AdminList />,
            },
        ],
    },
    {
        label: "设置",
        key: "/setting",
        icon: <SettingOutlined />,
        element: <Setting />,
    },
    {
        label: "数据可视化",
        key: "/data",
        icon: <SettingOutlined />,
        element: <DataView />,
        children: [
            {
                label: "Echarts",
                key: "/data/echarts",
                icon: <SettingOutlined />,
                element: <ECharts />,
            },
            {
                label: "hightcharts",
                key: "/data/hightcharts",
                icon: <SettingOutlined />,
                element: <HightCharts />,
            },
            {
                label: "antv",
                key: "/data/antv",
                icon: <SettingOutlined />,
                element: <AntV />,
            },
        ],
    },
    {
        label: "文本编辑器",
        key: "/editor",
        icon: <SettingOutlined />,
        element: <Editor />,
        children: [
            {
                label: "富文本编辑器",
                key: "/editor/richtext",
                icon: <SettingOutlined />,
                element: <RichText />,
            },
            {
                label: "MarkDown",
                key: "/editor/markdown",
                icon: <SettingOutlined />,
                element: <MarkDown />,
            },
        ],
    },
    {
        label: "Excel",
        key: "/excel",
        icon: <SettingOutlined />,
        element: <Excel />,
        children: [
            {
                label: "导入",
                key: "/excel/import",
                icon: <SettingOutlined />,
                element: <Import />,
            },
            {
                label: "导出",
                key: "/excel/export",
                icon: <SettingOutlined />,
                element: <Export />,
            },
        ],
    },
    {
        label: "地图",
        key: "/map",
        icon: <SettingOutlined />,
        element:<Map/> ,
    },
];

export default menus;
