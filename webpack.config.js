const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
    ],
  },
};