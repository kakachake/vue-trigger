module.exports = {
  publicPath: './', //打包的文件路径前包含/prod
  outputDir: 'example', //将dist文件夹目录修改成指定的名称
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: 'index.html', //根目录下index.html的重命名
  configureWebpack: (config) => {
    // 该对象将会被 webpack-merge 合并入最终的 webpack 配置
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: (config) => {
    // 使用方法同configureWebpack.允许对内部的 webpack 配置进行更细粒度的修改
  },
  css: {
    requireModuleExtension: false, //设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。默认true
    extract: false, //生产环境下是 true，开发环境下是 false 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    sourceMap: true //设置为 true 之后可能会影响构建的性能。
  }
}
