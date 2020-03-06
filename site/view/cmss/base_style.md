# 一致性基础样式

通常情况下，H5、小程序、客户端拥有各自的默认样式，各端呈现效果不一。所以，cml 框架会给各端添加一致性基础样式。

基础样式包括以下方面：

<table>
  <tr>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>布局</td>
    <td>
    display: flex; <br/>
    flex-direction: column;
    </td>
  </tr>
  <tr>
    <td>盒模型</td>
    <td>box-sizing: border-box;</td>
  </tr>
  <tr>
    <td>定位</td>
    <td>position: relative;</td>
  </tr>
  <tr>
    <td>文本</td>
    <td>
    display: block; <br/>
    font-size: 16px; <br/>
    white-space: pre-wrap;
    </td>
  </tr>
</table>

#### 针对 H5 端添加的基础样式如下

```css
.cml-root {
  width: 100%;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.cml-base {
  text-align: left;
  font-size: 0.4rem; /*15px*/
  letter-spacing: 0.02rem;
}

.cml-base,
.cml-base::before,
.cml-base::after {
  box-sizing: border-box;
  text-size-adjust: none;
}

.cml-view {
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.cml-text {
  display: block;
  box-sizing: border-box;
  position: relative;
  white-space: pre-wrap; /* not using 'pre': support auto line feed. */
  word-wrap: break-word;
  overflow: hidden; /* it'll be clipped if the height is not high enough. */

  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}
```

#### 针对小程序添加的基础样式如下：

```css
.cml-base {
  text-align: left;
  font-size: 32rpx;
  letter-spacing: 1rpx;
  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.cml-base,
.cml-base::before,
.cml-base::after {
  box-sizing: border-box;
  text-size-adjust: none;
}
.cml-view {
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.cml-text {
  display: block;
  box-sizing: border-box;
  position: relative;
  white-space: pre-wrap; /* not using 'pre': support auto line feed. 保留空白符序列，但是正常地进行换行 */
  word-wrap: break-word; /* 在长单词或 URL 地址内部进行换行。 */
  overflow: hidden; /* it'll be clipped if the height is not high enough. */

  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  border: 0 solid black;
  margin: 0;
  padding: 0;
  min-width: 0;
}
```

说明如下：

<table>
  <tr>
    <th>class名</th>
    <th>代表含义</th>
  </tr>
  <tr>
    <td>.cml-root</td>
    <td>H5端 app 根节点</td>
  </tr>
  <tr>
    <td>.cml-base</td>
    <td>任一节点</td>
  </tr>
  <tr>
    <td>.cml-view</td>
    <td><a href="../../component/base/content/view.html">view元素</a></td>
  </tr>
  <tr>
    <td>.cml-text</td>
    <td><a href="../../component/base/content/text.html">text元素</a></td>
  </tr>
</table>
