import React, { FC, useEffect, useState } from "react";
import { Row, Col, Card, Space } from "antd";
import {
    UserDeleteOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    FileOutlined,
    MailOutlined,
    ReadOutlined,
    RotateRightOutlined,
    TagsOutlined,
} from "@ant-design/icons";
import DataCard from "@/views/dataScreen/dataCard";

import * as echarts from "echarts";

import "./Index.less";
import { rotate } from "@antv/g2/lib/util/transform";

const Index: FC = () => {
    const [height, setHeight] = useState(document.body.offsetHeight);
    useEffect(() => {
        document.body.addEventListener("resize", () => {
            setHeight(document.body.offsetHeight);
        });
    }, []);

    const [navlist, setNavList] = useState([
        { name: "用户管理", color: "#6bb8fc", icon: <UserDeleteOutlined /> },
        { name: "系统设置", color: "#a0d166", icon: <SettingOutlined /> },
        { name: "商品", color: "#fe9868", icon: <ShoppingCartOutlined /> },
        { name: "订单管理", color: "#ae83dd", icon: <FileOutlined /> },
        { name: "短信配置", color: "#ffcf6f", icon: <MailOutlined /> },
        { name: "文章管理", color: "#71d5cb", icon: <ReadOutlined /> },
        { name: "分销管理", color: "#ff88c8 ", icon: <TagsOutlined /> },
        { name: "优惠券", color: "#ffc063", icon: <RotateRightOutlined /> },
    ]);

    useEffect(() => {
        // 第一个图
        let Charts1 = echarts.init(
            document.querySelector("#Charts1") as HTMLDivElement
        );
        let Charts2 = echarts.init(
            document.querySelector("#Charts2") as HTMLDivElement
        );
        let Charts3 = echarts.init(
            document.querySelector("#Charts3") as HTMLDivElement
        );

        Charts1.setOption({
            // title: {
            //     text: "柱状图实例",
            // },
            tooltip: {
                // 鼠标移入到坐标轴时，触发提示框
                trigger: "axis",
                // 移入坐标轴时，提示框的配置项
                axisPointer: {
                    // 显示十字准星指示器
                    type: "cross", // 指示器样式
                    crossStyle: {
                        // 色值
                        color: "#999",
                    },
                },
            },
            legend: {
                data: ["订单金额", "订单数"],
                // 图例位置
                right: "45%",
            },
            xAxis: {
                axisLabel: {
                    fontSize: 12,
                    rotate: 40, // 文本旋转角度
                },
                boundaryGap: true,
                data: [
                    "04-27",
                    "04-28",
                    "04-29",
                    "04-30",
                    "05-01",
                    "05-02",
                    "05-03",
                    "05-04",
                    "05-05",
                    "05-06",
                    "05-07",
                    "05-08",
                    "05-09",
                    "05-10",
                    "05-11",
                    "05-12",
                    "05-13",
                    "05-14",
                    "05-15",
                    "05-16",
                    "05-17",
                    "05-18",
                    "05-19",
                    "05-20",
                    "05-21",
                    "05-22",
                    "05-23",
                    "05-24",
                    "05-25",
                    "05-26",
                ],
            },
            yAxis: [
                {
                    type: "value",
                    name: "订单金额",
                    min: 0,
                    max: 1000,
                    interval: 200,
                },
                {
                    type: "value",
                    name: "订单数",
                    min: 0,
                    max: 12,
                    interval: 2,
                },
            ],
            series: [
                {
                    name: "订单金额",
                    type: "bar", // 柱状图
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "#83bff6" },
                            { offset: 0.5, color: "#188df0" },
                            { offset: 1, color: "#188df0" },
                        ]),
                    },
                    data: [
                        0, 0, 0, 100, 200, 0, 600, 0, 0, 100, 0, 800, 0, 0, 400, 0, 0, 600, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 200, 900, 0,
                    ],
                },
                {
                    yAxisIndex: 1,
                    name: "订单数",
                    type: "line", // 折线图
                    data: [
                        0, 0, 7, 6, 8, 3, 8, 0, 5, 0, 2, 10, 0, 4, 0, 7, 0, 7, 0,
                        0, 0, 0, 0, 0, 0, 0, 2, 11, 5, 0,
                    ],
                    itemStyle: {
                        color: "#8acab3",
                    },
                },
            ],
            grid: {
                top: 50,
                right: 50,
                bottom: 20,
                left: 20, // 计算边距时，包含标签
                containLabel: true,
            },
        });

        Charts2.setOption({
            tooltip: {
                // 鼠标移入到坐标轴时，触发提示框
                trigger: "axis",
                // 移入坐标轴时，提示框的配置项
                axisPointer: {
                    // 显示十字准星指示器
                    type: "cross", // 指示器样式
                    crossStyle: {
                        // 色值
                        color: "#999",
                    },
                },
            },
            xAxis: {
                axisLabel: {
                    fontSize: 12,
                    rotate: 40, // 文本旋转角度
                },
                boundaryGap: true,
                data: [
                    "04-27",
                    "04-28",
                    "04-29",
                    "04-30",
                    "05-01",
                    "05-02",
                    "05-03",
                    "05-04",
                    "05-05",
                    "05-06",
                    "05-07",
                    "05-08",
                    "05-09",
                    "05-10",
                    "05-11",
                    "05-12",
                    "05-13",
                    "05-14",
                    "05-15",
                    "05-16",
                    "05-17",
                    "05-18",
                    "05-19",
                    "05-20",
                    "05-21",
                    "05-22",
                    "05-23",
                    "05-24",
                    "05-25",
                    "05-26",
                ],
            },
            yAxis: [
                {
                    type: "value",
                    name: "用户",
                    min: 0,
                    max: 80,
                    interval: 20,
                },
            ],
            series: [
                {
                    name: "用户",
                    type: "line", // 折线图
                    data: [
                        40, 50, 33, 20, 70, 10, 20, 30, 20, 60, 70, 80, 70, 30,
                        60, 80, 40, 30, 50, 40, 70, 20, 10, 7, 9, 8, 2, 11, 5,
                        3,
                    ],
                    areaStyle: {
                        color: "#d0eafb",
                    },
                    itemStyle: {
                        color: "#6a9cbd",
                    },
                    smooth: "true",
                },
            ],
            grid: {
                top: 50,
                right: 30,
                bottom: 20,
                left: 20, // 计算边距时，包含标签
                containLabel: true,
            },
        });

        Charts3.setOption({
            title: {
              text: '',
              subtext: '购买用户统计',
              left: 'left'
            },
            tooltip: {
              trigger: 'item',

            },
            legend: {
              orient: 'vertical',
              left:'65%'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: '未消费客户' },
                  { value: 135, name: '消费一次客户' },
                  { value: 30, name: '留存客户' },
                  { value: 10, name: '回流客户' },
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ],
          });

        window.addEventListener("resize", () => {
            Charts1 && Charts1.resize();
            Charts2 && Charts2.resize();
            Charts3 && Charts2.resize();
        });
    }, []);

    return (
        <div
            style={{
                position: "relative",
                padding: "5px",
                backgroundColor: "rgb(247 247 247)",
            }}
        >
            <h3
                className="IndexTitle"
                style={{
                    position: "absolute",
                    top: "-102px",
                    left: "30px",
                    fontSize: "25px",
                }}
            >
                数据大屏
            </h3>
            <Space direction="vertical" style={{ width: "100%" }}>
                <Row gutter={20}>
                    <Col span={6}>
                        <DataCard
                            title="销售额"
                            maindata={8000}
                            zuori="999"
                            huanbi="-100"
                            xiaoshou="1199.62元"
                        />
                    </Col>
                    <Col span={6}>
                        <DataCard
                            title="用户访问量"
                            maindata={999}
                            zuori="742"
                            huanbi="-95.95"
                            xiaoshou="10074Pv"
                        />
                    </Col>
                    <Col span={6}>
                        <DataCard
                            title="订单量"
                            maindata={30}
                            zuori="5"
                            huanbi="-100"
                            xiaoshou="17单"
                        />
                    </Col>
                    <Col span={6}>
                        <DataCard
                            title="新增用户"
                            maindata={9}
                            zuori="51"
                            huanbi="-90.19"
                            xiaoshou="1020人"
                        />
                    </Col>
                </Row>
                <Row gutter={10}>
                    {navlist.map((item, index) => {
                        return (
                            <Col span={3} key={index}>
                                <Card style={{ textAlign: "center",cursor:'pointer' }}>
                                    <div
                                        style={{
                                            color: item.color,
                                            fontSize: "30px",
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <p>{item.name}</p>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col span={24}>
                        <div
                            id="Charts1"
                            style={{
                                height: "300px",
                                width: "100%",
                                backgroundColor: "#fff",
                            }}
                        ></div>
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <div
                            id="Charts2"
                            style={{
                                height: "300px",
                                width: "100%",
                                backgroundColor: "#fff",
                            }}
                        ></div>
                    </Col>
                    <Col span={8}>
                        <div
                            id="Charts3"
                            style={{
                                height: "300px",
                                width: "100%",
                                backgroundColor: "#fff",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};

export default Index;
