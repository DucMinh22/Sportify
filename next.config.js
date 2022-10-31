/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
}

module.exports = nextConfig
