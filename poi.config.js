module.exports = {
    entry: './src/index.js',
    output: {
        html: {
            template: './src/index.ejs'
        },
        fileNames: {
            css: 'style.css',
            image: 'assets/images/[name].[ext]'
        }
    }
}
