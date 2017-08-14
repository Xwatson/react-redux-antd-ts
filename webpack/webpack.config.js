/**
 * Created by xwatson on 2016/12/8.
 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')
const debug = require('debug')('app:webpack:config')

const paths = config.utils_paths
const __DEV__ = config.globals.__DEV__
const __PROD__ = config.globals.__PROD__
const __TEST__ = config.globals.__TEST__

debug('创建webpack配置.')
const webpackConfig = {
    name: 'client',
    target: 'web',
    devtool: config.compiler_devtool,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {}
}

// main入口路径
const APP_ENTRY = paths.client('index.tsx')

webpackConfig.entry = {
    app: __DEV__ ?
        [APP_ENTRY].concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`) :
        [APP_ENTRY]
}

// 输出
webpackConfig.output = {
    filename: `[name].[${config.compiler_hash_type}].js`,
    path: paths.dist(),
    publicPath: config.compiler_public_path
}

webpackConfig.plugins = [
    new webpack.DefinePlugin(config.globals),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('../config/manifest.json')
    }),
    new HtmlWebpackPlugin({
        template: paths.client(config.template_dir + '/index.html'),
        hash: false,
        favicon: paths.public('favicon.ico'),
        filename: 'index.html',
        inject: 'body',
        minify: {
            collapseWhitespace: true
        }
    })
]

if (__DEV__) {
    debug('启用实时开发插件(HMR，NoErrors).')
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else if (__PROD__) {
    debug('启用生产插件 (OccurenceOrder, Dedupe & UglifyJS).')
    webpackConfig.plugins.push(
        new webpack.BannerPlugin(config.banner),
        // 根据调用顺序自动排序
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    )
} else {
    debug(`启用${config.env}插件 (OccurenceOrder, Dedupe, UglifyJS).`)
    webpackConfig.plugins.push(
        new webpack.BannerPlugin(config.banner),
        // 根据调用顺序自动排序
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        })
    )
}

// 非测试环境提取公共代码
if (!__TEST__) {
    webpackConfig.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
    )
}

// ------------------------------------
// ts loader
// ------------------------------------
webpackConfig.module.rules = [
    { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    { test: /\.json$/, loader: 'json' }
]

// styles loader
// ------------------------------------

const extractStyles = new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    allChunks: true,
    disable: __DEV__,
})

webpackConfig.module.rules.push({
    test: /\.(sass|scss)$/,
    loader: extractStyles.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    sourceMap: config.source_maps,
                    minimize: {
                        autoprefixer: {
                            add: true,
                            remove: true,
                            browsers: ['last 2 versions'],
                        },
                        discardComments: {
                            removeAll : true,
                        },
                        discardUnused: false,
                        mergeIdents: false,
                        reduceIdents: false,
                        safe: true,
                        sourcemap: config.source_maps,
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: config.source_maps,
                    includePaths: [
                        paths.client('styles'),
                    ],
                },
            }
        ],
    })
})
webpackConfig.plugins.push(extractStyles)

// 文件 loaders
webpackConfig.module.rules.push(
    {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
    },
    {test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'},
    {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
    },
    {test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]'},
    {test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'},
    {test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
)
/* eslint-enable */

/*// ------------------------------------
// Finalize Configuration
// ------------------------------------
// 当不知道公共路径 (只有当HMR启用在development下) 需要使用extractTextPlugin来解决
if (!__DEV__) {
    debug('应用 ExtractTextPlugin 到 CSS loaders.')
    webpackConfig.module.loaders.filter((loader) =>
        loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
    ).forEach((loader) => {
        const first = loader.loaders[0]
        const rest = loader.loaders.slice(1)
        loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
        delete loader.loaders
    })

    webpackConfig.plugins.push(
        new ExtractTextPlugin('[name].[contenthash].css', {
            allChunks: true
        })
    )
}*/

module.exports = webpackConfig
