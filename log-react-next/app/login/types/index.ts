export type AuthUserDto = {
    jwt: string;
    userId: number;
    userName: string;
}

export type LoginFormDto = {
    username : string;
    password: string;
}