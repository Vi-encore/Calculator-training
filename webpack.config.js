const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin-webpack5");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[path][name][ext]",
  },
  devtool: isDev && "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Main",
      template: "./index.html",
      //   filename: "users.html", //для підключення інших файлів
      inject: "body",
      excludeAssets: [/users.*.*/, /posts.*.*/, /todos.*.*/], //в інших файлах прибрати все зайве
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss", ".png", ".jpg"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@components": path.resolve(__dirname, "src/js/components"),
      // "@img": path.resolve(__dirname, "src/img")
    },
  },
};
