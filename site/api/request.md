# 网络请求

## get

发送 get 请求

### 参数

|    参数     |  类型  | 必需 |                                                   默认值                                                    |                                                                                                                                说明                                                                                                                                |
| :---------: | :----: | :--: | :---------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     url     | String |  是  |                                                                                                             |                                                                                   网络请求地址，如果项目中配置了 apiPrefix 并且 setting 中的 apiPrefix 为 true，则添加配置的前缀                                                                                   |
|    data     | Object |  否  |                                                                                                             |                                                                                                                 要传的参数，会拼接在请求的 url 中                                                                                                                  |
|   header    | Object |  否  |                                                                                                             |                                                                                                                      设置 http 请求的 header                                                                                                                       |
| resDataType | String |  否  |                                                    json                                                     |                                                                              设置 response 的数据类型, 为 json 时, 会尝试对返回值进行 JSON.parse(), 若不希望 parse, 则传入'text'即可                                                                               |
|   setting   | Object |  否  | {jsonp: false(仅 web 端有效), apiPrefix: Boolean(根据传入 url 决定), credentials: 'include'(仅 web 端有效)} | 自定义了设置，apiPrefix 为是否添加 chameleon.config.js 中设置的 apiPrefix (以http://或https://或//开头的url默认不会拼接, 其他情况均会自动拼接); jsonp 为 true 时会发起一个 jsonp 请求; credentials 可选值'omit'/'same-origin'/'include', 对应 fetch 的 credentials |
|   domain    | String |  否  |                                                                                                             |                                     网络请求的域名前缀（chameleon-api@0.3.1 开始支持）具体参见<a href="../framework/newmock.html">api 多域名 mock</a><br/><b>如果设置了 domain 则 chameleon.config.js 中的 apiPrefix 失效</b>                                      |

### 返回值

返回 promise，对应的请求成功和失败回调

### 举例

```javascript
cml
  .get({
    url: 'https://cml.com/api/user/1',
  })
  .then(
    (res) => {
      cml.showToast({
        message: JSON.stringify(res),
        duration: 2000,
      });
    },
    (err) => {
      cml.showToast({
        message: JSON.stringify(err),
        duration: 2000,
      });
    },
  );
```

## post

发送 post 请求

### 参数

|    参数     |  类型  | 必需 |                                                   默认值                                                    |                                                                                                                                说明                                                                                                                                |
| :---------: | :----: | :--: | :---------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     url     | String |  是  |                                                                                                             |                                                                                   网络请求地址，如果项目中配置了 apiPrefix 并且 setting 中的 apiPrefix 为 true，则添加配置的前缀                                                                                   |
|    data     | Object |  否  |                                                                                                             |                                                                                                                 要传的参数，会拼接在请求的 url 中                                                                                                                  |
|   header    | Object |  否  |                                                                                                             |                                                                                                                      设置 http 请求的 header                                                                                                                       |
| contentType | String |  否  |                                                    form                                                     |                                                                 取值：form 或 json，决定 body 中 data 的格式，对应 header 中 content-type 为 application/x-www-form-urlencoded 或 application/json                                                                 |
| resDataType | String |  否  |                                                    json                                                     |                                                                              设置 response 的数据类型, 为 json 时, 会尝试对返回值进行 JSON.parse(), 若不希望 parse, 则传入'text'即可                                                                               |
|   setting   | Object |  否  | {jsonp: false(仅 web 端有效), apiPrefix: Boolean(根据传入 url 决定), credentials: 'include'(仅 web 端有效)} | 自定义了设置，apiPrefix 为是否添加 chameleon.config.js 中设置的 apiPrefix (以http://或https://或//开头的url默认不会拼接, 其他情况均会自动拼接); jsonp 为 true 时会发起一个 jsonp 请求; credentials 可选值'omit'/'same-origin'/'include', 对应 fetch 的 credentials |
|   domain    | String |  否  |                                                                                                             |                                     网络请求的域名前缀（chameleon-api@0.3.1 开始支持）具体参见<a href="../framework/newmock.html">api 多域名 mock</a><br/><b>如果设置了 domain 则 chameleon.config.js 中的 apiPrefix 失效</b>                                      |

### 返回值

返回 promise，对应的请求成功和失败回调

### 举例

```javascript
cml
  .post({
    url: 'https://cml.com/api/user/update',
    data: {
      a: 1,
    },
  })
  .then(
    (res) => {
      cml.showToast({
        message: JSON.stringify(res),
        duration: 2000,
      });
    },
    (err) => {
      cml.showToast({
        message: JSON.stringify(err),
        duration: 2000,
      });
    },
  );
```

## request

发送 request 请求

### 参数

|    参数     |  类型  | 必需 |                                                   默认值                                                    |                                                                                                                                说明                                                                                                                                |
| :---------: | :----: | :--: | :---------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     url     | String |  是  |                                                                                                             |                                                                                   网络请求地址，如果项目中配置了 apiPrefix 并且 setting 中的 apiPrefix 为 true，则添加配置的前缀                                                                                   |
|    data     | Object |  否  |                                                                                                             |                                                                                                                 要传的参数，会拼接在请求的 url 中                                                                                                                  |
|   method    | Object |  否  |                                                                                                             |                                                                                              若 cml.get()/cml.post()无法满足需求,如需使用 DELETE/PUT 时,可调用此方法                                                                                               |
|   header    | Object |  否  |                                                                                                             |                                                                                                                      设置 http 请求的 header                                                                                                                       |
| contentType | String |  否  |                                                    form                                                     |                                                                 取值：form 或 json，决定 body 中 data 的格式，对应 header 中 content-type 为 application/x-www-form-urlencoded 或 application/json                                                                 |
| resDataType | String |  否  |                                                    json                                                     |                                                                              设置 response 的数据类型, 为 json 时, 会尝试对返回值进行 JSON.parse(), 若不希望 parse, 则传入'text'即可                                                                               |
|   setting   | Object |  否  | {jsonp: false(仅 web 端有效), apiPrefix: Boolean(根据传入 url 决定), credentials: 'include'(仅 web 端有效)} | 自定义了设置，apiPrefix 为是否添加 chameleon.config.js 中设置的 apiPrefix (以http://或https://或//开头的url默认不会拼接, 其他情况均会自动拼接); jsonp 为 true 时会发起一个 jsonp 请求; credentials 可选值'omit'/'same-origin'/'include', 对应 fetch 的 credentials |
|   domain    | String |  否  |                                                                                                             |                                     网络请求的域名前缀（chameleon-api@0.3.1 开始支持）具体参见<a href="../framework/newmock.html">api 多域名 mock</a><br/><b>如果设置了 domain 则 chameleon.config.js 中的 apiPrefix 失效</b>                                      |

### 返回值

返回 promise，对应的请求成功和失败回调

### 举例

```javascript
cml
  .request({
    url: 'https://cml.com/api/user/1',
    data: {
      a: 1,
    },
    method: 'PUT',
  })
  .then(
    (res) => {
      cml.showToast({
        message: JSON.stringify(res),
        duration: 2000,
      });
    },
    (err) => {
      cml.showToast({
        message: JSON.stringify(err),
        duration: 2000,
      });
    },
  );
```
