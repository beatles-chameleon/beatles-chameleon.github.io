# 接口多态的扩展

<b>(chameleon-tool@0.4.0 以上开始支持)</b>

<a href="./api.html">接口多态</a>一节讲解了接口多态的使用，这一节讲解接口多态的一些扩展语法，更适用于扩展新端使用。

## 1 扩展语法

## 1.1 `include`标签

当前 interface 文件用`<include>`标签可以引入其他`.interface`文件，代表继承该文件的接口定义和实现。然后在当前文件中去实现引入的接口定义，可以覆写引入的某一端实现，也可以去扩展新端的实现。 语法是`<include src="${引用路径}.interface"></include>`，有如下规则：

- src 属性指向的文件路径不支持 webpack 别名，只能是相对路径或者 npm 包名开始。

#### 例如扩展新端 API（以头条小程序为例，假设端扩展标识为：toutiao）:

```js
// 引入官方标准interface文件
<include src="chameleon-api/src/interfaces/alert/index.interface"></include>

// 扩展实现新端（以头条小程序为例，假设端扩展标识为：toutiao）
<script cml-type="toutiao">
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

## 1.2 `script` src 属性

`<script></script>`标签可以通过指定`src`的方式引用外部 js 文件为某一平台或某几个的实现或者接口定义。
有如下规则：

- src 属性指向的文件路径不支持 webpack 别名，只能是相对路径或者 npm 包名开始。
- cml-type 属性为字符串，如果多个端可以用英文逗号 , 进行分割，例如 cml-type="web,wx".

例如：

```
<script cml-type="interface">
interface FirstInterface {
  getMsg(msg: String): String;
}

</script>

<script cml-type="web" src="./web.js"></script>

<script cml-type="wx,alipay" src="./miniapp.js"></script>
```

`web.js`文件内容如下：

```
class Method implements FirstInterface {
  getMsg(msg) {
    return 'web:' + msg;
  }
}

export default new Method();
```

## 2 多态 API 查找优先级

没有扩展语法之前，每个端的实现都在同一个文件中，没有优先级的问题，但是有了扩展语法之后，就会有优先级问题。查找优先级如下：

- 文件内部的定义, 包括采用 src 的形式指定其他文件
- `<include>src`属性指向的 interface 文件中继续查找该部分

例如有如下两个 interface 文件：

```
├── first
│   └── first.interface
└── second
    └── second.interface

```

`first.interface` 包括接口定义，web 和 weex 端的实现，内容如下：

```html
<script cml-type="interface">
  interface FirstInterface {
    getMsg(msg: String): String;
  }
</script>
<script cml-type="web">
  class Method implements FirstInterface {
    getMsg(msg) {
      return 'first web:' + msg;
    }
  }
  export default new Method();
</script>
<script cml-type="weex">
  class Method implements FirstInterface {
    getMsg(msg) {
      return 'first weex:' + msg;
    }
  }
  export default new Method();
</script>
```

`second.interface` 包括对`first.interface`的`include` weex 端和 wx 端的实现，内容如下：

```html
<include src="../first/first.interface"></include>
<script cml-type="weex">
  class Method implements FirstInterface {
    getMsg(msg) {
      return 'second weex:' + msg;
    }
  }
  export default new Method();
</script>
<script cml-type="wx">
  class Method implements FirstInterface {
    getMsg(msg) {
      return 'second wx:' + msg;
    }
  }
  export default new Method();
</script>
```

当外部引用`second.interface`文件并调用 getMsg 方法时 各端编译获取方法如下：

- web 端，因为`second.interface`中没有 web 端实现 所以查找到`first.interface`中 web 端 getMsg 方法
- weex 端，因为`second.interface`中有 weex 端实现 所以使用`second.interface`中 weex 端 getMsg 方法
- wx 端，因为`second.interface`中有 wx 端实现 所以使用`second.interface`中 wx 端 getMsg 方法

#### 注意 cml-type interface 部分必须是唯一的

例 1：

```
// 引入chameleon-api interface文件
<include src="chameleon-api/src/interfaces/alert/index.interface"></include>

// 错误实现interface部分
<script cml-type="interface">
......
</script>

// 扩展实现新端
<script cml-type="demo">
......
</script>
```

`<include>`的`chameleon-api/src/interfaces/alert/index.interface`文件中已经有`cml-type="interface"`的定义，所以当前文件中`<script cml-type="interface"></script>`定义部分是错误的。

例 2：

```
// 引入cml-tt-api interface文件
<include src="cml-tt-api/src/interfaces/alert/index.interface"></include>

// 引入cml-quickapp-api interface文件
<include src="cml-quickapp-api/src/interfaces/alert/index.interface"></include>

// 扩展实现新端
<script cml-type="demo">
......
</script>
```

文件中引入了两个`interface`文件，但是他们内部找到的`<script cml-type="interface"></script>`定义部分都在`chameleon-api/src/interfaces/alert/index.interface`中，是同一文件。所以不认为是错误的。
