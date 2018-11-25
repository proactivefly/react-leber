

---
`React`全家桶+`express`+`sock.io`+`mongodb`开发招聘应用
技术栈（个人练习react项目,请勿用于商业目的）
---
- `React16`
- `redux` 管理状态
- `react-router4` 路由
- `antd-mobile` 蚂蚁金服UI组件库
- `express` 构建服务
- `mongodb` 存储数据
- `socket.io` 

Usage
---

> 启动mongodDB服务,[环境搭建](docs/MongodDB-env.md)

```bash
npm install

#启动程序
npm start

#开启服务
npm run server
```

项目分支
---
> 项目的各个部分功能分解

```bash
# 使用方法 
# 如:git clone -b login-register https://github.com/poetries/boss.git

git clone -b [分支名] https://github.com/poetries/boss.git
```

- [登录和注册分支](https://github.com/poetries/boss/tree/login-register)
- [boss信息和牛人信息分支](https://github.com/poetries/boss/tree/bossinfo-geniusinfo)
- [Boss、牛人列表及个人中心分支](https://github.com/poetries/boss/tree/boss-genius-usercenter)


项目结构
---

<pre>
├── config                   // react开发环境配置
├── docs                     // 项目开发文档
├── mock                     // 项目开发中的mock数据
├── package.json             // 项目配置文件
├── server                   // express服务
│   ├── server.js            // express服务启动入口
│   ├── model.js             // 用户model
│   ├── user.js              // 用户信息接口
├── script                   // webpack配置
│   ├── build.js             // 打包相关
│   ├── start.js             // 本地开发
│   ├── test.js              // 测试
├── public                   // 打包后的静态资源
├── src                      // 生产目录
│   ├── actions              // redux action相关操作
│   │    └── chatuser.js     // 用户列表
│   │    └── index.js        // user、chatuser入口
│   │    └── user.js         // 用户信息
│   ├── components           // 展示组件
│   │    └── Authroute       // 授权路由组件，判断用户登录信息  
│   │    └── AvatarSelector  // 头像选择组件  
│   │    └── Boss            // Boss组件 
│   │    └── Genius          // 牛人组件  
│   │    └── Chat            // 聊天组件  
│   │    └── DashBoard       // 信息管理面板  
│   │    └── Logo            // Logo组件  
│   │    └── Msg             // 消息组件  
│   │    └── FooterNav       // 底部导航组件  
│   │    └── UserCenter      // 用户中心组件 
│   │    └── UserCard        // 用户信息组件  
│   ├── config               // 配置文件 
│   │    └── index.js        // axios全局拦截配置
│   └── constants            // actionType常量
│   └── container            // 容器组件
│   │    └── BossInfo        // Boss信息完善页 
│   │    └── GeniusInfo      // 牛人信息完善页
│   │    └── Login           // 登录页    
│   │    └── Register        // 注册页  
│   │    └── Root.js         // 页面入口配置    
│   └── reducers             // 处理action的逻辑
│   │    └── chatuser.js     // 获取用户列表 
│   │    └── index.js        // reducer入口
│   │    └── user.js         // 处理user信息action的reducer
│   └── routers              // 配置路由
│   └── store                // redux store仓库
│   │    └── configureStore.dev.js     // 开发中的store配置 
│   │    └── configureStore.js         // store入口判断
│   │    └── configureStore.prod.js    // 生产环境入口 
│   └── index.css                      // 全局样式
│   └── utils                          // 工具函数
│   │    └── getDirectPath.js          // 根据用户信息,返回跳转地址
│   └── App.js               // 主页面
│   └── App.css              // 主页面样式
│   └── index.html           // 项目入口页面
│   └── index.js             // Webpack 预编译入口
|__
</pre>



拓展阅读
---

- [React 技术栈系列教程-阮一峰](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)
- [awesome-react](https://github.com/enaqx/awesome-react)
- [redux中文文档](http://www.redux.org.cn/)
- [React在线编辑器](https://codesandbox.io)
=======
# react项目练习

## 项目介绍

  项目是一个招聘类webapp，后端使用express，mongodb完成接口开发；前端使用react全家桶及系列中间件处理数据，UI主要使用Antd-Mobile。

  项目主体功能：注册->登录-完善信息->牛人与BOss列表->聊天列表->聊天->个人中心

## 使用技术栈

  ### 前端

      creact-react-app
      react16
      redux
      react-redux
      redux-thunk
      react-router4
      prop-types
      axios
      browser-cookies
      antd-mobile

  ### 后端  

      node
      express
      mongoose
      utility
      cookie-parser
      body-parser


## 项目目录

        .
        ├── README.md
        ├── config               // 开发环境的配置
        ├── public
        │   ├── index.html       // 项目页面入口文件
        ├── package.json         // 项目配置文件
        ├── scripts              // npm scrips 命令配置
        ├── server               // 后端配置
        │   ├── server.js        // 服务启动文件
        │   ├── model.js         // 数据库配置
        │   ├── userRoute.js     // 接口配置    
        ├── src
        │   ├── static           // 公用资源
        │   ├── components       // 所有组件
        │   ├── container        // 所有页面
        │   ├── redux            // redux管理
        │   ├── http.js	         // axios配置
        │   ├── index.js         // 入口文件
        │   ├── util.js          // 功能函数封装
        │   └── reducer.js       // 所有reducer合并


## 运行项目

  ### 环境依赖

      项目运行前须要安装NodeJs&MongoDB，Mongo端口为27017，express服务器端口9093，访问地址为：localhost

  ### 运行项目
      
      首先需要使用命令行工具CD到根目录，按顺序执行如下命令

      第一个窗口用于拉取依赖&启动服务器
      npm install //拉取依赖
      node server/server.js //启动服务

      第二个窗口用于启动MongoDB
      全局直接执行命令 Mongo

      第三个窗口用于启动项目
      npm run start
