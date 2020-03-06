# 接口多态(Polymorphic function)

## 初始化多态接口

项目根目录下执行`cml init component`，选择`Polymorphic function`，输入文件名称，例如`utils`，生成如下文件结构

```bash
├── components
    └──utils
      └── utils.interface
```

初始化文件内容如下：

```html
<script cml-type="interface">
  interface UtilsInterface {
    getMsg(msg: string): void;
  }
</script>
<script cml-type="web">
  class Method implements UtilsInterface {
    getMsg(msg) {
      return 'web:' + msg;
    }
  }
  export default new Method();
</script>
<script cml-type="weex">
  class Method implements UtilsInterface {
    getMsg(msg) {
      return 'weex:' + msg;
    }
  }
  export default new Method();
</script>
<script cml-type="wx">
  class Method implements UtilsInterface {
    getMsg(msg) {
      return 'wx:' + msg;
    }
  }
  export default new Method();
</script>
<script cml-type="alipay">
  class Method implements UtilsInterface {
    getMsg(msg) {
      return 'alipay:' + msg;
    }
  }
  export default new Method();
</script>
<script cml-type="baidu">
  class Method implements UtilsInterface {
    getMsg(msg) {
      return 'baidu:' + msg;
    }
  }
  export default new Method();
</script>
```

文件中利用<script></script>标签将各端代码进行物理隔离，利用 cml-type 属性指定平台。
`cml-type="interface"`为接口定义部分，利用[接口校验语法](./check.html)定义这个接口的方法及方法的参数与返回值。

`cml-type="web|wx|weex|alipay|baidu"`为各端实现部分，按照 interface 接口的定义进行方法的实现输入输出。<b>注意要以`export default`的形式导出对象</b>。

- cml-type="web"
  可以调用 web 端任意方法和全局变量

- cml-type="wx"
  可以调用微信小程序端任意方法和全局变量

- cml-type="alipay"
  可以调用支付宝小程序端任意方法和全局变量

- cml-type="baidu"
  可以调用百度小程序端任意方法和全局变量

- cml-type="weex"
  可以调用 weex 端任意方法和全局变量

- cml-type="qq"
  可以调用 QQ 小程序端任意方法和全局变量

- cml-type="tt"
  可以调用头条小程序端任意方法和全局变量

### 调用多态接口

在需要使用多态接口的组件中引入，例如`src/pages/index/index.cml`中引用，代码如下：

```js
import utils from '../../components/utils/utils.interface';
let message = utils.getMsg();
```

## 场景举例

[ 手把手教你系列- 实现多态 API ](../../example/chameleon-api.html)

## 扩展阅读

### 什么时候用到接口多态？

<b>接口多态适用于因为端的不同而进行不同接口的调用或者不同业务逻辑处理的场景。</b>
例如:我们的页面现在需要一个本地存储功能的需求，我们已知各端的接口调用方法

- web 端接口是`localStorage.setItem`
- 微信小程序端的接口是`wx.setStorageSync`
- weex 端的接口是`storage.setItem`

如果不使用接口多态我们只能根据不同环境去调用各自的接口

```javascript
if (process.env.platform === 'web') {
  localStorage.setItem(key, value, function(e) {});
} else if (process.env.platform === 'wx') {
  wx.setStorageSync(key, value);
} else if (process.env.platform === 'alipay') {
  my.setStorageSync(key, value);
} else if (process.env.platform === 'baidu') {
  swan.setStorageSync(key, value);
} else if (process.env.platform === 'weex') {
  storage.setItem(key, value, function(e) {});
}
```

这样的代码有如下  待解决问题：

1. 增加代码复杂度，难以维护
2. 各端接口的参数不一致， 写多种逻辑
3. 各端接口耦合在一起，bug 风险极高
4. 没有做到各端代码的分离，增大代码体积

利用了接口多态之后的使用方式如下：

```javascript
import utils from 'utils.interface';

utils.setStorage(key, value, cb);
```

`utils.interface`对 setStorage 进行了封装,文件内容如下：

```html
<script cml-type="interface">
  // 定义一个传参为string类型，返回值为undefine的函数类型
  type Callback = (state: string) => undefined;

  // 定义模块的interface
  interface UtilsInterface {
    // 定义setStorage方法 参数个数及返回值类型
    setStorage(key: string, value: string, cb: Callback): undefined;
  }
</script>
<script cml-type="web">
  // web端接口实现
  class Method implements UtilsInterface {
    setStorage(key, value, cb) {
      try {
        localStorage.setItem(key, value);
        cb('success');
      }
      cache(e) {
        cb('fail');
      }
    }
  }
  export default new Method();
</script>
<script cml-type="weex">
  // weex端接口实现
  class Method implements UtilsInterface {
    setStorage(key, value, cb) {
      storage.setItem(key, value,
      function(e) {
          if (e.result == "success") {
            cb('success');
          } else {
            cb('fail');
          }
      });
    }
  }
  export default new Method();
</script>
<script cml-type="wx">
  // wx端接口实现
  class Method implements UtilsInterface {
    setStorage(key, value, cb) {
      try {
        wx.setStorageSync(key, value);
        cb('success');
      }
      catch(e) {
        cb('fail');
      }
    }
  }
  export default new Method();
</script>
<script cml-type="alipay">
  // alipay端接口实现
  class Method implements UtilsInterface {
    setStorage(key, value, cb) {
      try {
        my.setStorageSync(key, value);
        cb('success');
      }
      catch(e) {
        cb('fail');
      }
    }
  }
  export default new Method();
</script>
<script cml-type="baidu">
  // baidu端接口实现
  class Method implements UtilsInterface {
    setStorage(key, value, cb) {
      try {
        swan.setStorageSync(key, value);
        cb('success');
      }
      catch(e) {
        cb('fail');
      }
    }
  }
  export default new Method();
</script>
```

### 接口多态的优势

- **保证接口一致性**
  chameleon 的目标是跨多端，接口多态的作用就是屏蔽各端差异，调用多态接口的代码运行在多端，如果保证不了一致性，很可能出现某一端的需求引起的接口改动影响到其他端的功能，导致线上问题。
  我们  设计了`cml-type="interface"`接口定义部分，目的就是做一致性的校验，各端模块的构造函数要实现该接口，我们在开发环境运行时提供了接口的校验。

- **代码独立性**
   接口多态中利用`<script></script>`标签对各端代码进行物理隔离，独立实现，每一端的编译只编译该端的代码，不会有任何影响。

- ** 充分扩展性**
  在独立性的基础上，就可以在各端的代码中完全使用各端的接口，以及引用各自端的第三方 npm 包。
