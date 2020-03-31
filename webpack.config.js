const path = require("path");
const webpack = require("webpack");
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: "development",
    optimization: {
        namedChunks: true,
        usedExports: true,
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            })
        ]
    },
    output: {
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env","@babel/preset-react"] }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=100000' },
            {
                test: /\.ttf$/,
                loader: "url-loader",
                include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }

        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            cache: true,
            filename: '[path].gz[query]',
            algorithm: 'gzip'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            Axios : 'axios',
            Noty : 'noty'
        })
    ]
};
