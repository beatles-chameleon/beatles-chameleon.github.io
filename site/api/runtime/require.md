# require

require 属于运行时加载方案命令，支持导入的文件类型同`import`

#### require 适用的场合

（1）条件加载
import()可以放在 if 代码块，根据不同的情况，加载不同的模块。

```javascript
let module;
if (condition) {
  module = require('moduleA');
} else {
  module = require('moduleB');
}
```

(2) 返回[图片线上资源地址](https://cmljs.org/doc/framework/deploy.html#2-%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E5%8F%91%E5%B8%83%E8%B7%AF%E5%BE%84)

```javascript
let imgPath = require('../../imgs/iconA.png'); // imgPath形如 https://cmljs.org/assets/imgs/iconA.png，通过publicPath配置 https://cmljs.org
```
