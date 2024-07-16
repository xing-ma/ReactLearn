import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

export const LoaderRouter = () => {
    const data = useLoaderData();
    console.log("loader router", data);

    useEffect(() => {
        console.log("重新渲染 loader router 页面");
    });

    return (
        <>
            <h2>hello loader roter</h2>
            <h2>data: {data}</h2>
        </>
    )
};

export const LoaderRouterLoader = async () => {
    // 模拟请求数据
    console.log("load data from loader");

    return "Hello Loader";
}