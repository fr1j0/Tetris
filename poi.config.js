module.exports = {
    entry: './src/index.js',
    output: {
        html: {
            template: './src/index.ejs'
        },
        fileNames: {
            image: 'assets/images/[name].[ext]'
        }
    }
}
