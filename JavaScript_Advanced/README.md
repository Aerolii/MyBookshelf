# JavaScript Advanced

JavaScript 高级工程师学习之路。

![图片](https://github.com/Aerolii/MyBookshelf/blob/main/JavaScript_Advanced/images/JavaScript_Engine.svg)

## JavaScript Engine 原理

就如同我们在编辑器中开发代码一样，JavaScript 文件本身不能被终端设备直接识别并执行，因此需要一个`引擎`对代码进行解释并输出终端设备`CPU`可执行的指令。

早期 JavaScript Engine 使用`语法解析器`根据`ECMAScript`标准对 code 进行解析，然后生成`AST`(抽象语法树)，再交由`Interpreter`生成 bytecode（ bytecode 不同于**机器码**，它并不能直接被识别为 CPU 指令）。

而在 Google 开发的 V8 引擎中，为了提高 JavaScript 执行效率，加入了**分析器**（profiler）和**编译器**（compiler）。**解释器**生成的字节码会被 Profiler 分析并交由 Compiler 优化。

### Call Stack & Memory Heap

 Call Stack 主要作用于函数执行过程，处于运行时。Memory Heap 则用于运行时变量、函数、对象数据存储。