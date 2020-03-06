# Store

通过 `chameleon-store` 创建的`Store`实例,有以下方法：

##### `ChameleonStore.createStore(options: Object): Object`

Store 构造器。[详细介绍](createStore.html)

#### ChameleonStore.Store 实例方法

##### `Store.commit(type: string, payload?: any)`

提交 mutation。[详细介绍](commit.html)

##### `Store.dispatch(type: string, payload?: any)`

分发 action。[详细介绍](dispatch.html)

##### `Store.mapState(map: Array<string> | Object<string>): Object`

为组件创建计算属性以返回 store 中的状态。[详细介绍](mapState.html)

##### `Store.mapGetters(map: Array<string> | Object<string>): Object`

为组件创建计算属性以返回 getter 的返回值。[详细介绍](mapGetters.html)

##### `Store.mapMutations(map: Array<string> | Object<string>): Object`

创建组件方法提交 mutation。[详细介绍](mapMutations.html)

##### `Store.mapActions(map: Array<string> | Object<string>): Object`

创建组件方法分发 action。[详细介绍](mapActions.html)

##### `Store.registerModule(path: String, module: Module)`

注册一个动态模块。[详细介绍](registerModule.html)
