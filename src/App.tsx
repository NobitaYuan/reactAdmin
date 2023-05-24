import { FC } from "react";
import { Button } from "antd";
import Index from "./layout/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/views/login/Index";

import { useAppSelector } from "@/store/hook";

interface IAppProps {}

const App: FC<IAppProps> = () => {
    const loginState = useAppSelector((state) => state.admins.loginState);
    return (
        <Routes>
            <Route path="/*" element={loginState ? <Index /> : <Login />} />
            <Route
                path="/login"
                element={loginState ? <Index /> : <Navigate to="/login" />}
            />
        </Routes>
    );
};

export default App;
