const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
  },

  devServer: {
    inline: true,
    port: 7777,
    hot: true,
    contentBase: path.resolve(__dirname, 'public/'),
  },

  module: {
    rules: [
      {
        test: /\.js|jsx $/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react',],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
};
