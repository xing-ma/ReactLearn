'use client'
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import {
    ProfileOutlined,
    SafetyCertificateOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Sider } = Layout;

const { Header, Content } = Layout;

const MainLayout = ({ children }: React.PropsWithChildren) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                >
                    <Menu.Item
                        icon={<ProfileOutlined />}
                    >
                        <Link href="/menus/logs">日志管理</Link>
                    </Menu.Item>
                    <Menu.Item
                        icon={<SafetyCertificateOutlined />}
                    >
                        <Link href="/menus/security">安全管理</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }}>
                    <Header
                        style={{
                            padding: 20,
                            background: colorBgContainer,
                        }}>
                        
                    </Header>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    {children}
                </Content>
            </Layout>
        </Layout>

    );
};

export default MainLayout;
