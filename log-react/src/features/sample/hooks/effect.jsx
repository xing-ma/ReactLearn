import { useState, useEffect } from 'react';
import { Button } from 'antd';

export const Effect = () => {
    const [data1, setData1] = useState(0);
    const [data2, setData2] = useState(0);

    useEffect(() => {
        console.log("每次都会执行, value: ", data1);
    });

    useEffect(() => {
        console.log("加载组件才会执行");
    }, []);

    useEffect(() => {
        console.log("值变了才会执行");
    }, [data2]);

    useEffect(()=>{
        return ()=>{
            console.log("加载组件和卸载组件的时候执行");
        }
    },[]);

    return (
        <>
            <div>
                <h2>当前值：{data1}</h2>
                <Button onClick={() => {
                    setData1(n => n + 1);
                }}>+1</Button>
            </div>
            <div>
                <h2>当前值：{data2}</h2>
                <Button onClick={() => {
                    setData2(n => n + 1);
                }}>+1</Button>
            </div>
        </>
    )
}