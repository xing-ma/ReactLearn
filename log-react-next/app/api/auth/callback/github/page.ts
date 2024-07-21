import { redirect } from 'next/navigation';

export default async function Callback({
    params,
    searchParams,
}: {
    params: {}
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    console.log("code:", searchParams.code);

    // fetch(`https://github.com/login/oauth/access_token?client_id=${process.env.AUTH_GITHUB_ID}&client_secret=${process.env.AUTH_GITHUB_SECRET}&code=${searchParams.code}&redirect_uri=http://localhost:3000/api/auth/callback/github`, {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     }
    // }).then(res => {
    //     console.log("res:", res);
    //     return res.json();
    // }).then(async data => {
    //     console.log("access_token data:", data);

    //     await getUser(data.access_token);
    // }).catch(error => {
    //     console.error("Error fetching data:", error);
    // });

    console.log("url:",`https://github.com/login/oauth/access_token?client_id=${process.env.AUTH_GITHUB_ID}&client_secret=${process.env.AUTH_GITHUB_SECRET}&code=${searchParams.code}&redirect_uri=http://localhost:3000/api/auth/callback/github`);
    try {
        const accessTokenRes = await fetch(`https://github.com/login/oauth/access_token?client_id=${process.env.AUTH_GITHUB_ID}&client_secret=${process.env.AUTH_GITHUB_SECRET}&code=${searchParams.code}&redirect_uri=http://localhost:3000/api/auth/callback/github`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        var accessTokenData = await accessTokenRes.json();

        console.log("access_token data:", accessTokenData);

        const userRes = await fetch("https://api.github.com/user", {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessTokenData.access_token}`
            }
        });

        var userData = await userRes.json();

        console.log("user data:", userData);

        redirect(`/sample/auth?userName=${userData.login}`);
    } catch (error) {
        console.error("Error fetching data:", error);
    };
}