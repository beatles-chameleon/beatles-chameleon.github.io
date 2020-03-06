# 获取系统信息

## getSystemInfo

获取系统信息，至少返回系统类型，如 ios 或 android。

### 参数

无

### 返回值

|     返回值     |  类型  |                                                     说明                                                      |
| :------------: | :----: | :-----------------------------------------------------------------------------------------------------------: |
|       os       | String |                                    系统类型，ios 或 android。注意是小写。                                     |
|      env       | String | 所处环境，web，weex，wx（微信小程序），alipay(支付宝小程序)，baidu（百度小程序）,qq(QQ 小程序),tt(头条小程序) |
| viewportWidth  | Number |                                                    视口宽度                                                   |
| viewportHeight | Number |                                                    视口高度                                                   |
|  extraParams   | Object |                                  包含端内 bridge 或小程序 api 返回的所有信息                                  |

### 举例

```javascript
cml.getSystemInfo().then((info) => {});
```
