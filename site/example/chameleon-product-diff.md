# 普通跨端 VS Chameleon

#### 正常业务代码重复实现

```javascript
// 普通业务代码web
if (业务逻辑判断A) {
  业务操作();
} else if (业务逻辑判断B) {
  业务操作();
}
// 普通业务代码小程序
if (业务逻辑判断A) {
  业务操作();
} else if (业务逻辑判断B) {
  业务操作();
}

// 普通业务代码Objective-c
if (业务逻辑判断A) {
  [XXX业务操作];
} else if (业务逻辑判断B) {
  [XXX业务操作];
}
```

#### 一套代码运行多端合并

哇好牛逼，一套代码多端实现，开发效率显著提升

```javascript
// 普通跨端框架，实现一套代码运行多端
if (业务逻辑判断A) {
  业务操作();
} else if (业务逻辑判断B) {
  业务操作();
}
```

#### 理想很美好，现实很骨感

遇到了产品差异化实现：“我希望 web 端下载 APP，小程序不用下载”

```javascript
// 普通跨端框架，实现一套代码运行多端
if (业务逻辑判断A) {
  业务操作();
  if (ENV.小程序) {
    业务差异操作();
  } else if (ENV.web) {
    业务差异操作();
  } else if (ENV.端) {
    业务差异操作();
  }
} else if (业务逻辑判断B) {
  业务操作();
  if (小程序) {
    业务差异操作();
  } else if (web) {
    业务差异操作();
  } else if (端) {
    业务差异操作();
  }
}
```

这就尴尬了，如果你觉得以上不复杂，假设有 4、5 个端呢，业务逻辑掺杂跨端逻辑，产品逻辑别打断，可读性差，需求变更，牵一发动全身，每个端都要测试，跨端代码效率变得适得其反。

#### Chameleon

Chameleon 将特有代码充分隔离，保证正常产品逻辑整体具有连续性，保障各端产品差异化模块的独立性、一致性、可读。
差异化产品修改不会影响其他端，各端底层接口调用不会影响其他端。

```javascript
// Chameleon跨端设计遇到产品差异化的代码
if (业务逻辑判断A) {
  业务操作();
  interface_foo(); // 产品多态接口
} else if (业务逻辑判断B) {
  业务操作();
  interface_foo2(); // 产品多态接口
}
```