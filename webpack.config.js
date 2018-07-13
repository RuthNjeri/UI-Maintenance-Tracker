const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./static/js/main.js",
    createRequest: "./static/js/user/createRequest.js"
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "[name].bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "stage-2"]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
};