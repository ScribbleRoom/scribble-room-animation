/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io", "scribble-room-animation.cdn.prismic.io"],
  },
}

module.exports = nextConfig
