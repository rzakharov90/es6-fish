const NODE_ENV = 'development';
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');


// Процесс разработки
if (NODE_ENV == 'development') {
    
    module.exports = {
        
        // Путь для файлов точки входа
        context: path.join(__dirname, 'src'),
        // Точка входа
        entry: {
           main: './main.js'
        },
        // точка выхода
        output: {
            path: path.join(__dirname, 'dist/js'),
            publicPath: '/js',
            filename: "[name].js",
            library: 'home'
        },
        // настройки для devServer
        devServer: {
            contentBase:  path.join(__dirname, 'dist'),
            publicPath: '/js'
          },
        
        // Подключаемые модули
        module: {
              rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
              ]
            },
        // Подключаемые плагины
        plugins: [
           
           //Выделяет общие скрипты в 1 файл
           new webpack.optimize.CommonsChunkPlugin({
              name: "common",
              // (the commons chunk name)
            }),

           // Не позволяет webpack компилить файлы, если есть ошибки
           new webpack.NoEmitOnErrorsPlugin(),
       ]
        
    }
// Production всех js файлов  в отдельную папку public
} else {
    module.exports = {
        
        context: path.join(__dirname, 'src'),
        
        entry: {
           main: "./main"
        },
        
        output: {
            path: path.join(__dirname, 'public'),
            publicPath: '/',
            filename: "[name].js",
            library: 'home'
        },

        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
              ],
        },
        
       plugins: [
           
           //Выделяет общие скрипты в 1 файл
           new webpack.optimize.CommonsChunkPlugin({
              name: "common",
              // (the commons chunk name)
            }),

           // Сжатие js
           new webpack.optimize.UglifyJsPlugin({
               compress: {
                   warnings: false,
                   drop_console: true,
                   unsafe: true
               },
               mangle: {
                   except: ['home']
               }
           }),
           
           // Сжатие gzip
           new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.html$/,
                threshold: 0,
                minRatio: 0.8
            })
       ]
    }
}





