# canIUse

用来查询某个方法 chameleon 是否支持。调用此方法，并传入你想知道是否支持的方法名。

## 使用示例

```javascript
cml.canIUse('showToast').then(() => {
  // 支持
}, () => {
  // 不支持
};
```
