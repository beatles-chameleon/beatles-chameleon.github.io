# 项目结构

Chameleon 内置 store 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

1. 应用层级的状态应该集中到单个 store 对象中。

2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的。

3. 异步逻辑都应该封装到 **action** 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

对于大型应用，我们会希望把 Chameleon 相关代码分割到模块中。下面是项目结构示例：

```bash
├── app
├── assets
├── pages                 # 页面
│   └── ...
├── components            # 组件
│   ├── c-todoitem
│   └── ...
└── store
    ├── action-types.js   # 定义 actions 的类型
    ├── actions.js        # 根级别的 actions
    ├── getter-types.js   # 定义 getters 的类型
    ├── getters.js        # 根级别的 getters
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── mutation-types.js # 定义 mutations 的类型
    ├── mutations.js      # 根级别的 mutation
    ├── state.js          # 组件初始状态数据
    └── modules           # 子模块
        ├── ...
```
