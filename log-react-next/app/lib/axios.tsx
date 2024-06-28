import Axios, { InternalAxiosRequestConfig } from 'axios';
import { auth } from "../../auth"
import { Env } from '../config/index';
const https = require('https');

export const apiAxios = Axios.create({
    baseURL: Env.baseApi,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

apiAxios.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const session = await auth();

    console.log("axios interceptors session:", session);
    console.log("axios interceptors config:", config);
    if (session && session.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = "application/json";
    }

    config.headers.Accept = 'application/json';

    return config;
});

apiAxios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log("error:", error);
        return Promise.reject(error);
    }
);

export const authApiAxios = Axios.create({
    baseURL: Env.auth.baseApi,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

authApiAxios.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const session = await auth();

    if (session && session.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = "application/json";
    }

    config.headers.Accept = 'application/json';
    return config;
});

authApiAxios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log("error:", error);
        return Promise.reject(error);
    }
);