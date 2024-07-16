import { useState } from 'react';
import { Button } from 'antd';

export const State = () => {
    const [data1, setData1] = useState([0]);
    const [data2, setData2] = useState([0]);
    const [data3, setData3] = useState(0);
    const [data4, setData4] = useState(0);

    return (
        <>
            <div>
                <ul>
                    {
                        data1.map(item => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
                <Button onClick={() => {
                    var length = data1.length;
                    data1.push(length);
                    // 根据 data1 复制一个新的值进行设置
                    setData1([...data1]);
                }}>添加-重新渲染</Button>
            </div>
            <div>
                <ul>
                    {
                        data2.map(item => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
                <Button onClick={() => {
                    var length = data2.length;
                    data2.push(length);
                    // 设置的值还是 data2
                    setData2(data2);
                }}>添加-值不变不会重新渲染</Button>
            </div>
            <div>
                <h2>{data3}</h2>
                <Button onClick={() => {
                    setData3(n => n + 1);
                    setData3(n => n + 1);
                }}>+2</Button>
            </div>
            <div>
                <h2>{data4}</h2>
                <Button onClick={() => {
                    setData4(data4 + 1);
                    setData4(data4 + 1);
                }}>+2-真实情况之后加1</Button>
            </div>
        </>
    )
};