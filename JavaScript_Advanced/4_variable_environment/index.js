/*
 * @Author: zxb
 * @Date: 2022-04-21 11:11:57
 * @LastEditTime: 2022-04-21 11:15:49
 * @LastEditors: zxb
 * @Description: 变量环境
 * @FilePath: /JavaScript_Advanced/3_const_variable/4_variable_environment/index.js
 */

function a() {
  // 无法访问运行时作用域内变量
  var isValied

  console.log('a isValied', isValied)
}

function b() {
  var isValied = true

  console.log('b isValied', isValied)
  a()
}

var isValied = false

console.log('isValied', isValied)

b()

// call stack
// a()
// b()
// anymouse