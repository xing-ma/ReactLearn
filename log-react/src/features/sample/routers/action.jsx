import { useSubmit, useLoaderData } from "react-router-dom";
import { Input } from 'antd';

export const RouterAction = () => {
    console.log("渲染-RouterAction");
    const submit = useSubmit();

    const loadData = useLoaderData();

    return (
        <>
            <h2>显示Action页面</h2>
            <h2>{loadData}</h2>
            <Input.Search enterButton="Submit" onSearch={(value) => {
                let formData = new FormData();
                formData.append("text", value);
                submit(formData, {
                    method: "post",
                    action: "/sample/router/action",
                });
            }} />
        </>
    )
}

export const ActionLoader = async () => {
    console.log("加载数据-ActionLoader");
    return "数据加载成功-ActionLoader";
}