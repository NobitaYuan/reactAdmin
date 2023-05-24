import React from "react";
import ReactDOM from "react-dom/client";

// 提供数据
import { Provider } from "react-redux";
import store from "@/store/Index";
import "./index.less";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 装载路由
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    // document.getElementById('root') as HTMLElement
    document.getElementById("root") as HTMLDivElement // 缩小类型范围
);
root.render(
    <React.StrictMode>
        {/* 提供数据 */}
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
