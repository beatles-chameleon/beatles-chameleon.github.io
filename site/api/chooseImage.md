# 选取照片

通过拍照，相册，拍照相册二选一 3 种方式选择照片数据

> 注： 在 weex 端，接入 chameleon 客户端 sdk 之后才可以使用该方法

## chooseImage

### 参数

| 参数            | 类型     | 必填 | 说明                                                                                                       |
| --------------- | -------- | ---- | ---------------------------------------------------------------------------------------------------------- |
| params.type     | String   | 是   | 类型 camera(相机)，album(相册)，choice(菜单选择) 注意 web 在端外使用 js 方式，故默认使用拍照相册二选一方式 |
| callbackSuccess | Function | 是   | 获取返回的数据回调，返回参数包含 web 和 weex 使用返回的 base64 数据, 小程序使用返回的 tempFilePaths 字段   |
| callbackFail    | Function | 否   | 调用发生失败信息                                                                                           |

## 示例

```javascript
// choice方式选择图片
cml.chooseImage({ type: 'choice' }).then((res) => {
  const myImageData = res.base64; // 微信小程序中使用返回的 res.tempFilePaths[0]
  // 接下来可以进行上传到服务器等操作
});
```
