import { FC, useState, useEffect } from "react";
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { Row, Col } from "antd";
const RichText = () => {
    // 1. 创建editor状态，用来引用editor实例
    const [editor, setEditor] = useState<any>(null);
    // 编辑器内容
    const [html, setHtml] = useState("");
    // 工具栏配置
    const toolbarConfig = {};
    // 编辑器配置
    const editorConfig = {
        placeholder: "请输入内容...",
    };
    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return;
            editor.destroy();
            setEditor(null);
        };
    }, [editor]);
    return (
        <>
            <h3>富文本编辑器</h3>
            <Row gutter={6}>
                <Col span={14}>
                    <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
                        <Toolbar
                            editor={editor}
                            defaultConfig={toolbarConfig}
                            mode="default"
                            style={{ borderBottom: "1px solid #ccc" }}
                        />
                        <Editor
                            defaultConfig={editorConfig}
                            value={html}
                            onCreated={setEditor}
                            onChange={(editor) => setHtml(editor.getHtml())}
                            mode="default"
                            style={{ height: '450px', overflowY: "hidden" }}
                        />
                    </div>
                </Col>
                <Col span={10}>
                    <div style={{ marginTop: "0px", height: '533px', overflowY: "hidden",border: "1px solid #ccc"}}>{html}</div>
                </Col>
            </Row>
        </>
    );
};

export default RichText;
