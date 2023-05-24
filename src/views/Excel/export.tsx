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
    const [height, setHeight] = useState(document.body.offsetHeight);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setHeight(document.body.offsetHeight);
        });
    }, []);

    // 分页设置
    const config = usePagination({
        position: ["bottomLeft"],
        showSizeChanger: true,
        pageSizeOptions: [10, 20, 30, 40],
        showQuickJumper: true,
    });

    const [list, setList] = useState([]);
    const getProListData = () => {
        getProList().then((res) => {
            setList(res.data.data);
            // console.log(res.data.data)
        });
    };
    useEffect(() => {
        getProListData();
    }, []);

    // exportFn 导出函数
    const exportFn = () => {
        if (window.confirm("确定导出吗？")) {
            // 定义一个类
            let option: {
                fileName: string;
                datas: {
                    sheetData: DataType[];
                    sheetName: string;
                    sheetFilter: string[];
                    sheetHeader: string[];
                    columnWidths: number[];
                }[];
            };
            option = {
                fileName: "产品列表", // 导出的文件的名称
                datas: [
                    {
                        sheetData: list, // 表格数据
                        sheetName: "产品列表1", // excel表格中表格的名字
                        sheetFilter: ["proname", "img1", "category"], // 需要导出的数据的字段
                        sheetHeader: ["产品名称", "图片", "分类"], // 表头的值
                        columnWidths: [20, 20],
                    },
                    {
                        sheetData: list, // 表格数据
                        sheetName: "产品列表2", // excel表格中表格的名字
                        sheetFilter: [
                            "proname",
                            "img1",
                            "category",
                            "originprice",
                        ], // 需要导出的数据的字段
                        sheetHeader: ["产品名称", "图片", "分类", "价格"], // 表头的值
                        columnWidths: [20, 20],
                    },
                ],
            };
            var toExcel = new ExportJsonExcel(option); //new
            toExcel.saveExcel(); //保存
        }
    };

    return (
        <Space direction="vertical" style={{ display: "flex" }}>
            <Button type="primary" onClick={exportFn}>
                导出数据
            </Button>

            <Table
                rowKey="proid"
                dataSource={list}
                scroll={{ y: height - 330 }}
                pagination={config}
            >
                <Table.Column
                    title="序号"
                    render={(_, record, index) => {
                        return (
                            <span>
                                {(config.current - 1) * config.pageSize +
                                    index +
                                    1}
                            </span>
                        );
                    }}
                ></Table.Column>

                <Table.Column
                    title="图片"
                    dataIndex="img1"
                    render={(text) => {
                        return <Image src={text} style={{ height: 80 }} />;
                    }}
                ></Table.Column>

                <Table.Column
                    title="商品名称"
                    dataIndex="proname"
                ></Table.Column>

                <Table.Column
                    title="商品价格"
                    dataIndex="originprice"
                ></Table.Column>

                <Table.Column
                    title="是否秒杀"
                    dataIndex="isseckill"
                    render={(text, record: DataType) => {
                        return (
                            <Switch
                                defaultChecked={text === 1}
                                onChange={() => {
                                    console.log(text);
                                    updateSeckill({
                                        proid: record.proid,
                                        flag: text === 0,
                                    }).then(() => getProListData());
                                }}
                            />
                        );
                    }}
                ></Table.Column>

                <Table.Column
                    title="是否推荐"
                    dataIndex="isrecommend"
                    render={(text, record: DataType) => {
                        return (
                            <Switch
                                defaultChecked={text === 1}
                                onChange={() => {
                                    updateRecommend({
                                        proid: record.proid,
                                        flag: text === 0,
                                    }).then(() => getProListData());
                                }}
                            />
                        );
                    }}
                ></Table.Column>

                <Table.Column
                    title="操作"
                    render={(_, record: DataType) => {
                        return (
                            <Button
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            ></Button>
                        );
                    }}
                ></Table.Column>
            </Table>
        </Space>
    );
};

export default ExportExcel;
