module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};
