module.exports = {
    publicPath: './',
    assetsDir: 'assets',
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                data: '@import "./src/assets/scss/_settings.scss";'
            }
        }
    }
};
