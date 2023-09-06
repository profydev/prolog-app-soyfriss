/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  env: {
    APP_VERSION: process.env.npm_package_version || "",
  },
};

module.exports = nextConfig;
