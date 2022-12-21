/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
    reactStrictMode: true,
    images: {
        domains: ["avatars.githubusercontent.com"]
    },
    compiler: {
        styledComponents: true,
    },
});

module.exports = nextConfig;