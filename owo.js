module.exports = {
  // 项目根目录
  root: "/src",
  // 项目入口文件
  entry: "home",
  // 页面标题
  title: '页面',
  // 输出目录
  outFolder: "./dist",
  // 资源目录
  resourceFolder: "./src/resource",
  // head属性清单
  headList: [
    {
      'http-equiv': 'content-type',
      content: 'text/html; charset=UTF-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=0, maximum-scale=1, user-scalable=yes,shrink-to-fit=no',
    }
  ],
  // 使用到的外部脚本清单
  scriptList: [
    {
      name: "swiper",
      src: "./src/resource/idangerous.swiper2.7.0.min.js"
    },
    {
      name: "jquery1.11.0",
      src: "http://tools.people.com.cn/libs/jquery/1.11.1/jquery-1.11.1.min.js"
    },
    {
      name: "roundabout",
      src: "./src/resource/roundabout.js"
    },
    {
      name: "jquery.easing.1.3",
      src: "./src/resource/jquery.easing.1.3.js"
    },
    {
      name: "path.js",
      src: "./src/main.js"
    },
  ],
  // 使用到的样式列表
  styleList: [
    {
      name: "main",
      src: "./src/main.css",
      resource: true
    },
    {
      name: "swiper",
      src: "./src/resource/idangerous.swiper2.7.0.css",
      resource: true
    }
  ],
  // 页面清单
  pageList: [
    {
      // 是否为页面主入口
      main: true,
      isPage: true,
      name: 'home',
      src: './src/page/home.page'
    }
  ],
  // 调试模式配置
  dev: {
    // 基础目录
    basePath: './',
    // 是否监测文件改动重新打包
    watcher: {
      // 是否启用
      enable: true,
      // 忽略监控的文件或文件夹，支持正则，默认为输出目录
      ignored: './dist/*',
      // 监测深度,默认99
      depth: 99
    },
    // 输出配置
    outPut: {
      merge: true,
      // 是否压缩css
      minifyCss: false,
      // 是否压缩js
      minifyJs: false,
      // 输出文件自动追加版本号，可以用来消除缓存
      addVersion: false,
    },
    serverPort: 8000,
    // 静态文件服务
    server: true,
    // 自动重新加载
    autoReload: true,
    // 远程调试
    remoteDebug: true
  },
  // 编译模式配置
  build: {
    // 基础目录
    basePath: './',
    // 输出配置
    outPut: {
      // 是否压缩css
      minifyCss: true,
      // 是否压缩js
      minifyJs: true,
      // 输出文件自动追加版本号，可以用来消除缓存
      addVersion: true,
      // 小于多大的资源会嵌入到代码中,单位kb,默认10,设置为0则不启用
      embedSize: 10,
      // 将重要样式和js合并到html中以优化页面打开速度
      merge: false
    }
  }
}