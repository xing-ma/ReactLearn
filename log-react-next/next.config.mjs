/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    distDir: "build",
    basePath: "",
    generateBuildId: async () => {
        return "0.0.1";
    },
    env: {
        VARIABLE3: "test3-config"
    }
};

export default nextConfig;
