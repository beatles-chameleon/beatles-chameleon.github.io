# 错误处理

在跨端的代码的书写中，你可以使用 try catch，Promise.catch()来进行错误的处理，但不可以在小程序和 weex 端的代码里出现 window.onerror 方法 。

## promise.then().catch((e) => {})

### 举例

```javascript
var promise = new Promise(function(resolve, reject) {
  resolve('Success');
});

promise
  .then(function(value) {
    console.log(value); // "Success!"
    throw 'oh, no!';
  })
  .catch(function(e) {
    console.log(e); // "oh, no!"
  });
```

## try catch

你可以使用 try catch finally 来捕获和处理异常错误。

### 举例

```javascript
try {
  throw 'myException'; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```
