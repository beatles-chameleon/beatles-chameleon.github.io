# 单位

在 chameleon 项目中，我们使用`cpx`作为统一的长度单位。`cpx`可以根据  屏幕宽度自适应，我们规定屏幕宽度为 750cpx。你也可以在  多态组件灰度层使用某一端的长度单位。

## 使用 cpx 设置元素宽度高度

```html
<template>
  <view style="width: 100cpx; height: 100cpx; background: red;"></view>
</template>
```

## 使用 cpx 设置  字体大小

```html
<template>
  <text style="font-size: 24cpx;">Chameleon</text>
</template>
```

## 使用 cpx 设置行高

```html
<template>
  <text style="font-size: 24cpx; line-height: 30cpx;">Chameleon</text>
</template>
```

## 使用 cpx 注意事项

** 应避免以下写法 **

```html
<template>
  <text style="{{'font-size: ' + fontSize + 'cpx'}}">Chameleon</text>
</template>
<script>
  class Test {
    data: {
      fontSize: 24,
    };
  }
  export default new Test();
</script>
```

可以改成以下写法

```html
<template>
  <text style="{{cstyle}}">Chameleon</text>
</template>
<script>
  class Test {
    data: {
      fontSize: 24
    },
    computed: {
      cstyle() {
        return 'font-size: ' + this.fontSize + 'cpx'
      }
    }
  }
  export default new Test()
</script>
```

## CSS color 单位

支持以下写法：

```html
.classA { /* 3-chars hex */ color: #0f0; /* 6-chars hex */ color: #00ff00; /* rgba */ color:
rgb(255, 0, 0); /* rgba */ color: rgba(255, 0, 0, 0.5); /* transparent */ color: transparent; /*
Basic color keywords */ color: orange; /* Extended color keywords */ color: darkgray; }
```

**注意**

- 不支持 hsl(), hsla(), currentColor, 8 个字符的十六进制颜色。

- rgb(a,b,c) 或 rgba(a,b,c,d) 的性能比其他颜色格式差很多，请选择合适的颜色格式。

颜色名称可查看:[颜色名称列表](./color.html).

## CSS number 单位

仅仅一个数字。用于 opacity，lines 等。

有时值必须是整数，例如：lines。

## CSS percentage 单位 (暂不支持)

表示百分比值，如“50％”，“66.7％”等。

它是 CSS 标准的一部分，但 chameleon 暂不支持。
