# @import

指定导入的外部样式表及目标媒体。支持导入`.css`、`.less`、`.stylus`类型文件。

该规则必须在样式表头部最先声明。并且其后的分号是必需的，如果省略了此分号，外部样式表将无法正确导入，并会生成错误信息。

```html
<style>
  @import './base.css';
</style>
```

```html
<style lang="less">
  @import './base.less';
</style>
```

```html
<style lang="stylus">
  @import './base.stylus';
</style>
```
