# 开始

“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。store 和单纯的全局对象有以下两点不同：

1. store 的状态存储是响应式的。当 chameleon 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。

### 最简单的 store

创建 store，并且提供一个初始 state 对象和一些 mutation：

```javascript
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
```

通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：

```javascript
store.commit('increment');

console.log(store.state.count); // -> 1
```

再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。有了它，我们甚至可以实现如时间穿梭般的调试体验。

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。

接下来，我们将会更深入地探讨一些核心概念。让我们先从 [State](state.html) 概念开始。
