const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV != 'production';
//htmlWebpackPlugin plugin para nao precisar ficar chamando o webpack atraves da tag script no html
//path para conseguir configurar o path do src independente do OS.
//    mode: 'development' para definir o webpack rodando em dev ao inves de prod, para ser mais rapido na hora de rodar
//entry arquivo de entrada, output arquivo de saida
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    //module para configurar como a aplicacao vai se comportar quando importar cada tipo de arquivo.
    module: {
        rules: [{
                //expressao regular para determinar se o arquivo e js/jsx.
                //babel-loader integracao entre webpack e babel config
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
};