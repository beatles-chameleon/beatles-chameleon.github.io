# Store.commit

提交 mutation。 [详细介绍](../../logic/store/mutation.html)

##### 参数说明

<table>
<tr>
    <th>参数</th>
    <th>类型</th>
    <th>必填</th>
    <th>说明</th>
</tr>
<tr>
    <td>type</td>
    <td>String</td>
    <td>是</td>
    <td>类型</td>
</tr>
<tr>
    <td>payload</td>
    <td>any</td>
    <td>否</td>
    <td>载荷,传入的额外参数</td>
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
store.commit('increment');
```
