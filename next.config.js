const withImages = require('next-images');

const svgLoader = require('./scripts/webpack/svgLoader.js');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png'],
  webpack(config) {
    svgLoader(config, '/_next');
    return config;
  },
  images: {
    // This avoids having issues with img tag src parameter expected types
    disableStaticImages: true,
  },
  eslint: {
    // We don't lint during the build because GitHub actions performs its own lint step
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
});
