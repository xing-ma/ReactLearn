import { ApiError } from "next/dist/server/api-utils";

export default async function Page() {

    throw new ApiError(500, "service error");

    return (
        <h2>error</h2>
    )
}