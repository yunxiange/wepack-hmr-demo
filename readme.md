# webpack热更新示例

webpack热更新分别有三种方式：`webpack-dev-server CLI`, `webpack-dev-server API`, `webpack-hot-middleware & Express`，均能实现模块热更新。

## 启动

### 方式一：webpack-dev-server CLI

```bash

cd webpack-dev-server-cli
yarn
npm start
```

### 方式二：webpack-dev-server API

```bash
cd webpack-dev-server-api
yarn
npm start
```

### 方式三：webpack-hot-middleware & Express

```bash
cd webpack-hot-middleware-express
yarn
npm start
```

## 效果

然后打开浏览器访问 [http://localhost:3001/](http://localhost:3001/) ，改变app.css文件中背景颜色值，观察页面变化。

![demo-effect](/assets/jdfw.gif)

## 更多

查看完整的热更新项目效果，请访问 [react-starter](https://github.com/yunxiange/react-starter) 。
