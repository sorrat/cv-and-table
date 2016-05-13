const webpack = require("webpack");
const path = require("path");

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build")
};

let config = {
  entry: ["babel-regenerator-runtime", `${PATHS.app}/index.jsx`],
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  devtool: "#cheap-module-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.app,
        loader: "babel"
      }
    ]
  },
};

const production = {
  devtool: "#source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

if (process.env.NODE_ENV == "production") {
  Object.assign(config, production);
}

module.exports = config;
