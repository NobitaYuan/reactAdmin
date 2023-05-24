import { FC, useState } from "react";
import ReactMarkdown from "react-markdown"; // 阅读器
import MdEditor from "react-markdown-editor-lite"; // 编辑器
import "react-markdown-editor-lite/lib/index.css"; // 样式
const MarkDown: FC = () => {
    const [content, setContent] = useState("");

    return (
        <>
            <h3>MarkDown编辑器</h3>
            <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => {
                    return <ReactMarkdown>{text}</ReactMarkdown>;
                }}
                onChange={({html,text}:{html:any;text:any})=>{
                    setContent(html)
                }}
            ></MdEditor>
            
            <div dangerouslySetInnerHTML={{__html:content}}></div>
        </>
    );
};

export default MarkDown;
