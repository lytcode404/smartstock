const path = require("path");

module.exports = {
  entry: "./popup2.js", // Entry point of your extension
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "popup2.js", // Output file name
  },
  module: {
    rules: [
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
    ],
  },
};
