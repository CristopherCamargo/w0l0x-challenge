const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist/static"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js')
        }
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".po"],
    fallback: {
      fs: false,
      os: false,
      process: false
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",
      template: "./index.html"
    }),
    new webpack.DefinePlugin({
      process: 'process/browser'
    })
  ]
}