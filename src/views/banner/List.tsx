// src/views/
import React, { FC, useState, useEffect } from "react";
import { getBannerList, deleteBanner } from "@/api/banner";
import { Table, Space, Button, Image, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "@/store/hook";
import { changeSidebar } from "@/store/modules/sidebar";
// 分页钩子
import usePagination from "@/hooks/usePagination";
interface IListProps {}

const List: FC<IListProps> = () => {
    // const dispatch = useAppDispatch()

    const [height, setHeight] = useState(document.body.offsetHeight); // 计算body的高度
    useEffect(() => {
        window.addEventListener("resize", () => {
            setHeight(document.body.offsetHeight);
        });
    }, []);

    // 分页设置
    const config = usePagination({
        position: ["bottomLeft"],
        showSizeChanger: true,
        pageSizeOptions: [1, 2, 3, 4],
        showQuickJumper: true,
    });

    const navigate = useNavigate();

    const [list, setList] = useState([]);
    const getBannerListData = () => {
        getBannerList().then((res) => {
            if (res.data) {
                setList(res.data.data);
            }
        });
    };

    useEffect(() => {
        getBannerListData();
    }, []);

    // 删除轮播图
    const delBanner = (id: any) => {
        deleteBanner({ bannerid: id }).then((res) => {
            if (res.data.code == "200") {
                message.success(res.data.message);
                // 更新数据
                getBannerListData();
            }
        });
    };

    return (
        <Space direction="vertical" style={{ display: "flex" }}>
            <Button
                type="primary"
                onClick={() => {
                    navigate("/banner/add");
                    // dispatch(changeSidebar("/banner/add"))
                }}
            >
                添加轮播图
            </Button>
            <Table
                rowKey="bannerid"
                dataSource={list}
                scroll={{ y: height - 330 }}
                pagination={config}
            >
                <Table.Column
                    title="序号"
                    render={(_, record, index) => {
                        return <span>{index + 1}</span>;
                    }}
                ></Table.Column>
                <Table.Column
                    title="图片"
                    dataIndex="img"
                    render={(text) => {
                        return <Image src={text} style={{ height: 80 }} />;
                    }}
                ></Table.Column>
                <Table.Column title="alt" dataIndex="alt"></Table.Column>
                <Table.Column title="link" dataIndex="link"></Table.Column>
                <Table.Column
                    title="操作"
                    render={({ bannerid }) => {
                        return (
                            <Popconfirm
                                title="确认删除吗？"
                                onConfirm={() => {
                                    delBanner(bannerid);
                                }}
                                onOpenChange={() => console.log("open change")}
                            >
                                <Button
                                    danger
                                    shape="circle"
                                    icon={<DeleteOutlined />}
                                ></Button>
                            </Popconfirm>
                        );
                    }}
                ></Table.Column>
            </Table>
        </Space>
    );
};

export default List;
