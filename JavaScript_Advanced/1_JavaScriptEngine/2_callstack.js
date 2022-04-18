/*
 * @Author: zxb
 * @Date: 2022-04-18 16:12:56
 * @LastEditTime: 2022-04-18 16:17:17
 * @LastEditors: zxb
 * @Description: 调用站
 * @FilePath: /JavaScript_Advanced/1_JavaScriptEngine/2_callstack.js
 */

// Memory heap
function substractTwo(num) {
  const a = num - 2
  return a
}

function caculate() {
  const total = 3 + 6
  return substractTwo(total)
}

// Call Stack
caculate()

// interpreter output bytecode
// memory storage
// the function call triggers the call stack

// use compiler optimization
for (let i = 0; i < 10; i++) {
  caculate()
}
