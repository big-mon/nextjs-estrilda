const withTM = require("next-transpile-modules")([
  "@big-mon/react-component-amazon",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
});
