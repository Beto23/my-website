var path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    './src/app.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    // directorio de destino para todos los archivos de salida
  },
  externals:{
      jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
      })
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node:modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015'],
            "stage-2",
            "react"
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        exclude: /node:modules/,
        use: [
          {
            loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|JPG)$/,
        use: [
          {
            loader: 'url-loader?limit=1000&name=images/[name].[ext]',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css']
  }
};