'use client';

export default async function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    console.log("error:", error);
    return (
        <>
            <h2>error message: {error.message}</h2>
            <h2>error name: {error.name}</h2>
            <h2>error digest: {error.digest}</h2>
            <h2>error stack: {error.stack}</h2>
            <button onClick={reset}>Try again</button>
        </>
    )
}