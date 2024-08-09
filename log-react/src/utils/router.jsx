import { ProfileOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

export const routerData = [
    {
        id: 1,
        name: "日志管理",
        icon: ProfileOutlined,
        subMenus: [{
            Id: 100,
            name: "列表",
            linkTo: "log"
        }]
    },
    {
        id: 2,
        name: "安全管理",
        icon: SafetyCertificateOutlined,
        subMenus: [
            {
                id: 201,
                name: "个人中心",
                linkTo: "profile"
            },
            {
                id: 202,
                name: "账号管理",
                linkTo: "account"
            },
            {
                id: 203,
                name: "权限管理",
                linkTo: "permission"
            }
        ]
    },
    {
        id: 3,
        name: "示例",
        icon: ProfileOutlined,
        linkTo: "sample",
        subMenus: [{
            Id: 300,
            name: "Routers",
            linkTo: "sample/router",
            subMenus: [
                {
                    Id: 301,
                    name: "Error-没有自己的ErrorElement",
                    linkTo: "sample/router/error-router",
                },
                {
                    Id: 302,
                    name: "Error-有自己的ErrorElement",
                    linkTo: "sample/router/error-router-error-element",
                },
                {
                    Id: 303,
                    name: "Error-路由不存在",
                    linkTo: "sample/router/test",
                },
                {
                    Id: 304,
                    name: "Loader-加载数据",
                    linkTo: "sample/router/loader-router",
                },
                {
                    Id: 305,
                    name: "Action-提交数据",
                    linkTo: "sample/router/action",
                },
                {
                    Id: 306,
                    name: "动态路由",
                    linkTo: "sample/router/dynamic",
                }
            ]
        },
        {
            Id: 350,
            name: "Hooks",
            linkTo: "sample/hook",
            subMenus: [
                {
                    Id: 351,
                    name: "State",
                    linkTo: "sample/hook/state",
                },
                {
                    Id: 352,
                    name: "Effect",
                    linkTo: "sample/hook/effect",
                },
                {
                    Id: 353,
                    name: "Reducer",
                    linkTo: "sample/hook/reducer",
                },
                {
                    Id: 354,
                    name: "Context",
                    linkTo: "sample/hook/context",
                },
                {
                    Id: 355,
                    name: "Ref",
                    linkTo: "sample/hook/ref",
                }
            ]
        }]
    }
];