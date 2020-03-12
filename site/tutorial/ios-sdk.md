# iOS CML SDK 使用范例

以一个一个小 Demo，讲述 iOS CML SDK 的使用方式，引领轻松入门。
Demo 工程在根目录 “Example” 目录下，打开 “Chameleon.xcworkspace” 文件即可打开工程。

## 工程集成

在你的 Podfile 文件中，添加如下代码（以 Demo 工程为例）：

    platform :ios, '9.0'

    target 'Chameleon_Example' do

        #Chameleon
        pod 'Chameleon', :path => '../Chameleon/'

        #写入weex依赖。
        pod 'WeexSDK', '~> 0.19.0.2'

        #写入react_native依赖。
        pod 'React', :path => '../Chameleon/react_native/node_modules/react-native', :subspecs => [
        'Core',
        'CxxBridge', # 如果RN版本 >= 0.45则加入此行
        'DevSupport', # 如果RN版本 >= 0.43，则需要加入此行才能开启开发者菜单
        'RCTText',
        'RCTNetwork',
        'RCTWebSocket', # 这个模块是用于调试功能的
        ]

        pod 'yoga', :path => '../Chameleon/react_native/node_modules/react-native/ReactCommon/yoga'
        pod 'DoubleConversion', :podspec => '../Chameleon/react_native/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
        pod 'glog', :podspec => '../Chameleon/react_native/node_modules/react-native/third-party-podspecs/GLog.podspec'
        pod 'Folly', :podspec => '../Chameleon/react_native/node_modules/react-native/third-party-podspecs/Folly.podspec'

    end

将 podfile 保存，并运行 pod install。

## 工程中使用

### 初始化变色龙环境

在 appdelegate.m 中的 appDidFinishLaunchingWithOptions 方法中添加:

//初始化 SDK 实例
[CMLSDKEngine initSDKEnvironment];
//设置渲染引擎为 weex
[CMLEnvironmentManage chameleon].serviceType = CMLServiceTypeWeex;

如果需要使用预加载的功能，则：

    //设置预加载的链接地址
    [CMLEnvironmentManage chameleon].weexService.config.prefetchContents = @[@"http%3A%2F%2F172.22.139.32%3A8000%2Fweex%2Fchameleon-bridge.js%3Ft%3D1546502643623"];
    //启动预加载
    [[CMLEnvironmentManage chameleon].weexService setupPrefetch];

- 在 `[CMLEnvironmentManage chameleon].weexService.config` 实例中可以看到更多的设置选项。

### 使用

#### 实例化一个 Weex 渲染页面

以 Demo 为例：

    CMLWeexRenderPage *weexDemo = [[CMLWeexRenderPage alloc] initWithLoadUrl:encodeUrl];
    weexDemo.service = [CMLEnvironmentManage chameleon].weexService;
    [self.navigationController pushViewController:weexDemo animated:YES];

#### 实例化一个 ReactNative 渲染页面

ReactNative 的渲染容器待完善

#### 添加一个自己的 Module

我们以 CMLStorageModule 为例

    #import <Foundation/Foundation.h>
    #import "CMLModuleProtocol.h"

    //实现“CMLModuleProtocol.h”
    @interface CMLStorageModule : NSObject<CMLModuleProtocol>

    @property (nonatomic, weak) CMLInstance *cmlInstance;

    @end

##### 在实现文件中

    #import "CMLStorageModule.h"
    #import "CMLUtility.h"
    #import "CMLConstants.h"

    @implementation CMLStorageModule
    @synthesize cmlInstance;

    //使用 CML_EXPORT_METHOD 导出方法以供JS所调用。
    CML_EXPORT_METHOD(@selector(setStorage:callBack:))

    - (void)setStorage:(NSDictionary *)parms callBack:(CMLMoudleCallBack)callback{

        NSString *key = parms[@"key"];
        NSString *value = parms[@"value"];
        if (!key || key.length <= 0 || !value || value.length <=0) {
            return;
        }
        NSUserDefaults *ud = [NSUserDefaults standardUserDefaults];
        [ud setValue:value forKey:key];
        [ud synchronize];

        if (callback) {
            NSDictionary *result = @{@"errno": @"0", @"msg": @""};
            if(callback) callback(result);
        }
    }
    @end
