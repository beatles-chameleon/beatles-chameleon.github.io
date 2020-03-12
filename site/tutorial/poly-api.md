# 实现多态 API

目前 `chameleon-api` 提供的是主要的跨端方法，如果你 在里面没有找到需要的方法，还可以使用多态协议多态接口来进行扩展。今天我们就手把手来实现一个多态 API 接口。

## 创建一个获取一些信息的跨端接口

我们可以在项目根目录下执行 `cml init component`，选择 `Polymorphic function`，输入文件名称，例如 `getSomeInfo`，生成如下文件结构

```bash
├── components
│   ├── getSomeInfo
│   │   ├── getSomeInfo.interface
```

文件内容如下：

```vue
<script cml-type="interface">
interface GetSomeInfoInterface {
  type Info = {
    env: String,
    extra: String,
    myInput: String,
  }
  getSomeInfo(input: String): Info;
}
</script>
<script cml-type="web">
class Method implements GetSomeInfoInterface {
  getSomeInfo(input) {
    // 一些获取的操作，得到信息
    return {
      env: 'web',
      extra: '其他的信息',
      myInput: input,
    };
  }
}
export default new Method();
</script>
<script cml-type="weex">
class Method implements GetSomeInfoInterface {
  getSomeInfo(input) {
    // 一些获取的操作，得到信息
    return {
      env: 'weex',
      extra: '其他的信息',
      myInput: input,
    };
  }
}
export default new Method();
</script>
<script cml-type="wx">
class Method implements GetSomeInfoInterface {
  getSomeInfo(input) {
    // 一些获取的操作，得到信息
    return {
      env: 'wx',
      extra: '其他的信息',
      myInput: input,
    };
  }
}
export default new Method();
</script>
<script cml-type="alipay">
class Method implements GetSomeInfoInterface {
  getSomeInfo(input) {
    // 一些获取的操作，得到信息
    return {
      env: 'alipay',
      extra: '其他的信息',
      myInput: input,
    };
  }
}
export default new Method();
</script>
<script cml-type="baidu">
class Method implements GetSomeInfoInterface {
  getSomeInfo(input) {
    // 一些获取的操作，得到信息
    return {
      env: 'baidu',
      extra: '其他的信息',
      myInput: input,
    };
  }
}
export default new Method();
</script>
```

在 interface 文件中， 在 cml-type="interface"部分规定  入参和出参的具体类型。在 cml-type="web|weex|wx|alipay|baidu"等  各自端中实现对应方法。 即可实现一个可以跨端使用的多态接口。

## 使用多态接口

在你的项目中可以通过路径引用到该方法，进行使用。

```javascript
import myApi from 'components/getSomeInfo/getSomeInfo.interface';
const someInfo = myApi.getSomeInfo();
// 对获得的信息进行使用
```

值得一提的是，你可以在每个端自由引入在该端所需的库（你的项目库，npm 包，jsbridge 等），尽情丰富方法的实现，如在 Web 端，当网页在客户端外的时候，你可以使用  普通方法进行实现；如果该网页也会出现在客户端内，你可以使用 jsbridge 对于方法进行  增强，获得更好的体验。
