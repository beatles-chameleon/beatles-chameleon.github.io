# 扩展新端 api

用户需要创建一个 npm 包，结构参考[cml-demo-api](https://github.com/chameleon-team/cml-extplatform-demo/tree/master/packages/cml-demo-api)。将`chameleon-api`中提供的每个方法利用[多态接口扩展](../framework/polymorphism/api_extend.md)语法扩展新端的实现。

### 扩展新端 API（以头条小程序为例，假设端扩展标识为：tt）:

```js
// 引入官方标准interface文件
<include src="chameleon-api/src/interfaces/alert/index.interface"></include>

// 扩展实现新端（以头条小程序为例，假设端扩展标识为：tt）
<script cml-type="tt">
class Method implements uiInterface {
  alert(opt, successCallBack, failCallBack) {
    // 根据头条小程序实现alert弹窗
    let { message, confirmTitle} = opt;
    tt.showModal({
      showCancel: false,
      title: '',
      content: message,
      confirmText: confirmTitle,
      success() {
        successCallBack(confirmTitle);
      },
      fail() {
        failCallBack(confirmTitle);
      }
    });
  }
}

export default new Method();
</script>

// 想覆写某已有端的方法实现（以微信小程序为例）
<script cml-type="wx">
class Method implements uiInterface {
  alert(opt, successCallBack, failCallBack) {
    // 按你的想法重新实现
  }
}
export default new Method();
</script>
```

需要注意的是，为了方便结合异步流程控制如 async、await 等进行操作，chameleon 官方提供的 api 接口均以 promise 形式进行返回。所以你也需要在外层使用 js 文件进行包装，将 interface 实现进行 promise 化或进行其他操作（如传入默认值）。

```js
import ui from './index.interface';

export default function alert(opt) {
  let { message = '操作成功', confirmTitle = '我知道了' } = opt;
  return new Promise((resolve, reject) => {
    ui.alert({ message, confirmTitle }, resolve, reject);
  });
}
```
