import { useLoaderData, useRouteError } from "react-router-dom";

export const ErrorRouter = () => {
    const data = useLoaderData();
    
    return (
        <>
            <h2>hello world error router</h2>
        </>
    )
};

export const ErrorRouterLoaderHaveErrorElement = () => {
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
    });
}

export const ErrorRouterLoaderWithoutErrorElement = () => {
    throw new Response("", {
        status: 404,
        statusText: "Not Found",
    });
}

export const ErrorRouterErrorHaveErrorElement = () => {
    const error = useRouteError();
    console.error("error:", error);

    return (
        <div>
            <h2>Error-显示Error-Router自己的ErrorElement</h2>
            <h2>ErrorMessage:{error.statusText || error.message}</h2>
        </div>
    )
}