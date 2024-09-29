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
})
