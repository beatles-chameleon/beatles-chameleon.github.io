# State

### 单一状态树

chameleon-store 用一个对象就包含了全部的应用层级状态。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

单状态树和模块化并不冲突——在后面的章节里我们会讨论如何将状态和状态变更事件分布到各个子模块中。

### 在 chameleon 组件中获得 store 状态

那么我们如何在 chameleon 组件中展示状态呢？由于 chameleon 内置的 store 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：

```js
import store from '../store';
// 创建一个 Counter 组件
const Counter = {
  computed: {
    count() {
      return store.state.count;
    },
  },
};
```

每当 `store.state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。

### `mapState`辅助函数

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键：

```js
// 在单独构建的版本中辅助函数为 chameleon内置的store.mapState
import store from '../store';

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

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 `mapState` 传一个字符串数组。

```js
import store from '../store';

class Index {
  computed = store.mapState([
    // 映射 this.count 为 store.state.count
    'count',
  ]);
}
export default new Index();
```

### 对象展开运算符

`mapState` 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 `computed` 属性。但是自从有了[对象展开运算符](https://github.com/sebmarkbage/ecmascript-rest-spread)（现处于 ECMASCript 提案 stage-3 阶段），我们可以极大地简化写法：

```js
import store from '../store';

class Index {
  computed = {
    localComputed() {
      /* ... */
    },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...store.mapState({
      // ...
    }),
  };
}
export default new Index();
```

### 组件仍然保有局部状态

使用 chameleon 内置的 store 并不意味着你需要将**所有的**状态放入`store`。虽然将所有的状态放到 chameleon 内置的 store 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
