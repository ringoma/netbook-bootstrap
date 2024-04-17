const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
//   plugins: [new HtmlWebpackPlugin({
//     template: './src/index.html',
//     filename:'./index.html'
// }), new HtmlWebpackInlineSVGPlugin()],
};
