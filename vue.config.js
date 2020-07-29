const path = require('path')
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: process.env.VUE_APP_FLAG,
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: false,
    /* 注意sass，scss，less的配置 */
    configureWebpack: (config)=>{
      config.resolve={
        extensions: ['.js', '.json','.vue'],//自动添加后缀名
        alias:{
          '@':path.resolve(__dirname,'./src'),
          'public':path.resolve(__dirname,'./public'),
          'components':path.resolve(__dirname,'./src/components'),
          'common':path.resolve(__dirname,'./src/common'),
          'api':path.resolve(__dirname,'./src/api'),
          'views':path.resolve(__dirname,'./src/views'),
          'utils':path.resolve(__dirname,'./src/utils'),

        }
      }

    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "./src/style/main.scss"; 
          `
        },
      }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
    },
    /* webpack-dev-server 相关配置 */
    devServer: {
      /* 自动打开浏览器 */
      open: true,
      /* 设置为0.0.0.0则所有的地址均能访问 */
      host: '0.0.0.0',
      port: 8088,
      https: false,
      hotOnly: false,
      /* 使用代理 */
      proxy: {
        '/api': {
          /* 目标代理服务器地址 */
          target: 'http://www.web-jshtml.cn/productapi',
          /* 允许跨域 */
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      },
    }
  }