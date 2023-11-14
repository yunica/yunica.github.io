const withTM = require("next-transpile-modules")([
  "@babel/preset-react",
  "react-github-btn",
]);

module.exports = withTM({
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
});
