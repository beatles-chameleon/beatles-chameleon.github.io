# 代码规范校验

## [核心文件校验](./linter/core.html)

检查以下文件是否存在

```bash
    chameleon.config.js
    src/app/app.cml
    src/router.config.json
```

## [CML 文件规范校验](./linter/cml-file.html)

- 多文件 cml 格式下，是否存在 interface 文件
- 命名名称是否符合规范

## [模板规范校验](./linter/cml-template.html)

- 根据模板语法(lang=vue|cml)校验语法是否正确
- 模板中组件使用是否符合规范

## [脚本规范校验](./linter/cml-script.html)

- 编写一端代码逻辑时，如果使用其他端的全局变量，会校验失败。
- 使用未定义的 event 名称时，会报错
- 使用未定义的 prop 名称时，会报错

## [样式规范校验](./linter/cml-cmss.html)

- 满足 css 规则
- 不支持级联

## [配置规范校验](./linter/cml-json.html)

- json 格式是否合法
- usingComponents 只放置在 base 字段下
