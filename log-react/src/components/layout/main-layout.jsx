import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LogTable } from '../../features/index';
import { Outlet, NavLink, useLoaderData, useNavigation, useRouteError } from "react-router-dom";
import { routerData } from '../../utils/router';

const { Header, Content, Sider } = Layout;

const menus = routerData.map((item) => {
  return {
    key: item.id,
    icon: React.createElement(item.icon),
    label: item.name,
    children: item.subMenus.map((subItem) => {
      return {
        key: subItem.id,
        label: subItem.name,
        label: <NavLink
          to={subItem.linkTo}
          className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
                ? "pending"
                : ""
          }>{subItem.name}</NavLink>,
        children: subItem.subMenus?.map((childrenSubItem) => {
          return {
            key: childrenSubItem.id,
            label: childrenSubItem.name,
            label: <NavLink
              to={childrenSubItem.linkTo}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }>{childrenSubItem.name}</NavLink>
          }
        })
      }
    }),
  };
});

const MainLayout = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  // 输出 root router 的 loader 数据
  const data = useLoaderData();
  console.log("main layout useLoaderData", data);

  const navigation = useNavigation();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
      </Header>
      <Layout>
        <Sider
          width={320}
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
            <div
              className={
                navigation.state === "loading" ? "loading" : ""
              }
            >
            </div>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

export const MainLoader = () => {
  return ["main"];
}

export const MainError = () => {

  const error = useRouteError();
  console.error("main layout router error:", error);

  return (
    <div>
      This is main errror
      <h2>{error.statusText || error.message}</h2>
      <Outlet />
    </div>
  )
}