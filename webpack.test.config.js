const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const includePaths = [
  path.resolve(__dirname, 'src'),
  path.resolve(__dirname, 'tests'),
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: includePaths,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        include: includePaths,
        loader: 'vue-loader'
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      'bootstrap-vue$': 'bootstrap-vue/dist/bootstrap-vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
