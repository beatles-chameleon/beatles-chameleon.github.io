# 脚本规范校验

组件逻辑层响应页面操作的代码，需要导出以下规范的对象。

```javascript
{
  // 数据
  data: {
    dataKey1: dataValue1,
    dataKey2: dataValue2
  },
  // 属性
  props: {
    propKey1: propValue1,
    propKey2: propValue2
  },
  // 计算属性
  computed: {
    computedKey1: () => {

    },
    computedKey2: () => {

    }
  },
  // 监听属性
  watch: {
    watchKey1: () => {

    },
    watchKey2: () => {

    }
  },
  // 实例初始化之后，数据和方法挂在到实例之前
  beforeCreate: () => {

  },
  // 数据及方法挂载完成
  created: () => {

  },
  // 开始挂载已经编译完成的html,到对应的dom节点时
  beforeMount: () => {

  },
  // 模板或者html编译完成,且渲染到dom中完成
  mounted: () => {

  },
  // 实例销毁之前
  beforeDestroy: () => {

  },
  // 实例销毁后
  destroyed: () => {

  }
}
```

## 生命周期

|     钩子      |                    执行时机                     |                  详细                   |
| :-----------: | :---------------------------------------------: | :-------------------------------------: |
| beforeCreate  |    实例初始化之后，数据和方法挂在到实例之前     | 在该钩子函数中会传入当前页面 query 参数 |
|    created    |               数据及方法挂载完成                |                                         |
|  beforeMount  | 开始挂载已经编译完成的 html,到对应的 dom 节点时 |                                         |
|    mounted    |   模板或者 html 编译完成,且渲染到 dom 中完成    |                                         |
| beforeDestroy |                  实例销毁之前                   |                                         |
|   destroyed   |                   实例销毁后                    |                                         |

## 全局变量校验

编写一端代码逻辑时，如果使用其他端的全局变量，会校验失败。

按照端类型区分可用的全局变量：

### WEEX

`weex`, `global`

### WX

`wx`, `global`

### alipay

`my`, `global`

### baidu

`swan`, `global`

### WEB

`postMessage`, `blur`, `focus`, `close`, `frames`, `self`, `window`, `parent`, `opener`, `top`, `length`, `closed`, `location`, `document`, `origin`, `name`, `history`, `locationbar`, `menubar`, `personalbar`, `scrollbars`, `statusbar`, `toolbar`, `status`, `frameElement`, `navigator`, `customElements`, `external`, `screen`, `innerWidth`, `innerHeight`, `scrollX`, `pageXOffset`, `scrollY`, `pageYOffset`, `screenX`, `screenY`, `outerWidth`, `outerHeight`, `devicePixelRatio`, `clientInformation`, `screenLeft`, `screenTop`, `defaultStatus`, `defaultstatus`, `styleMedia`, `onanimationend`, `onanimationiteration`, `onanimationstart`, `onsearch`, `ontransitionend`, `onwebkitanimationend`, `onwebkitanimationiteration`, `onwebkitanimationstart`, `onwebkittransitionend`, `isSecureContext`, `onabort`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`, `onwheel`, `onauxclick`, `ongotpointercapture`, `onlostpointercapture`, `onpointerdown`, `onpointermove`, `onpointerup`, `onpointercancel`, `onpointerover`, `onpointerout`, `onpointerenter`, `onpointerleave`, `onafterprint`, `onbeforeprint`, `onbeforeunload`, `onhashchange`, `onlanguagechange`, `onmessage`, `onmessageerror`, `onoffline`, `ononline`, `onpagehide`, `onpageshow`, `onpopstate`, `onrejectionhandled`, `onstorage`, `onunhandledrejection`, `onunload`, `performance`, `stop`, `open`, `alert`, `confirm`, `prompt`, `print`, `requestAnimationFrame`, `cancelAnimationFrame`, `requestIdleCallback`, `cancelIdleCallback`, `captureEvents`, `releaseEvents`, `getComputedStyle`, `matchMedia`, `moveTo`, `moveBy`, `resizeTo`, `resizeBy`, `getSelection`, `find`, `webkitRequestAnimationFrame`, `webkitCancelAnimationFrame`, `fetch`, `btoa`, `atob`, `createImageBitmap`, `scroll`, `scrollTo`, `scrollBy`, `onappinstalled`, `onbeforeinstallprompt`, `crypto`, `ondevicemotion`, `ondeviceorientation`, `ondeviceorientationabsolute`, `indexedDB`, `webkitStorageInfo`, `sessionStorage`, `localStorage`, `chrome`, `visualViewport`, `speechSynthesis`, `webkitRequestFileSystem`, `webkitResolveLocalFileSystemURL`, `openDatabase`, `applicationCache`, `caches`, `whichAnimationEvent`, `animationendEvent`, `infinity`, `SETTING`, `AppView`, `ExtensionOptions`, `ExtensionView`, `WebView`, `iconPath`, `_app`, `_ZOOM_`, `Feed`, `md5`, `$`, `jQuery`, `Search`, `windmill`, `Lethargy`, `alertTimeOut`, `supportApps`, `lethargyX`, `lethargyY`, `iView`, `onModuleResLoaded`, `iEditDelete`, `infinityDrag`, `i`, `array`, `TEMPORARY`, `PERSISTENT`, `addEventListener`, `removeEventListener`, `dispatchEvent`
