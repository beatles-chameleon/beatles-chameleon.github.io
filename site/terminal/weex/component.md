# weex 端组件接入

chameleon 允许在 weex 端多态组件中直接引入原生 vue 组件，一方面是为了增加代码重用度，另一方面则是方便渐进式地迁移使用 chameleon。

## 为什么要接入 weex 端组件

chameleon 作为跨端框架，将各端相同性及差异性进行统一封装形成 chameleon 的规范，但即使是这样，我们也没有办法百分百地避免差异，这样的差异可能来自产品的要求、技术的实现等等，由此 chameleon 提出了[组件多态协议](framework/polymorphism/component.html)，在多态组件实现中，直接引用原生组件，降低开发成本。

## 怎么引入 weex 端组件

第一类是 weex 支持的原生组件，比如`div` `text`等，详细请查看[weex 原生组件列表](http://weex-project.io/cn/references/components/index.html)，如果这样的组件已经满足开发需求，那么就可以直接使用了：

```html
<!-- list.weex.cml -->
<template>
  <div>
    <text v-for="l in list">{{l}}</text>
  </div>
</template>
```

第二类是原先封装好的组件，首先你需要将组件复制到 chameleon 项目中，然后只需要在 chameleon 组件中声明式引入该组件即可使用。
还是以`list`组件为例，假设原有封装好的组件`custom-list`，目录结构如下：

```html
<!-- index.cml -->
<template>
  <v-list></v-list>
</template>
...
<script cml-type="json">
  {
    "base": {
      "usingComponents": {
        "v-list": "/components/vue-components/v-list"
      }
    }
  }
</script>
```

```html
<!-- components/vue-components/v-list.vue -->
<template>
  <ul>
    <li v-for="l in list">{{l}}</li>
  </ul>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array,
        default: function() {
          return [1, 2, 3, 4];
        },
      },
    },
  };
</script>
```

> 需要注意的是组件路径需要写到.vue 层级，但是不带后缀。

## 示例

详细示例戳这里[多态组件扩展](/example/poly.html)
