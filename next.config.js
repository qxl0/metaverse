/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['avatars.dicebear.com', 'links.papareact.com'],
  },
  reactStrictMode: true,
  env: {
    APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
}
