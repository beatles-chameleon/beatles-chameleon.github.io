# 命令行工具 (CLI)

`chameleon-tool` 是 CML 的命令行工具，该命令行工具命令详细如下。

## 获取工具信息

- `cml -h 或cml --help` 查看帮助信息
- `cml -v 或cml --version` 查看 chameleon-cli 版本信息

## 初始化项目、页面、组件

- `cml init -h` 查看 init 命令的帮助信息
- `cml init project` 创建项目
- `cml init page` 创建页面
- `cml init component` 创建组件
- `cml dev --nopreview` dev 模式不在浏览器打开 preview 页面，简写`cml dev -n`（chameleon-tool@0.3.3 版本开始支持）

`cml init project` 命令有如下参数

<table>
  <tr><th>参数名</th><th>可选值</th><th>默认值</th><th>功能</th></tr>
  <tr><td>lang</td><td>cml|vue</td><td>cml</td><td>设置项目默认模板语法</td></tr>
  <tr><td>tpl</td><td>html|smarty</td><td>html</td><td>设置chameleon.config.js中的templateType字段</td></tr>
  <tr><td>demo</td><td>blank|todo</td><td>blank</td><td>设置要初始化的项目模板</td></tr>
</table>

<b>使用方式</b>: `cml init project --参数名 参数值`
例如`cml init project --lang vue --tpl html`

## 开发/生产模式

- `cml dev` 启动开发模式，默认启动所有  端的构建，如果不启动某一端可以通过`devOffPlatform`配置
- `cml build` 启动生产模式打包，默认启动所有  端的构建，如果不启动某一端可以通过`buildOffPlatform`配置

## web 环境

- `cml web -h` 查看 web 命令的帮助信息
- `cml web dev` 执行 Web 端开发模式构建
- `cml web build` 执行 Web 端打包模式构建

## 微信小程序环境

- `cml wx -h` 查看 wx 命令的帮助信息
- `cml wx dev` 执行微信端开发模式构建 也会构建 Web 端，使 API Mock 生效
- `cml wx build` 执行微信端打包模式构建

## 支付宝小程序环境

- `cml alipay -h` 查看 alipay 命令的帮助信息
- `cml alipay dev` 执行支付宝端开发模式构建 也会构建 Web 端，使 API Mock 生效
- `cml alipay build` 执行支付宝端打包模式构建

## 百度小程序环境

- `cml baidu -h` 查看 baidu 命令的帮助信息
- `cml baidu dev` 执行百度端开发模式构建 也会构建 Web 端，使 API Mock 生效
- `cml baidu build` 执行百度端打包模式构建

## Weex 环境

- `cml weex -h` 查看 Weex 命令的帮助信息
- `cml weex dev` 执行 Weex 端开发模式构建，也会构建 Web 端，进行预览调试
- `cml weex build` 执行 Weex 端打包模式构建

## 其他更多环境

在执行 web、wx、alipay、baidu 和 weex 构建命令时，会读取 `chameleon.config.js` 中的配置信息，具体配置参见[项目配置](config.md)一节。
