module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images-na.ssl-images-amazon.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};
