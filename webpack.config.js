const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // ton template
      filename: 'index.html',          // fichier généré dans build/
    }),
  ],
  devServer: {
    static: './build',
    port: 3000,
    open: true,
    hot: true,
  },
  mode: 'production',
};
