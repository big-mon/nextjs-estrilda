const withTM = require("next-transpile-modules")([
  "@big-mon/react-component-amazon",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
});
