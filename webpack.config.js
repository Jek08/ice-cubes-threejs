const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "App.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: "html-loader",
            options: { minimise: true },
          },
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: { name: "[name].[ext]" }
      //     },
      //   ],
      // },
      // {
      //   test: /\.(gif|png|jpe?g)$/i,
      //   type: "assets/resource",
      //   generator: {
      //     filename: "[name][ext]",
      //     publicPath: __dirname + "/src/textures/",
      //     outputPath: __dirname + "/public",
      //   },
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
};
