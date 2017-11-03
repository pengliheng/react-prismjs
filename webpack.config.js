const path = require("path"),
  webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./feature/index.js']
  },
  output: {
    filename: "index.js",
    chunkFilename: 'index.js',
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }, {
        test: /\.(js|jsx)$/,
        exclude: /(node_module|bower_components)/,
        loader: 'babel-loader'
        // },{
        //   test: /\.json$/,
        //   loader: 'json-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
}
