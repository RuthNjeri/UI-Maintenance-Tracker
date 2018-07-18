const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./static/js/main.js",
    createRequest: "./static/js/user/createRequest.js",
    viewRequest: "./static/js/user/viewRequests.js",
    specificRequest: "./static/js/user/specificRequest.js",
    upgradeUser: "./static/js/admin/upgradeUser.js",
    viewAllRequests: "./static/js/admin/viewAllRequests.js",
    respondRequests: "./static/js/admin/respondRequests.js"

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