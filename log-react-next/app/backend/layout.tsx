'use client'
import React, { useState } from 'react';
import { Layout, Menu, theme, Avatar, Col, Row, Button, Drawer, List } from 'antd';
import {ProfileOutlined,SafetyCertificateOutlined,} from '@ant-design/icons';
import Link from 'next/link';
import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import {signOut} from '../login/api'

const { Sider } = Layout;

const { Header, Content } = Layout;

const MainLayout = ({ children }: React.PropsWithChildren) => {

    const [isOpenedSettingPage, setOpenedSettingPage] = useState(false);

    const onCloseSettingPage = () => {
        setOpenedSettingPage(false);
    }

    const onOpenSettingPage = () => {
        setOpenedSettingPage(true);
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    return (
        <>
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
                            <Link href="/backend/logs">日志管理</Link>
                        </Menu.Item>
                        <Menu.Item
                            icon={<SafetyCertificateOutlined />}
                        >
                            <Link href="/backend/security">安全管理</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <Header
                            style={{
                                background: colorBgContainer,
                            }}>
                            <Row>
                                <Col span={1} push={23} style={{ margin: '0px 50px' }}>
                                    <Button type='link' onClick={onOpenSettingPage}>
                                        <Avatar size={50} icon={<UserOutlined />}>

                                        </Avatar>
                                    </Button>
                                </Col>
                            </Row>
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
            <Drawer
                width={300}
                open={isOpenedSettingPage}
                onClose={onCloseSettingPage}
                closeIcon={false}>
                <List>
                    <List.Item>
                        <Button type='link' icon={<LoginOutlined />} onClick={signOut}>Sign out</Button>
                    </List.Item>
                </List>
            </Drawer>
        </>
    );
};

export default MainLayout;
