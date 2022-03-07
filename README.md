文档

## 一.说明

这是一个基于 cli4.x+webpack4.x+element2.x 搭建的一个 cms 基础模板

## 二.目录

### 1.public:静态资源文件夹

### 2.src:项目资源

- assets:项目资源(初始化 css,项目主题自定义配置,图片,公共 scss 样式)
- components:组件(页面公共组件,cms 框架组件)
- request:网络请求(api 文件夹:包含每个菜单下的接口统一维护及登录页面接口维护,http.js:基于 axios 封装的网络请求)
- router:路由(index.js 主路由,其他文件 登录及每个一级菜单下对应的所有路由)
- store:vuex(index.js 主 vuex 配置,其他文件 vuex 的 5 种状态解耦)
- utils:工具文件夹(持久化 vuex,页面公共方法)
- views:项目所有页面和 request 文件目录结构一一对应
- APP.vue:项目主组件
- main.js:项目入口文件
- env:对应模式的环境变量(开发,测试,生产)
- package-lock.json:项目具体所依赖的库 插件等
- vue.config:对 webpack 以及 serve 的一些配置

## 三.模板所含功能

1. 自定义主题 src->assets->->basics-config.js 可修改主题
2. 抽离 vuex vue-router axios 等重要库
3. 封装 axios 请求响应拦截器 及 vue-router 前置钩子
4. 动态路由,动态按钮权限的封装
5. 持久化 vuex(强制刷新页面 任何数据不会丢失)
6. 线下跨域 proxy 代理配置
7. webpack 优化
8. 集成各种页面所需工具函数
9. npm run serve、test、build 自动引入对应的环境变量
10. 支持 scss 编写样式

## 四.个人编码规范

1. views->content 文件夹中逐层写每级菜单 request 文件夹中一一对应
2. 如页面中用到非公共组件的页面组件 则在页面的同级目录下建一个'页面名 children'文件夹,用于存放该页面的组件(页面组件以大写 C 结尾),如该页面有延伸页面 则也放到此文件夹
3. 文件夹以 - 分割的方式命名
4. 变量 函数 文件名 使用小驼峰命名
5. 组件 具体页面 使用大驼峰命名
6. 图片 样式 class 以 menu_list_icon 格式命名

## 五.git 提交

提交代码需要使用 `npm run commit | yarn commit`：

- 第一步是选择 type，本次更新的类型

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

- 第二步选择本次修改的范围（作用域）

![image-two](https://github.com/Betteryourself-tcy/images/blob/master/two.png?raw=true)

- 第三步选择提交的信息

![image-three](https://github.com/Betteryourself-tcy/images/blob/master/three.png?raw=true)

- 第四步提交详细的描述信息

![image-four](https://github.com/Betteryourself-tcy/images/blob/master/four.png?raw=true)

- 第五步是否是一次重大的更改

![image-five](https://github.com/Betteryourself-tcy/images/blob/master/five.png?raw=true)

- 第六步是否影响某个 open issue

![image-six](https://github.com/Betteryourself-tcy/images/blob/master/six.png?raw=true)

#### ps: 后期也会考虑写 vue3+ts+element plus 的 cms 模板 最后 谢谢您能耐心看完我写的文档 非常感谢
