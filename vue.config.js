module.exports = {
    publicPath: './',
    assetsDir: 'assets',
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/scss/_settings.scss";'
            }
        }
    }
};
