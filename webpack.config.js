require('dotenv').config();
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './script.js',

  // Webpack configuration options
  // ...
  plugins: [
    new Dotenv(),
  ],
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
    },

  },
};
