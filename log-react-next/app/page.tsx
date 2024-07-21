import React from 'react';
import { Button, Flex } from 'antd';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <Flex wrap gap="small" className="site-button-ghost-wrapper">
      <Button>
        <Link href="/backend">前去后台管理系统</Link>
      </Button>
      <Button>
        <Link href="/sample">前去示例</Link>
      </Button>
    </Flex>
  );
};

export default Home;
