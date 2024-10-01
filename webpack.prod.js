import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { merge } from 'webpack-merge'
import common from './webpack.common.js'

export default merge(common, {
  mode: 'production',
  devtool: 'source-map', // Separate source maps for production
  output: {
    filename: '[name].[contenthash].js', // Cache-busting
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ], // Extract CSS in production
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()], // Minimize JS and CSS
    splitChunks: {
      chunks: 'all', // Code splitting for better performance
    },
  },
})
