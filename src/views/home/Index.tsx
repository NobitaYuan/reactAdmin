// src/views/
import React, { FC, useState, useEffect } from "react";
import { CalculatorOutlined, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Statistic, Col, Row } from "antd";
import { getShopTotalNum, getUserTotalNum } from "@/api/home";
interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
    const [userNum, setUserNum] = useState(0);
    const [proNum, setProNum] = useState(0);

    useEffect(() => {
        getUserTotalNum().then((res) => setUserNum(res.data.data));
        getShopTotalNum().then((res) => setProNum(res.data.data));
    }, []);

    return (
        <>
            <Row gutter={26}>
                <Col >
                    <Statistic title="商品总数量" value={proNum}  prefix={<CalculatorOutlined />} ></Statistic>
                </Col>
                <Col >
                    <Statistic title="用户总数量" value={userNum} prefix={<UsergroupDeleteOutlined />}></Statistic>
                </Col>
            </Row>
        </>
    );
};

export default Home;
