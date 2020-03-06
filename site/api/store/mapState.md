# Store.mapState

为组件创建计算属性以返回 chameleon store 中的状态。[详细介绍](../../logic/store/state.html)

##### 参数说明

<table>
<tr>
    <th>参数</th>
    <th>类型</th>
    <th>必填</th>
    <th>说明</th>
</tr>
<tr>
    <td>map</td>
    <td>Array<string> | Object<string></td>
    <td>是</td>
    <td>如果是对象形式，成员可以是一个函数。function(state: any)</td>
</tr>
</table>

##### 示例

```js
// store.js
import createStore from 'chameleon-store';
const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;

// app.js
import store from './store.js';
class Index {
  // ...
  computed = store.mapState({
    // 箭头函数可使代码更简练
    count: (state) => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
  });
}
export default new Index();
```
