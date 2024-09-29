const { createContentlayerPlugin } = require("next-contentlayer");

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
};

module.exports = withContentlayer(nextConfig);
