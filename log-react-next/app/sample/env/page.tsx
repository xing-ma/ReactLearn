import React from 'react';
import { Button, Flex } from 'antd';
import Link from 'next/link';

export default async function Page() {
    return (
        <Flex wrap gap="small" className="site-button-ghost-wrapper">
            <Button>
                <Link href="/sample/env/server">前去服务端</Link>
            </Button>
            <Button>
                <Link href="/sample/env/client">前去客户端</Link>
            </Button>
        </Flex>
    )
}