### cml.createAnimation()

返回一个动画实例 [animation](/api/createAnimation/animation/main.html)。调用实例的方法来描述动画。最后通过实例的 export 方法导出动画数据传递给目标组件的 c-animation 属性。

###参数

|         参数名         |  类型  |   必填   |  默认值   |         说明          |
| :--------------------: | :----: | :------: | :-------: | :-------------------: |
|    object.duration     | number |    否    |    400    | 动画持续时间，单位 ms |
|      object.delay      | number |    否    |     0     | 动画延迟时间，单位 ms |
| object.timingFunction  | string |    否    | 'linear'  |       回调函数        |
| object.transformOrigin | string |    否    | '50% 50%' | 定义变化过程的中心点  |
|       object.cb        | number | function |    无     |       回调函数        |

###timingFunction 的合法值

|      值       |                  说明                  |
| :-----------: | :------------------------------------: |
|   'linear'    |       动画从头到尾的速度是相同的       |
|    'ease'     | 动画以低速开始，然后加快，在结束前变慢 |
|   'ease-in'   |             动画以低速开始             |
| 'ease-in-out' |          动画以低速开始和结束          |
|  'ease-out'   |             动画以低速结束             |

### 返回值

|                         返回值                        |   类型    |   说明   |
| :---------------------------------------------------: | :-------: | :------: |
| [animation](/api/createAnimation/animation/main.html) | animation | 动画实例 |
