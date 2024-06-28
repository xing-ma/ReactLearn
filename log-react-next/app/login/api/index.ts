import { Env } from '../../config/index';
import { authApiAxios, apiAxios } from '../../lib/axios';
import { LoginFormDto, AuthUserDto } from '../types/index';
import { IResponse, UserUrls, UserDto } from "../../types/index";
import { signIn, signOut as localSignOut } from '../../../auth';

type LoginResponse = {
    access_token: string;
    token_type: string;
}

type GetMineProfileResponse = IResponse & {
    data: UserDto
}

export const login = async (data: LoginFormDto): Promise<AuthUserDto> => {
    let params = new URLSearchParams();

    params.append("client_id", Env.auth.client_id);
    params.append("client_secret", Env.auth.client_secret);
    params.append("grant_type", Env.auth.grant_type);
    params.append("username", data.username);
    params.append("password", data.password);

    const loginResult = await authApiAxios.post(Env.auth.token_endpoint, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }) as LoginResponse;

    const getUserInfoResult = await apiAxios.get(UserUrls.getMineProfile, {
        headers: {
            "Authorization": `Bearer ${loginResult.access_token}`
        }
    }) as GetMineProfileResponse;

    await signIn("credentials", {
        "userId": getUserInfoResult.data.id,
        "userName": data.username,
        "accessToken": loginResult.access_token
    });

    return {
        jwt: loginResult.access_token,
        userId: 1,
        userName: data.username
    };
}

export const signOut = async () => {
    await localSignOut();
}

