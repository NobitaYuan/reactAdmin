// src/views/excel/Import.tsx
import { Button, Table, Switch, Image } from "antd";
import React, { FC, useState, useEffect } from "react";
import usePagination from "@/hooks/usePagination";
import * as XLSX from "xlsx";
interface DataType {
    proid: string;
    proname: string;
    img1: string;
    originprice: number;
    discount: number;
    sales: number;
    stock: number;
    category: string;
    brand: string;
    issale: number;
    isrecommend: number;
    isseckill: number;
}
interface IImportExcelProps {}

const ImportExcel: FC<IImportExcelProps> = () => {
    // 高度设置
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

    const [proList, setProList] = useState([]);

    const importExcel = () => {
        // 导入数据函数
        const file = (document.querySelector("#fileRef") as HTMLInputElement)
            .files![0];
        const reader = new FileReader();
        reader.readAsBinaryString(file!); // 转成 二进制格式
        reader.onload = function () {
            const workbook = XLSX.read(this.result, { type: "binary" });
            const t = workbook.Sheets["list"]; // 拿到表格数据
            const r: any = XLSX.utils.sheet_to_json(t); // 转换成json格式
            setProList(r);
            // console.log(r);
        };
    };

    return (
        <>
            <Button
            type="primary"
                onClick={() => {
                    // 触发文件选择器
                    (
                        document.getElementById("fileRef") as HTMLInputElement
                    ).click();
                }}
            >
                导入数据
            </Button>
            <input type="file" hidden id="fileRef" onChange={importExcel} />
            <Table
                rowKey="proid"
                dataSource={proList}
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
                        return <Switch defaultChecked={text === 1} disabled />;
                    }}
                ></Table.Column>

                <Table.Column
                    title="是否推荐"
                    dataIndex="isrecommend"
                    render={(text, record: DataType) => {
                        return <Switch defaultChecked={text === 1} disabled />;
                    }}
                ></Table.Column>
            </Table>
        </>
    );
};

export default ImportExcel;
