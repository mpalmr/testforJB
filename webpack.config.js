const path = require('path');
const Clean = require('clean-webpack-plugin');
const pkg = require('./package.json');

const dir = {
  src: path.resolve('src'),
  dist: path.resolve('dist'),
};

module.exports = {
  context: dir.src,
  entry: 'index.js',
  output: {
    path: dir.dist,
    filename: `${pkg.name}.js`,
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
  plugins: [
    new Clean(path.resolve(dir.dist, '**', '*'), { root: dir.dist }),
  ],
};
