/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
  },
};

module.exports = nextConfig;
