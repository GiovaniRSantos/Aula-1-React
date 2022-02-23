//runtime automatic para nao precisar importar o React em todos os arquivos jsx
module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic'
        }]
    ]
}