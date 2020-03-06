#功能介绍
Chameleon iOS SDK 使用 Weex、ReactNative 与 WebView 作为基础渲染引擎，提供了基础的组件功能之外，还支持用户扩展自己的功能组件。

# 集成

##环境要求
Chameleon 最低支持的 iOS deployment target 为：**`iOS 9.0`**
Chameleon 使用`Cocoapods`进行管理，使用`npm`管理`react_native`。

| 组件名       | 依赖版本       | 备注 |
| ------------ | -------------- | ---- |
| Cocoapods    | **`1.3.1`**    | -    |
| npm          | 最新版本即可   | -    |
| WeexSDK      | **`0.19.0.2`** | -    |
| react_native | **`0.57.6`**   | -    |
| react        | **`16.6.1`**   | -    |

##详细集成
当 sdk 下载下来后，首先进入`/chameleon-sdk-iOS/Chamleon/react_native`,并运行`npm install`进行更新。（这也是 react_native 的更新办法。）

接下来我们以 demo 工程为例（要注意工程路径位置,在工程实际配置中需要注意 :path 的内容）。
在 Podfile 中，写入：

    platform :ios, '9.0'

    target 'Chameleon_Example' do

        #Chameleon
        pod 'Chameleon', :path => '../Chamleon/'

        #如果需要Weex，则写入weex依赖。
        pod 'WeexSDK', '~> 0.19.0.2'

        #如果需要react_native，则写入react_native依赖。
        pod 'React', :path => '../Chamleon/react_native/node_modules/react-native', :subspecs => [
        'Core',
        'CxxBridge', # 如果RN版本 >= 0.45则加入此行
        'DevSupport', # 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单
        'RCTText',
        'RCTNetwork',
        'RCTWebSocket', # 这个模块是用于调试功能的
        ]

        pod 'yoga', :path => '../Chamleon/react_native/node_modules/react-native/ReactCommon/yoga'
        pod 'DoubleConversion', :podspec => '../Chamleon/react_native/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
        pod 'glog', :podspec => '../Chamleon/react_native/node_modules/react-native/third-party-podspecs/GLog.podspec'
        pod 'Folly', :podspec => '../Chamleon/react_native/node_modules/react-native/third-party-podspecs/Folly.podspec'

    end

将 podfile 保存，并运行 pod install。

##常见问题

- Multiple commands produce

        Showing All Messages
        :-1: Multiple commands produce 'XXXXX':
        1) Target 'Chameleon_Example' has create directory command with output 'XXXXp'
        2) That command depends on command in Target 'Chameleon_Example': script phase “[CP] Copy Pods Resources”

解决办法：删除 `工程->Build Phrases->[CP] Copy Pods Resources->Output files`下的 copy 路径。

# 功能概览

##项目目录
| 描述 | 作用 |
| --- | --- |
| Chamleon | SDK 源码与依赖文件夹 |
| Example | react_native 依赖 |

### Chamleon/sdk_src

| 目录            | 功能描述                                                           |
| --------------- | ------------------------------------------------------------------ |
| CMLSDKEngine 类 | 初始化 SDK、注册自定义的 module 等功能                             |
| CMLCommon       | Chameleon 抽象层。抽象了基础的渲染页面、缓存、配置、预加载等功能。 |
| CMLReactNative  | 针对 ReactNative 额外配置的部分                                    |
| CMLWeex         | 针对 Weex 额外配置的部分                                           |
| CMLWeb          | 针对 WebView 额外配置的部分                                        |

## 提供功能

### Bundle 预加载

1.  先设置预加载地址

    >     [CMLEnvironmentManage chameleon].weexService.config.prefetchContents = @[@"http%3A%2F%2F172.22.139.32%3A8000%2Fweex%2Fchameleon-bridge.js%3Ft%3D1546502643623"];

1.  开始预加载
    >         [[CMLEnvironmentManage chameleon].weexService setupPrefetch];

###自动降级
当 Bundle 下载失败、渲染出现严重错误时，会自动降级至 H5。
![](../chameleon_client/imgs/downgrade_design_ios.png)
降级设计图

####本地 bundle 降级
当 H5 渲染失败时，倘若设置了默认的本地 bundle，会使用本地 bundle 进行降级。

####主动降级
当渲染出现错误时，FE 可以通过 JSBridge 通知客户端触发降级。

###功能扩展
使用`+ (void)registerModule:(NSString *)moduleName className:(NSString *)className;`注册自己的扩展。

# 使用说明

1.  初始化 SDK

    >     [CMLSDKEngine initSDKEnvironment];

2.  设置渲染引擎类型

    >     [CMLEnvironmentManage chameleon].serviceType = CMLServiceTypeWeex;

3.  设置预加载环境

    >     [CMLEnvironmentManage chameleon].weexService.config.prefetchContents = @[@"http%3A%2F%2F172.22.139.32%3A8000%2Fweex%2Fchameleon-bridge.js%3Ft%3D1546502643623"];

4.  设置预加载
    >     [[CMLEnvironmentManage chameleon].weexService setupPrefetch];

#### 相关链接

- [Module 的使用](/chameleon_client/ios/module.html)
- [预加载和缓存](/chameleon_client/ios/cache.html)
