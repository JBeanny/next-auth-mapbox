/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn.iconscout.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
