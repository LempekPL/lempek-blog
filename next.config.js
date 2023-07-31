/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");

const nextConfig = nextTranslate({
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com"]
    },
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [
            {
                source: "/posts",
                destination: "/",
                permanent: true
            },
        ]
    }
});

module.exports = nextConfig;