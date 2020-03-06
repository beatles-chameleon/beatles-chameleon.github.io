### cml.createInnerAudioContext()

创建一个`audio`上下文 `innerAudioContext`对象；

`chameleon-api@0.5.0`之后版本开始支持；

#### `innerAudioContext`属性

| 属性        | 描述                         | 备注 |
| ----------- | ---------------------------- | ---- |
| src         | 用于播放的音频资源地址       |      |
| autoplay    | 用于控制是否自动开始播放     |      |
| loop        | 用于控制是否重复播放音频     |      |
| volume      | 音量，范围 0~1,默认值为 1    |      |
| duration    | 当前音频的长度 (单位:s)      | 只读 |
| currentTime | 当前音频的播放位置 (单位:s)  | 只读 |
| paused      | 当前音频是否暂停或者停止状态 | 只读 |

#### `innerAudioContext`方法

##### innerAudioContext.play()

播放

##### innerAudioContext.pause()

暂停

##### innerAudioContext.stop()

停止，停止后的音频在播放会从头播放

##### innerAudioContext.seek(number position)

跳转到指定位置

##### innerAudioContext.destroy()

销毁当前音频实例

##### innerAudioContext.onCanplay()

监听音频进入可以播放状态的事件。但不保证后面可以流畅播放

##### InnerAudioContext.offCanplay(function callback)

取消监听音频进入可以播放状态的事件

##### InnerAudioContext.onPlay(function callback)

监听音频播放事件

##### InnerAudioContext.offPlay(function callback)

取消监听音频播放事件

##### InnerAudioContext.onPause(function callback)

监听音频暂停事件

##### InnerAudioContext.offPause(function callback)

取消监听音频暂停事件

##### InnerAudioContext.onStop(function callback)

监听音频停止事件

##### InnerAudioContext.offStop(function callback)

取消监听音频停止事件

##### InnerAudioContext.onEnded(function callback)

监听音频自然播放至结束的事件

##### InnerAudioContext.offEnded(function callback)

取消监听音频自然播放至结束的事件

##### InnerAudioContext.onTimeUpdate(function callback)

监听音频播放进度更新事件

##### InnerAudioContext.offTimeUpdate(function callback)

取消监听音频播放进度更新事件

##### InnerAudioContext.onError(function callback)

监听音频播放错误事件

##### InnerAudioContext.offError(function callback)

取消监听音频播放错误事件

##### InnerAudioContext.onSeeking(function callback)

监听音频进行跳转操作的事件

##### InnerAudioContext.offSeeking(function callback)

取消监听音频进行跳转操作的事件

##### InnerAudioContext.onSeeked(function callback)

监听音频完成跳转操作的事件

##### InnerAudioContext.offSeeked(function callback)

取消监听音频完成跳转操作的事件
