'use client'
import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import MenuItem from 'antd/es/menu/MenuItem';
import type { MenuProps } from 'antd';

const SampleLayout = ({ children }: React.PropsWithChildren) => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
        {
            key: "1",
            icon: "",
            label: <Link href="/sample/auth">Auth</Link>
        },
        {
            key: "2",
            icon: "",
            label: <Link href="/sample/env">Environment Variables</Link>
        },
        {
            key: "3",
            icon: "",
            label: <Link href="/sample/conventions">File Conventions</Link>,
            children: [
                {
                    key: "3-1",
                    icon: "",
                    label: <Link href="/sample/conventions/not_found">Not found</Link>,
                },
                {
                    key: "3-2",
                    icon: "",
                    label: <Link href="/sample/conventions/custom_error">Custom Error</Link>,
                },
                {
                    key: "3-3",
                    icon: "",
                    label: <Link href="/sample/conventions/global_error">Global Error</Link>,
                }
            ]
        }
    ]
    return (
        <>
            <Layout>
                <Layout.Sider trigger={null} collapsible >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" items={items} />
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
            </Layout >
        </>
    );
};

export default SampleLayout;
