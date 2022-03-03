文档

## 一.说明
这是一个基于cli4.x+webpack4.x+element2.x搭建的一个cms基础模板

## 二.目录
### 1.public:静态资源文件夹

### 2.src:项目资源

* assets:项目资源(初始化css,项目主题自定义配置,图片,公共scss样式)
* components:组件(页面公共组件,cms框架组件)
* request:网络请求(api文件夹:包含每个菜单下的接口统一维护及登录页面接口维护,http.js:基于axios封装的网络请求)
* router:路由(index.js 主路由,其他文件 登录及每个一级菜单下对应的所有路由)
* store:vuex(index.js 主vuex配置,其他文件 vuex的5种状态解耦)
* utils:工具文件夹(持久化vuex,页面公共方法)
* views:项目所有页面和request文件目录结构一一对应
* APP.vue:项目主组件
* main.js:项目入口文件
* env:对应模式的环境变量(开发,测试,生产)
* package-lock.json:项目具体所依赖的库 插件等
* vue.config:对webpack以及serve的一些配置

## 三.模板所含功能
1. 自定义主题 src->assets->->basics-config.js可修改主题
2. 抽离vuex  vue-router  axios等重要库
3. 封装axios请求响应拦截器 及 vue-router 前置钩子
4. 动态路由,动态按钮权限的封装
5. 持久化vuex(强制刷新页面 任何数据不会丢失)
6. 线下跨域 proxy代理配置
7.  webpack优化
8.  集成各种页面所需工具函数
9.  npm run serve、test、build自动引入对应的环境变量
10. 支持scss编写样式

## 四.个人编码规范
1. views->content文件夹中逐层写每级菜单 request文件夹中一一对应
2. 如页面中用到非公共组件的页面组件 则在页面的同级目录下建一个'页面名children'文件夹,用于存放该页面的组件(页面组件以大写C结尾),如该页面有延伸页面 则也放到此文件夹
3. 文件夹以 - 分割的方式命名
4. 变量 函数 文件名 使用小驼峰命名
5. 组件 具体页面 使用大驼峰命名
6. 图片 样式class 以menu_list_icon格式命名

#### ps: 后期也会考虑写vue3+ts+element plus的cms模板 最后 谢谢您能耐心看完我写的文档 非常感谢