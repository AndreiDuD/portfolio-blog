const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // removeConsole: true,
  },
};

module.exports = withContentlayer({ ...nextConfig });
