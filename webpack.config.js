const webpack = require("webpack");
const path = require("path");

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "build"),
};

const isProduction = process.env.NODE_ENV == "production";


function entry() {
  const dev = [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "babel-regenerator-runtime",
  ];
  const common = [
    `${PATHS.app}/index.jsx`,
  ];
  return isProduction ? common : dev.concat(common);
}

function devtool() {
  return isProduction ? "#source-map" : "#cheap-module-source-map";
}

function jsx_loaders() {
  return isProduction ? ["babel"] : ["react-hot", "babel"];
}

function postcss() {
  return (webpack) => {
    return [
      require("postcss-import")({addDependencyTo: webpack}),
      require("precss"),
      require("autoprefixer")({browsers: ["last 2 versions"]}),
    ];
  }
}

function plugins() {
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const CopyWebpackPlugin = require("copy-webpack-plugin");

  const common = [
    new HtmlWebpackPlugin({
      template: `${PATHS.app}/index.html`,
      inject: "body"
    }),
    new CopyWebpackPlugin([
      {from: `${PATHS.app}/public`, to: PATHS.build}
    ]),
  ];
  const prod = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ];
  const dev = [
    new webpack.HotModuleReplacementPlugin(),
  ];

  return common.concat(isProduction ? prod : dev);
}


const config = {
  entry: entry(),
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  devtool: devtool(),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: jsx_loaders(),
        include: PATHS.app,
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "postcss"],
        include: PATHS.app,
      },
    ]
  },
  postcss: postcss(),
  plugins: plugins(),
};

module.exports = config;
