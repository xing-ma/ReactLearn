import {useState} from 'react';
import { useLoaderData } from "react-router-dom";
import {Button} from 'antd';

export const LoaderRouter = () => {
    const data = useLoaderData();
    console.log("渲染-LoaderRouter");

    const [count, setCount] = useState(0);

    return (
        <>
            <h2>显示加载数据页面</h2>
            <h2>data: {data}</h2>
            <h2>点击次数：{count}</h2>
            <Button onClick={()=>{
                setCount(x=>x+1);
            }}>点击+1</Button>
        </>
    )
};

export const LoaderRouterLoader = async () => {
    // 模拟请求数据
    console.log("加载数据-LoaderRouterLoader");

    return "Hello Loader";
}