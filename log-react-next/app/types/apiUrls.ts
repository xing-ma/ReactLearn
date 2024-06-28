const userBaseApi = "api/user/";
const logBaseApi = "api/log/";

type UserUrlDto = {
    getMineProfile: string;
}

type LogUrlDto = {
    getLogs: string;
    addLog: string;
}

export const UserUrls: UserUrlDto = {
    getMineProfile: userBaseApi + "getMineProfile"
};

export const LogUrls: LogUrlDto = {
    getLogs: logBaseApi + "getForManage",
    addLog: logBaseApi + "add"
};