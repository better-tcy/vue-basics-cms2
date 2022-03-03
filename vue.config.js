const path = require('path') //引入path模块

function resolve(dir) {
  // path.join(__dirname)设置绝对路径
  return path.join(__dirname, dir)
}

module.exports = {
  // ESLint
  lintOnSave: false,

  //文件夹起别名
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('./src'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/scss/style.scss";`
      }
    }
  },

  devServer: {
    open: true, //是否自动弹出浏览器页面，默认未开启
    host: '127.0.0.1',
    port: 8088,
    // 如果出现线下跨域 配置好代理后 baseUrl 写成'/api' 即可
    proxy: {
      //配置跨域
      '/api': {
        target: 'https://www.xxx.com', // 接口的域名
        // ws: true, // 是否启用websockets
        changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

  //去除生产环境的productionSourceMap dist体积会更小
  productionSourceMap: false,

  // 静态资源路径（默认/，打包后会白屏）
  publicPath: './',

  // 打包后文件的目录 （默认为dist）
  outputDir: 'dist'
}
