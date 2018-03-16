/*globals
require
__dirname
module
*/

var path = require("path");

var source = path.resolve(__dirname, "src");
var build = path.resolve(__dirname, "lib");

module.exports = {
  mode: "development",
  entry: "./index.js",
  context: source,
  devtool: "source-map",
  output: {
    path: build,
    filename: "index.js",
    libraryTarget: "umd",
    library: "reactScenes"
  },
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: source,
        exclude: /(node_modules|lib)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
