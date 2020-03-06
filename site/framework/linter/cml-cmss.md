# 样式规范校验

## CMSS 规则

CMSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

selector {
declaration1;
declaration2;
...
declarationN
}
每条声明由一个属性和一个值组成。

## 声明

属性（property）是你希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开，一条声明以分号结尾。

```css
selector {
  property1: value1;
  property2: value2;
}
```

selector 应为一条独立的 id 名称或者 class 名称，不支持级联

```css
// 正确
.selector {
  property1: value1;
  property2: value2;
}
#selector {
  property1: value1;
  property2: value2;
}

// 错误
#selector1 .selector {
  property1: value1;
  property2: value2;
}
```

## 多端之间的差异对比

!INCLUDE "../../example/different.md"

**注意:**框架会根据上表所述的多端之间的差异做校验。
