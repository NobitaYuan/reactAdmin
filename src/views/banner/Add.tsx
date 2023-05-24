// src/views/
import React, { FC, useState, useRef, useMemo } from "react";
import { addBanner } from "@/api/banner";
import { Image, Input, Space, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
interface IAddProps {}

const Add: FC<IAddProps> = () => {
    const navigate = useNavigate();

    const [link, setLink] = useState("");
    const [alt, setAlt] = useState("");
    const [img, setImg] = useState("");

    const file = useRef<any>();

    const onChangeImgFile = () => {
        const filInfo = file.current.input.files[0];
        // 利用文件API FileReader 对象 生成图片base64地址
        const reader = new FileReader();
        reader.readAsDataURL(filInfo);
        reader.onload = function () {
            setImg(this.result as string);
        };
    };

    const flag = useMemo(() => {
        return link === "" || alt === "" || img === "";
    }, [link, alt, img]);

    const uploadImg = () => {
        addBanner({
            link,
            alt,
            img,
        }).then((res) => {
            if (res.data.code == "200") {
                message.success("上传成功");
                setLink('')
                setAlt('')
                setImg('')
            }
        });
    };

    return (
        <Space direction="vertical" style={{ width: 300 }}>
            <Input
                placeholder="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <Input
                placeholder="alt"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
            />
            <Input type="file" ref={file} onChange={onChangeImgFile} />

            <Input
                placeholder="图片地址"
                value={img}
                onChange={(e) => setImg(e.target.value)}
            />
            {/* 用于展示 */}
            <Image
                src={img}
                alt="The image you uploaded will be displayed here"
            />
            <Button type="primary" disabled={flag} onClick={uploadImg}>
                上传添加
            </Button>
        </Space>
    );
};

export default Add;
