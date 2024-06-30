import path from "path";
import {Configuration} from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import {env} from "process";

const isDev = env.NODE_ENV === "development";

const config: Configuration = {
   mode: (env.NODE_ENV as "production" | "development") ?? "development",
   entry: "./src/app/index.tsx",
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            use: [
                // в проде параллельная подгрузка стилей,
                // а в деве инъекция в DOM (для разработки это быстрее)
               isDev ? "style-loader" : MiniCssExtractPlugin.loader,
               "css-loader"
            ]
         },
      ]
   },
   resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"]
   },
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
   },
   plugins: [
       new CopyWebpackPlugin({
          patterns: [{ from: "public" }]
       }),
      new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
         meta: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            "theme-color": "#FFFFFF",
            description: "Тестовое задание Green Api"
         },
         files: {
            manifest: "./public/manifest.json",
            favicon: "./public/favicon.ico",
         },
         templateContent: `<div id="root"></div>`
      }),
      new MiniCssExtractPlugin(),
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(),
      ]
   }
}

export default config;