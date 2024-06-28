type AuthSettingDto = {
    baseApi: string;
    token_endpoint: string;
    client_id: string;
    client_secret: string;
    grant_type: string;
    userInfo_endpoint: string;
}
export type EvnDto = {
    baseApi: string;
    auth: AuthSettingDto;
}

export const Env: EvnDto = require("./config.json");