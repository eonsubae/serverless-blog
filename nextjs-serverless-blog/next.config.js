const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
});
