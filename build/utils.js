var path = require('path')
var config = require('../config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
    options = options || {}

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        var loaders = [cssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return [MiniCssExtractPlugin.loader].concat(loaders);
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    function resolveResouce(fileName) {
        // 全局sass文件，可以直接在vue文件使用，全局的变量或者mixin
        return path.resolve(__dirname, '../src/assets/scss/' + fileName)
    }

    function generateSassResourceLoader() {
        var loaders = [
            cssLoader,
            'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        resolveResouce('_mixin.scss'),
                        resolveResouce('_flex.scss'),
                    ]
                }
            }
        ];
        if (options.extract) {
            return [MiniCssExtractPlugin.loader].concat(loaders);
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateSassResourceLoader(),
        sass: generateSassResourceLoader(),
        scss: generateSassResourceLoader(),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}
