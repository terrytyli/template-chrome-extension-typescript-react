// @ts-ignore
const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    content: path.join(__dirname, 'src', 'content.tsx'),
    popup: path.join(__dirname, 'src', 'popup.tsx'),
    options: path.join(__dirname, 'src', 'options.tsx'),
    background: path.join(__dirname, 'src', 'background.tsx'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'manifest.json'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'src', '*.html'),
          to: path.resolve(__dirname, 'dist'),
          flatten: true,
        },
        {
          from: path.resolve(__dirname, 'src', '*.png'),
          to: path.resolve(__dirname, 'dist'),
          flatten: true,
        },
      ],
    }),
  ],
}
