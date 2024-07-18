import {useLoaderData, NavLink} from 'react-router-dom';
 
 export const DynamicRouter = () => {
    var data = useLoaderData();

    return (
        <>
            <h2>显示动态路由页面</h2>
            <NavLink to='/sample/router/dynamic/123'>跳转-指定Id</NavLink>
            <br/>
            <NavLink to='456'>基于当前路径跳转</NavLink>
            <h2>动态路由id: {data}</h2>
        </>
    )
}

export const DynamicLoader = async ({ request, params }) => {
    console.log("执行DynamicLoader,request:", request, "params:", params);
    return params.id;
};