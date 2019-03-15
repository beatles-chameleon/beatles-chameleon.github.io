# vue-cli多页面应用
> A Vue.js project

## 页面目录
src/page
## 公用模块目录
src/components
## 公用静态资源目录
src/common
## 模拟数据目录
server 目录中定义js文件，可以模拟接口返回，并可简单添加判断条件，用来返回不同的数据内容

代理 /proxy/xxx.json 到 static/ 目录下,例如：http://localhost:8002/proxy/test.json 对post数据模拟不友好


## Build Setup

``` bash
# 安装依赖（目前默认的依赖都放在node_modules里了）
npm install

# 启动本地sever，默认监听8002端口
npm run dev

# 本地模拟构建线上文件，会产生文件放在target文件夹中
npm run build
```
