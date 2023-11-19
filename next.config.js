/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    GENIUS_ACCESS_TOKEN: process.env.GENIUS_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
