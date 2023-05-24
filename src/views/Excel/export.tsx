// src/views/excel/Export.tsx
import React, { FC, useState, useEffect } from "react";
import { Table, Space, Button, Image, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import usePagination from "@/hooks/usePagination";
import { getProList, updateRecommend, updateSeckill } from "@/api/pro";
import ExportJsonExcel from "js-export-excel";
interface IExportExcelProps {}
// 123
interface DataType {
    banners: string[];
    brand: string;
    category: string;
    desc: string;
    discount: number;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    isrecommend: number;
    issale: number;
    isseckill: number;
    originprice: number;
    proid: string;
    proname: string;
    sales: number;
    stock: number;
}

const ExportExcel: FC<IExportExcelProps> = () => {
    return (
        <>
            <h1>ExportExcel</h1>
            <p>属实有些没看懂啊！</p>
        </>
    );
};

export default ExportExcel;
