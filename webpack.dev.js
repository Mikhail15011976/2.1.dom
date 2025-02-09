import webpack from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {  
  mode: "development",  
  devtool: "inline-source-map",
  
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
  },

  plugins: [    
    new webpack.HotModuleReplacementPlugin(),
  ],
});
