# 核心文件校验

根据`chameleon`目录结构，确定核心文件的位置，保证`chameleon`项目能够正常运行。

## 目录结构

```bash
├── chameleon.config.js                 // 项目的配置文件
├── dist                                // 打包产出目录
├── mock                                // 模拟数据目录
├── node_modules                        // npm包依赖
├── package.json
└── src                                 // 项目源代码
    ├── app                             // app入口
    ├── components                      // 组件文件夹
    ├── pages                           // 页面文件夹
    ├── router.config.json              // 路由配置文件
    └── store                           // 全局状态管理
```

## 核心文件列表

会对以下核心文件进行检查：

```bash
chameleon.config.js
src/app/app.cml
src/router.config.json
```
