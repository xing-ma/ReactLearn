import React from 'react';
import { ProfileOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {LogTable} from '../../features/logs/index';

const { Header, Content, Sider } = Layout;
var data = [
  {id : 1, name : "日志管理", icon : ProfileOutlined,
  subMenus:[{
    Id:100, name : "列表"
  }]
  },
  {id : 2, name : "安全管理", icon : SafetyCertificateOutlined,
   subMenus: []
  }];

const headers = data.map((item)=>({key: item.id, label: item.name}));

const menus = data.map((item) => {
  return {
    key: item.id,
    icon: React.createElement(item.icon),
    label: item.name,
    children: item.subMenus.map((subItem) => {
      return {
        key: subItem.id,
        label: subItem.name,
      };
    }),
  };
});

const MainLayout = () => {
  const {token: { colorBgContainer, borderRadiusLG }} = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={headers}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['日志管理']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={menus}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          <Breadcrumb.Item>日志列表</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <LogTable />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;