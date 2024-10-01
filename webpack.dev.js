import { merge } from 'webpack-merge'
import common from './webpack.common.js'

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // For better debugging
  devServer: {
    static: './dist',
    hot: true, // Enables hot module replacement
    port: 3000, // Use any port you prefer
  },
  module: {
    rules: [
      // CSS loader
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
})
