'use client'
import React, { useState } from 'react';
import { Layout, Menu, theme} from 'antd';
import Link from 'next/link';

const SampleLayout = ({ children }: React.PropsWithChildren) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Layout>
                <Layout.Sider trigger={null} collapsible >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item>
                            <Link href="/sample/auth">Auth</Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout>
                    <Layout.Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        {children}
                    </Layout.Content>
                </Layout>
            </Layout>
        </>
    );
};

export default SampleLayout;
