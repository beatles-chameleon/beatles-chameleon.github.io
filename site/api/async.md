# 异步控制

你可以使用 Promise，async、await 来更好的进行异步流  的控制。

## Promise((resolve, reject) => {})

### 参数

- resolve：成功回调
- reject： 失败回调

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作的代码
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

## async，await

```javascript
const sleep = function(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, time);
  });
};

const start = async function() {
  let result = await sleep(3000);
  console.log(result);
};

start();
```
