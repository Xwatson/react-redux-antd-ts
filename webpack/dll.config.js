/**
 * Created by xwatson on 2017/3/2.
 */
const webpack = require('webpack')
const path = require('path')

const vendors = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-intl',
    'redux',
    'moment',
    'antd'
]

const config = {
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].library.js',
        library: '[name]_library'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env'  : {
                'NODE_ENV' : JSON.stringify('production')
            }
        }),
        new webpack.DllPlugin({
            path: './config/manifest.json',
            name: '[name]_library',
            context: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        })
    ]
}
console.log('webpack 启动编译中...')
webpack(config).run((err, stats) => {
    if (err) {
        console.error('编译遇到致命错误:' + err)
    }
    const jsonStats = stats.toJson()
    if (jsonStats.errors.length > 0) {
        console.error('Webpack 编译遇到错误.')
        console.error(jsonStats.errors.join('\n'))
    } else if (jsonStats.warnings.length > 0) {
        console.error('Webpack 编译遇到警告.')
        console.error(jsonStats.warnings.join('\n'))
    } else {
        console.log('未遇到错误或警告.')
        console.log('编译成功 ：）')
    }
})
