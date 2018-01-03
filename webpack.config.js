const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
    libraryTarget: 'var', // 웹팩으로 만든 함수는 즉시 호출 함수에서 변수로 담아서 외부 html 파일에서 bundle js 내용의 함수를 호출할수 있ㄱ해준다.
    library: 'alpha' // 호출 시 변수명이다.
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
