# 接口校验语法

> 接口是一系列方法的声明，是一些方法特征的集合，一个接口只有方法的特征没有方法的实现，因此这些方法可以在不同的地方被不同的类实现，而这些实现可以具有不同的行为（功能）进行沟通。

##校验配置
通过配置决定是否开启接口的校验。
`Object、Array、Nullable`这三个类型默认是不支持的，因为我们建议更精确的校验，可以通过配置文件开启这三个类型。
具体参见[多态校验控制的配置](../config.html#多态校验控制)

## 类型说明

** 注意：建议定义类型的时候取值为 Number String Boolean Null Undefined(Void) Object Array Function Date RegExp**

目前 chameleon 接口定义支持简单类型和复合类型。

其中简单类型包括以下类型：

- Number(number)
- String(string)
- Boolean(bool)
- Undefined(void)
- Null

复合类型包括以下类型：

- Function
- Object
- Array
- Date
- RegExp

## 接口语法

接口的使用分两个过程：

1. 定义一个接口。
2. 定义实现接口的类。

### 接口定义

#### 范式:

    interface [接口名称] {
        // 接口中的属性
        [属性名称]: [类型],

        // 接口中的方法
        [方法名称]([传入参数1名称]: [传入参数1类型], [传入参数2名称]: [传入参数2类型], ...): [返回类型]
    }

#### 举例：

    // 一个名为interface1的接口
    interface interface1 {
      // foo1: 传入分别为string和number的两个数据，返回值类型为string值
      foo1(a: string, b: number): string;

      // foo2: 传入分别为string和Callback(上文定义)的两个数据，返回值类型为bool值
      foo2(c: string, d: Callback): Boolean;
    }

### 实现接口（定义类）

#### 范式：

    class [类名称] implaments [接口名称] {

        // 实现接口中的属性
        [属性名称]: [类型]

        // 实现接口中的方法
        [方法名称]([传入参数1名称], [传入参数2名称], ...) {
          return [返回值];
        }
    }

#### 举例：

    // 实现一个名称为Clazz，实现上文定义的interface1接口
    class Clazz implaments interface1 {

        // 实现interface1定义的foo1方法，输入值和输出值要满足定义
        foo1(a, b) {
            return 'hello ' + a + ' : ' + (b + 1);
        }

        // 实现interface1定义的foo2方法，输入值和输出值要满足定义
        foo2(c, d) {
            return 'balabala...';
        }
    }

## 复合类型的定义范式

    type [类型名称] = [类型定义]

不同的复合类型，类型定义也不相同，下面会对三种复合类型做详细说明。

### Function 类型定义

#### 范式:

    type [Function类型名称] = ([传入参数1名称]: [传入参数1类型], [传入参数2名称]: [传入参数2类型], ...) => [返回类型]

#### 举例：

    // 定义一个传参分别为number,string,bool类型的三个参数，返回值为number的函数类型
    type Callback = (a: number, b: string, c: bool) => number;

### Object 类型定义

#### 范式：

    type [Object类型名称] = {
        [属性名称1]: [类型1],
        [属性名称2]: [类型2]
    }

#### 举例：

    // 定义含有a,b,c三个属性的复合类型
    type Scheme = {
        a: string,
        b: bool,
        c: number
    }

### Array 类型定义

#### 范式：

    type [Array类型名称] = [
      [类型1]
    ]

#### 举例：

    // 定义名称为arrayType1的数组类型，数组元素为number类型
    type arrayType1 = [
        number
    ]

### 目前数组的详细校验只能校验数组中的元素是同一种类型，即[1,2,3],而不能校验 [1,2,'this is string'];

- 如果想要校验某个入参或者函数的返回值是一个数组，但是数组中的值得类型不是同一类型
- 或者只想简单的对某个对象进行类型校验，但是对象中具体的 key-value 值不想校验；
  那么在- [项目配置](framework/config.html)开启['Object','Array']直接校验的前提下，可以如下写\*\*

```javascript
interface EntryInterface {
  handleDate(arr: Array, o: Object): Array;
}
```

```javascript
class Method implements EntryInterface {
  let arr = [1,2,3,'str'];
  let obj = {address:'China'}
  handleDate(arr,obj){
    return ['this is str',{name:"jhon"}];
  }
}
```

此时校验就只会校验入参或者返回值得数据类型是否是 Array 或者 Object ，而不会深入校验数组或者对象中的元素；

## 复合类型中的相互嵌套

Function、Object、Array 三种复合类型可以互相嵌套：

    // 定义一个传参分别为number,string,bool类型的三个参数，返回值为number的函数类型
    type Callback = (a: number, b: string, c: bool) => number;

    // 定义名称为arrayType1的数组类型，数组元素为number类型
    type arrayType1 = [
        number
    ]

    // 定义名称为Scheme的，含有Array类型和Function类型属性的Object类型
    type Scheme = {
        a: arrayType1,
        b: Callback,
    }

    // 定义名称为Plan，含有Scheme类型和Callback的属性的Object类型
    type Plan = {
        a: string,
        b: Scheme,
        c: Callback
    }

    // 定义名称为arrayType1类型，元素为Plan类型
    type arrayType1 = [
        Plan
    ]

### Date 类型的定义

如果函数参数或者返回值是 Date 数据类型，那么可以按照下面的方式进行定义；

```javascript
interface EntryInterface {
  handleDate(d: Date): Date;
}
```

```javascript
class Method implements EntryInterface {
  handleDate(d) {
    return new Date();
  }
}
```

## RegExp 类型的定义

如果函数参数或者返回值是 RegExp 数据类型，那么可以按照下面的方式进行定义；

```javascript
interface EntryInterface {
  handleDate(d: RegExp): RegExp;
}
```

```javascript
class Method implements EntryInterface {
  handleDate(r) {
    return new RegExp();
  }
}
```

## Maybe Types : 意味着该值可能是这种类型，但是也可能是 undefined 或者 null

**注意如果要定义 Nullable（?Number）这样的参数，那么该参数的占位符是必须的**

```javascript
interface EntryInterface {
  acceptsMaybeNumber(a: ?Number, b: String, c: Boolean): Undefined;
}
```

```javascript
class Method implements EntryInterface {
  acceptsMaybeNumber(a, b, c) {}
}
```

```javascript
acceptsMaybeNumber(42, 'str', true); // Works!
acceptsMaybeNumber(undefined, 'str', true); // Works!
acceptsMaybeNumber(null, 'str', true); // Works!
acceptsMaybeNumber('42', 'str', true); // Error!

//**注意如果要定义Nullable（?Number）这样的参数，那么该参数的占位符是必须的,在校验入参的时候，会按照interface中定义的顺序，有序的校验传入的参数是否和interface中定义的数据参数类型一直，(?Number)这种定义的校验其实只是说明这个参数可以是 null  undefined number类型的数据，但是是必须传递的**
acceptsMaybeNumber('str', true); // Error!
```
