const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
// const bundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          // path: require.resolve("path-browserify"),
          // crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert/"),
          buffer: require.resolve("buffer/"),
          url: require.resolve("url/"),
          // util: require.resolve("util"),
        },
      },
      devtool: isProduction ? false : "source-map",
      output: {
        filename: "hyphen-widget.js",
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
        // new bundleAnalyzer({ analyzerMode: "server" }),
        ...isProduction ? [new CompressionPlugin({algorithm: "gzip"})] : []
      ],
      ignoreWarnings: [{ message: /Failed to parse source map from/ }],
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks(chunk) {
            return false;
          },
        },
      },
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.plugins[5].options.filename = "[name].css";
          return webpackConfig;
        },
      },
      options: {},
    },
  ],
};
