import { signIn, auth, providerMap } from "./auth";

export default async function SignInPage({
  params,
  searchParams,
}: {
  params: {}
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <h1>当前登录用户：{searchParams.userName}</h1>
      <div className="flex flex-col gap-2">
        {Object.values(providerMap).map((provider) => (
          <form action={async () => {
            "use server"
            await signIn(provider.id);
          }}
          >
            <button type="submit">
              <span>Sign in with {provider.name}</span>
            </button>
          </form>
        ))}
      </div>
    </>
  )
}