### animation.step(object Object)

表示一个动画动作的结束

###参数

|     参数名      |  类型  |   必填   |  默认值   |         说明          |
| :-------------: | :----: | :------: | :-------: | :-------------------: |
|    duration     | number |    否    |    400    | 动画持续时间，单位 ms |
|      delay      | number |    否    |     0     | 动画延迟时间，单位 ms |
| transformOrigin | string |    否    | '50% 50%' | 定义变化过程的中心点  |
|       cb        | number | function |    无     |       回调函数        |

###timingFunction 的合法值

|      值       |                  说明                  |
| :-----------: | :------------------------------------: |
|   'linear'    |       动画从头到尾的速度是相同的       |
|    'ease'     | 动画以低速开始，然后加快，在结束前变慢 |
|   'ease-in'   |             动画以低速开始             |
| 'ease-in-out' |          动画以低速开始和结束          |
|  'ease-out'   |             动画以低速结束             |

返回值

### 返回值

|                         返回值                        |   类型    |   说明   |
| :---------------------------------------------------: | :-------: | :------: |
| [animation](/api/createAnimation/animation/main.html) | animation | 动画实例 |
