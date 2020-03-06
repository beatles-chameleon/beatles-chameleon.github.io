# 数据管理

`chameleon-store` 提供集中管理数据的能力。

这是一个简单的例子：

- [目录结构](store/structure.html)
- [简单介绍](store/start.html)

类似 Vuex 数据理念和语法规范，chameleon-store 主要有以下核心概念：

- [state](store/state.html)
- [getters](store/getters.html)
- [mutation](store/mutation.html)
- [action](store/action.html)
- [子模块](store/module.html)

通过 `chameleon-store` 创建的`Store`实例,有以下方法：

##### `ChameleonStore.createStore(options: Object): Object`

Store 构造器。[详细介绍](../api/store/createStore.html)

#### ChameleonStore.Store 实例方法

##### `Store.commit(type: string, payload?: any)`

提交 mutation。[详细介绍](../api/store/commit.html)

##### `Store.dispatch(type: string, payload?: any)`

分发 action。[详细介绍](../api/store/dispatch.html)

##### `Store.mapState(map: Array<string> | Object<string>): Object`

为组件创建计算属性以返回 store 中的状态。[详细介绍](../api/store/mapState.html)

##### `Store.mapGetters(map: Array<string> | Object<string>): Object`

为组件创建计算属性以返回 getter 的返回值。[详细介绍](../api/store/mapGetters.html)

##### `Store.mapMutations(map: Array<string> | Object<string>): Object`

创建组件方法提交 mutation。[详细介绍](../api/store/mapMutations.html)

##### `Store.mapActions(map: Array<string> | Object<string>): Object`

创建组件方法分发 action。[详细介绍](../api/store/mapActions.html)

##### `Store.registerModule(path: String, module: Module)`

注册一个动态模块。[详细介绍](../api/store/registerModule.html)
