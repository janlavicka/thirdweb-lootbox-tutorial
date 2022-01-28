/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BUNDLE_ADDRESS: process.env.BUNDLE_ADDRESS,
    PACK_ADDRESS: process.env.PACK_ADDRESS,
  },
  experimental: {
    outputStandalone: true,
  },
};
