import { MainLayout, MainLoader, MainError } from './components/layout/index';
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import { LogTable, Account, Profile, Permission } from './features/index';
import {
  ErrorRouter,
  ErrorRouterLoaderWithoutErrorElement,
  ErrorRouterLoaderHaveErrorElement,
  ErrorRouterErrorHaveErrorElement,
  LoaderRouter,
  LoaderRouterLoader,
  State,
  Effect,
  RouterAction,
  ActionLoader,
  DynamicRouter,
  DynamicLoader
} from './features/sample/index';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      loader: MainLoader,
      errorElement: <MainError />,
      children: [
        {
          path: "",
          index: true,
          element: <h2>hello world main</h2>
        },
        {
          path: "log",
          element: <LogTable />
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "account",
          element: <Account />
        },
        {
          path: "permission",
          element: <Permission />
        },
        {
          path: "sample",
          element: <><h2>hello sample</h2><Outlet /></>,
          errorElement: <h2>test sample</h2>,
          children: [
            {
              path: "router",
              element: <><h2>hello router</h2><Outlet /></>,
              errorElement: <h2>Error-显示Router层面的ErrorElement</h2>,
              children: [
                {
                  path: "error-router",
                  loader: ErrorRouterLoaderWithoutErrorElement,
                  element: <ErrorRouter />,
                },
                {
                  path: "error-router-error-element",
                  loader: ErrorRouterLoaderHaveErrorElement,
                  element: <ErrorRouter />,
                  errorElement: <ErrorRouterErrorHaveErrorElement />
                },
                {
                  path: "loader-router",
                  element: <LoaderRouter />,
                  loader: LoaderRouterLoader,
                },
                {
                  path: "action",
                  loader: ActionLoader,
                  action: async ({ params, request }) => {

                    let data = Object.fromEntries(await request.formData());
                    console.log("执行action提交,params:", params, "formData:", data);
                    return [data];
                  },
                  element: <RouterAction />,
                },
                {
                  path: "dynamic?/:id",
                  loader: DynamicLoader,
                  element: <DynamicRouter />
                }
              ]
            },
            {
              path: "hook",
              element: <><h2>hello hook</h2><Outlet /></>,
              children: [
                {
                  path: "state",
                  element: <State />
                },
                {
                  path: "effect",
                  element: <Effect />
                }
              ]
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
