const path = require('path');

const config = {
  mode: "production",
  entry: __dirname + "/src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/public"),
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webmanifest|xml)$/i,
        type: "asset/resource",
      },
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = config;
