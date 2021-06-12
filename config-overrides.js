const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@blog': path.resolve(__dirname, 'src/blog'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@landing': path.resolve(__dirname, 'src/landing'),
      '@videos': path.resolve(__dirname, 'src/videos')
    }
  };
  return config;
};
