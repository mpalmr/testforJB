const path = require('path');

const dir = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

module.exports = {
  context: dir.src,
  entry: 'index.js',
  output: {
    path: dir.dist,
    filename: 'main.js',
  },
  resolve: {
    modules: [dir.src, 'node_modules'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      },
    }],
  },
};
