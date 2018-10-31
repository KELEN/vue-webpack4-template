# vue-webpack4 h5项目脚手架

> vue-webpack4 h5项目脚手架 自己定制版本



### 所用技术：

vue2 webpack4 axios vue-router 

### 自适应 

使用淘宝的flexible.js自适应

> 750px为标准 => 120px 对应的写法为 px2rem(120)

### eventBus

组件内部使用 

```javascript

this.$eventBus.$on('userChange', (user) => { console.log(user) });

this.$eventBus.$emit('userChange', user)

```

### 启动应用

``` bash
安装依赖
npm install

开发环境
npm run dev

项目打包

构建开发环境
npm run build:dev

构建cn环境
npm run build:cn

构建en环境
npm run build:en
```