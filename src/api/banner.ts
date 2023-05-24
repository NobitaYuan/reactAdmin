// src/api/banner.ts
import request from "../utils/request";

export interface IBannerParams {
    img: string;
    alt: string;
    link: string;
}

export const getBannerList = () => {
    return request({
        url: "/banner/list",
    });
};
export const addBanner = (params: IBannerParams) => {
    return request({
        url: "/banner/add",
        method: "POST",
        data: params,
    });
};
export const deleteBanner = (params: { bannerid: string }) => {
    return request({
        url: "/banner/delete",
        data: params,
    });
};
