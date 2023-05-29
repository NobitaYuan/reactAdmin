import { message } from "antd";

import axios from "axios";

import store2 from "store2";

// 基础配置
const instance = axios.create({
    baseURL: "http://121.89.205.189:3000/admin",
    timeout: 60000,
});
// 请求拦截
instance.interceptors.request.use(
    (config) => {
        const storeUsers = store2.get("haigou-users");
        config.headers.token = storeUsers && (storeUsers["X-Token"] || "");
        return config;
    },
    (err) => {
        console.log("请求拦截错误", err);
    }
);
// 响应拦截
instance.interceptors.response.use(
    (response: any) => {
        if (response.data.code == "10119") {
            store2.remove("haigou-users");
            message.warning("登陆失败，请重新登陆！");
            // window.location.href = "/login";
            return;
        }
        return response;
    },
    (err) => {
        console.log("响应拦截错误", err);
    }
);

export default function request(config: any) {
    // 接口请求 必须参数  url method  data  headers
    const { url = "", method = "GET", data = {}, headers = {} } = config; // 区分不同的数据请求 为了执行时传入的数据请求方式统一性 GEt GeT get GET

    switch (method.toUpperCase()) {
        case "GET":
            return instance.get(url, { params: data });
        case "POST": // 可能数据请求方式 表单提交  文件提交   默认json // 表单提交
            if (
                headers["content-type"] === "application/x-www-form-url-encoded"
            ) {
                // 转换参数  URLSearchParams  / 第三方库 qs
                const p = new URLSearchParams();
                for (const key in data) {
                    p.append(key, data[key]);
                }
                return instance.post(url, p, { headers });
            } // 文件提交

            if (headers["content-type"] === "multipart/form-data") {
                const p = new FormData();
                for (const key in data) {
                    p.append(key, data[key]);
                }
                return instance.post(url, p, { headers });
            } // 默认 application/json
            return instance.post(url, data); // 修改数据 - 所有的数据的更新
        case "PUT":
            return instance.put(url, data); // 删除数据
        case "DELETE":
            return instance.delete(url, { data }); // 修改数据 - 部分的数据的更新
        case "PATCH":
            return instance.patch(url, data);
        default:
            return instance(config);
    }
}
