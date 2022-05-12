# JavaScript Advanced

JavaScript 高级工程师学习之路。

![图片](https://github.com/Aerolii/MyBookshelf/blob/main/JavaScript_Advanced/images/JavaScript_Engine.svg)

## JavaScript Engine 原理

就如同我们在编辑器中开发代码一样，JavaScript 文件本身不能被终端设备直接识别并执行，因此需要一个`引擎`对代码进行解释并输出终端设备`CPU`可执行的指令。

早期 JavaScript Engine 使用`语法解析器`根据`ECMAScript`标准对 code 进行解析，然后生成`AST`(抽象语法树)，再交由`Interpreter`生成 bytecode（ bytecode 不同于**机器码**，它并不能直接被识别为 CPU 指令）。

而在 Google 开发的 V8 引擎中，为了提高 JavaScript 执行效率，加入了**分析器**（profiler）和**编译器**（compiler）。**解释器**生成的字节码会被 Profiler 分析并交由 Compiler 优化。

### Call Stack & Memory Heap

 Call Stack 主要作用于函数执行过程，处于运行时。Memory Heap 则用于运行时变量、函数、对象数据存储。
 
## 执行上下文 & 词法环境

在浏览器中会创建一个全局执行上下文对象 `window`，在 Node 环境中，全局执行上下文对象为 `global`。每当函数调用时，都会执行 **创建执行上下文对象 -> 执行** 这一过程。

### 执行上下文对象（Execution Context)

执行上下文对象在创建阶段会根据词法环境生成。我们可以理解为**执行上下文对象**是动态生成的，而**词法环境**是静态的（代码块所处环境在创建时就已经固定）。

在创建执行上下文对象，即**解析->编译**这一过程中间，会对使用`var`、`function`声明的变量或函数进行**提升**。使用`var`声明的变量初始化为`undefined`（并没有进行初始化赋值，知识创建变量标识）。函数声明则作为整体存储并且会覆盖**同名函数**。

### 词法环境（Lexical Environment）

**词法环境**是指，变量或函数所处环境，在创建时就已经确定，其决定了运行时变量或函数可访问的**词法作用域**。在运行时，由于使用`Call Stack`结构调度执行，因此，最歪出词法环境即全局执行上下文对象被压入栈底，函数调用时被逐一推入栈中，然后重新创建执行上下文并执行。函数内部作用域（即函数内部变量、函数所处词法环境）中声明的变量、函数会在运行时重新绑定到执行上下文，此时的执行上下文对象指向函数调用者。

## IIFE

IIFE 即立即执行函数。

## this

> In javascript our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope).

### == 和 ===

== 比较值，=== 比较值和类型

### TypeScript

TypeScript 主要表现为静态类型检查。通过静态类型检查从而减少运行时错误，但更好的方式应该是通过测试（单元测试）覆盖，从而减少运行时错误。