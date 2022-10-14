const path = require("path")

module.rules = {
  test: /\.pug$/,
  loader: "pug-plain-loader",
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-plain-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
}
