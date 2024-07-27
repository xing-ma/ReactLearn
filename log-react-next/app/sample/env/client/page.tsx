'use client'
export default async function Page() {
    return (
        <>
            <h2>客户端示例</h2>
            <h3>环境变量：{process.env.AUTH_TEST_VARIABLE1}</h3>
            <h3>多个环境文件存在相同名称的环境变量：{process.env.VARIABLE2}</h3>
            <h3>环境变量文件和Config文件存在相同名称的环境变量：{process.env.VARIABLE3}</h3>
            <h3>Public的环境变量：{process.env.NEXT_PUBLIC_VARIABLE4}</h3>
        </>
    );
}