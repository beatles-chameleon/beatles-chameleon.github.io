# 单位转换

## 尺寸单位

- cpx: chemeleon 体系中的尺寸单位，可以根据屏幕宽度进行自适应，规定屏幕的  宽度为 750cpx。例如在 iPhone6 上，屏幕宽度为 375px(css 像素)，则 750cpx = 375px,即 1cpx = 0.5px

## px2cpx

px 转 cpx，输入一个 px 值得到当前设备上对应的 cpx 值

### 参数

| 参数 |  类型  |         说明          |
| :--: | :----: | :-------------------: |
|  px  | Number | 要转换为 cpx 的 px 值 |

### 返回值

返回对应的 cpx 值

### 举例

```javascript
const cpx = cml.px2cpx(100);
```

## cpx2px

cpx 转 px，输入一个 cpx 值得到当前设备上对应的 px 值

### 参数

| 参数 |  类型  |         说明          |
| :--: | :----: | :-------------------: |
| cpx  | Number | 要转换为 px 的 cpx 值 |

### 返回值

返回对应的 px 值

### 举例

```javascript
const px = cml.cpx2px(100);
```
