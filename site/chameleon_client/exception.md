## 自动降级

为提高系统稳定性，`chameleon`提供了在某些场景下自动降级的方式。

自动降级分为主动降级和被动降级。

#### 主动降级

主动降级分两种：

- 通过控制降级开关，一键控制客户端是否使用 weex 能力。
- 由于程序异常，由前端在 js 中控制应用是否降级为 h5，保证程序功能的正常运转。

#### 被动降级

- 当 weex 渲染时使用的 bundle 下载或者执行出现异常时，降级成 H5 页面，保证功能正常运转(详细过程可详细了解下方`执行过程中的自动降级`)。

---

#### 执行过程中的自动降级

- 步骤 1：后端服务下发给客户端跳转地址([Chameleon URL 格式](../framework/chameleon_url.html))

  一个完整的跳转地址示例如下：

        https://api.chameleon.com/pageA?weex_addr=https%3A%2F%2Fstatic.chameleon.com%2F%3F%3Flib.js%2CpageA.js%2CpageB.js%2CpageC.js&otherparam=xxx

  跳转地址格式：

        ${H5主链接}?cml_addr=${weex bundle地址}&${其他参数}

  可变字段说明：

  - H5 主链接: 渲染 H5 页面的地址，当某些场景下发现异常时[自动降级](./exception.html)使用
  - weex bundle 地址: 客户端渲染 weex 页面需要的`bundle`地址
  - 其他参数：页面渲染依赖的 http url 中的参数

- 步骤 2：客户端加载地址

  1. 客户端根据`跳转地址格式`将`H5主链接`、`weex bundle地址`和`其他参数`分为三部分。
  2. 从`客户端缓存`中查询当前页面所需的`weex bundle地址`是否已经存在，如果`不存在`需要重新获取`weex bundle地址`。

- 步骤 3：客户端渲染执行 weex bundle

  如果加载失败，直接使用`H5主链接`，渲染 H5 页面，走 web 逻辑
