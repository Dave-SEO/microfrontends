# 微前端

- 优势
    * 技术栈无关
    * 主框架不限制接入应用的技术栈，微应用具备完全自主权
    * 独立开发、独立部署
    * 微前端是一种非常好的实施渐进式重构的手段和策略
    * 微应用仓库独立，前后端可独立开发，主框架自动完成同步更新
    * 独立运行
    * 每个微应用之间状态隔离，运行时状态不共享

- 劣势
    * 接入难度较高
    * 应用场景：移动端少、pc管理端多
    
## 微前端实现方式对比

### Iframe
- 优势
    * 技术成熟
    * 支持页面嵌入
    * 天然支持运行沙箱，独立运行

- 劣势
    * 页面之间可以是不同的域名（需要做不同域名的鉴权处理和跨域访问的问题，增加了开发成本）
    * 需要对应的设计一套应用通信机制，如何监听、传参格式等内容
    * 应用加载、渲染、缓存等体系的实现（依赖浏览器，可控制少）
    
### web component

- 优势
    * 支持自定义元素
    * 支持shadow dom，并可通过关联进行控制
    * 支持模版template和插槽slot，引入自定义内容

- 劣势
    * 接入微前端需要重写当前项目
    * 生态系统不完善，技术过新容易出现兼容性问题
    * 整体架构设计复杂，组件与组件之间拆分过细时，容易造成通信和控制繁琐

- https://developer.mozilla.org/zh-CN/docs/Web/Web_Components

### 自研框架
- 优势
 * 高度定制化，满足需要做兼容的一切场景
 * 独立的通信机制和沙箱运行环境，可解决应用之间的相互影响的问题
 * 支持不同技术栈子应用，可无缝实现页面无刷新渲染

 - 劣势
    * 技术实现难度较高
    * 需要设计一套定制的通信机制
    * 首次加载会出现资源过大的情况

## 自研框架实现规则

- 路由分发式
- 主应用控制路由匹配和子应用加载，共享依赖加载
- 子应用作功能，并接入主应用实现主子控制和联动

## 技术栈确定与实现功能
### 主应用
- 技术栈 
 * vue3（可以是vue3 jquery，react，原生JavaScript等）
 
- 实现功能
    * 注册子应用
    * 加载、渲染子应用
    * 路由匹配
    * 数据获取
    * 通信 （父子通信）

### 子应用
- 技术栈
  * vue3
        1. 首页
        2. 选车

  * react15
        1. 咨询
        2. 视频
        3. 视频详情

  * react16子应用
        1. 新车
        2. 排行
        3. 登陆

- 实现功能
    * 渲染
    * 监听通信

## 微前端框架
- 实现功能
    * 子应用的注册
    * 应用加载完成
    * 路由更新判断
    * 匹配对应的子应用
    * 加载子应用的内容
    * 完成所有依赖项的执行
    * 将子应用渲染在固定的容器内
    * 公共事件的管理
    * 异常的捕获和报错
    * 全局的状态管理内容
    * 沙箱隔离
    * 通信机制


## 服务端接口
- 技术栈
    * koa

- 功能
    * 提供数据服务

## 发布应用
- 技术栈
    * express

- 功能
    * 主子应用的大包和发布

## 项目架构

## koa2-generator 快速构建后端服务
### 安装

```javascript
<!--全局安装koa2-generator脚手架-->
npm install -g koa2-generator
koa2 项目名称
```


## node child_process 同时启动多个项目

1. npm init 初始化package.json
2. 根目录下创建build文件夹并生成build.js文件
3. package.json文件配置scripts 运行build.js脚本

```json
 "scripts": {
    "start": "node ./build/build.js"
  },
```

```javascript
    const {spawn} = require('child_process');
    const path = require('path')
    const filePath = {
    vue2: path.resolve(__dirname, '../vue2'),
    vue3: path.resolve(__dirname, '../vue3'),
    react17: path.resolve(__dirname, '../react17'),
    server: path.resolve(__dirname, '../server')
}

const runChild = () => {
    Object.values(filePath).forEach(item => {
        spawn(`cd ${item} && npm run dev`, {stdio: 'inherit',shell: true})
    })
}
runChild()
```

## server端
### 跨域处理

```JavaScript
npm install koa2-cors
// app.js
const koa2Cors = require('koa2-cors')
app.use(koa2Cors())
```


