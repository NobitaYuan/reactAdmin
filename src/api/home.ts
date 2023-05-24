// src/api/home.ts
import request from "@/utils/request";

export const getUserTotalNum = () => {
    return request({
        url: "/statistic/user",
    });
};

export const getShopTotalNum = () => {
    return request({
        url: "/statistic/product",
    });
};
