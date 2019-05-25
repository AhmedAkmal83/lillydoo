module.exports = {
    publicPath: './',
    assetsDir: 'assets',
    css: {
        loaderOptions: {
            sass: {
                data: '@import "./src/assets/scss/_settings.scss";'
            }
        }
    }
};
