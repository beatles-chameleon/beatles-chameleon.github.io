# export & import

chameleon 框架的编译时加载方案是在 ES6 的 module 能力基础上扩展的，主要由两个命令构成：export 和 import。

### export 命令

export 命令用于规定模块的对外接口。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用 export 关键字输出该变量。下面是一个 JS 文件，里面使用 export 命令输出变量。

```javascript
// profile.js
const name = 'Mike';
const gender = 'male';
const age = 24;

export { name, gender, age };
```

### import 命令、require 命令

import 命令和 require 命令用于输入其他模块提供的功能。

使用 export 命令定义了模块的对外接口以后，通过`import`命令加载这些模块。
导入规范如下表所示：

<table>
  <tr>
    <th width="200px">当前文件后缀</th>
    <th>仅限导入的类型</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><a href="../../view/cml.html">.cml</a></td>
    <td>.js、.json</td>
    <td>
      import a from 'a.js'; <br/>
      import b from 'b.json';
    </td>
  </tr>
  <tr>
    <td>
    <a href="../../framework/polymorphism/component.html#webweexwxcml">*.[web|weex|wx|alipay|baidu|tt|qq].cml</a>
    </td>
    <td><a href="../../framework/polymorphism/component.html#interface-文件">.interface</a>、.js、.json</td>
    <td>
      import a from 'a.js'; <br/>
      import b from 'b.json';<br/>
      import c from 'c.interface';
    </td>
  </tr>
  <tr>
    <td>.js</td>
    <td><a href="../../framework/polymorphism/component.html#interface-文件">.interface</a>、.js、.json</td>
    <td>
      import a from 'a.js';<br/>
      import b from 'b.json';<br/>
      import c from 'c.interface';<br/>
    </td>
  </tr>
  <tr>
    <td><a href="../../framework/polymorphism/component.html#interface-文件">.interface</a></td>
    <td>.js、.json</td>
    <td>
      import a from 'a.js';
      import b from 'b.json';
    </td>
  </tr>
</table>

如果没有加后缀名，会依次查找后缀为`.interface`, `.js`的文件

```javascript
// 会依次查找 profile.interface profile.js
import { name, gender, age } from './profile';
// 最后找到 profile.js
function setName(human) {
  human.textContent = name + ' ' + gender + ' ' + age;
}
```

```javascript
// 会依次查找 profile.interface profile.js

const { name, age, gender } = require('./profile');
// 最后找到 profile.js
function setName(human) {
  human.textContent = name + ' ' + gender + ' ' + age;
}
```
