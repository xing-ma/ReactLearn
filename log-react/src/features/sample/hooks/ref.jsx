import React, { useRef, useEffect, useState } from 'react';

export const Ref = () => {
    return (
        <>
            <TextInput />
            <Timer />
        </>
    )
}

const TextInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); // 组件挂载后自动聚焦到输入框
    }, []);

    return (
        <>
            <h2>访问dom元素</h2>
            <h3>请输入内容：<input ref={inputRef} type="text" /></h3>
        </>
    )
}

const Timer = () => {
    const [count, setCount] = useState(0);
    const timerId = useRef(null);

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timerId.current);
    }, []);

    return (
        <>
            <h2>存储可变值</h2>
            <h3><div>Count: {count}</div></h3>
        </>
    )
}