// src/views/
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "./Index.less";
import store from "store2";
import { IAdminParams, adminLoginFn } from "@/api/admin";
import {
    changeAdminName,
    changeCheckedKeys,
    changeLoginState,
    changeRole,
    changeToken,
} from "@/store/modules/admin";
import { useAppDispatch } from "@/store/hook";
interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onFinish = (value: IAdminParams) => {
        console.log(value);
        adminLoginFn(value).then((res) => {
            // console.log(res);
            switch (res.data.code) {
                case "10003":
                    message.error("密码错误");
                    break;
                case "10005":
                    message.error("没有该账户，请联系超管");
                    break;
                default:
                    message.success("登录成功");
                    // 存信息到本地以及状态管理器
                    const result = res.data.data;
                    const haigouUsers = {
                        loginState: true,
                        "X-Token": result.token,
                        adminname: result.adminname,
                        role: result.role,
                        checkedKeys: result.checkedKeys,
                    };
                    store.set("haigou-users", haigouUsers);
                    dispatch(changeLoginState(true));
                    dispatch(changeAdminName(result.adminname));
                    dispatch(changeToken(result.token));
                    dispatch(changeRole(result.role));
                    dispatch(changeCheckedKeys(result.checkedKeys));
                    // 跳转到系统首页
                    navigate("/", { replace: true });
                    break;
            }
        });
    };
    return (
        <div id="loginForm">
            <div className="loginBox">
                <h1>嗨购管理系统</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        adminname: "admin",
                        password: "123456",
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="adminname"
                        rules={[
                            { required: true, message: "请输入管理员账户！" },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="账户"
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "请输入密码!" }]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            登 录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
