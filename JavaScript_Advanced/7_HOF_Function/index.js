/*
 * @Author: zxb
 * @Date: 2022-05-12 15:53:11
 * @LastEditTime: 2022-05-12 15:58:47
 * @LastEditors: zxb
 * @Description: 高阶函数
 * @FilePath: /JavaScript_Advanced/7_HOF_Function/index.js
 */

// 高阶函数
// 闭包
// 词法作用域
const multiNumByBase = (base) => {
  return function (num) {
    return base * num
  }
}

const baseFn = multiNumByBase(2)

console.log(baseFn(4)) // 8
console.log(baseFn(5)) // 10

const multiTen = multiNumByBase(10)
console.log(multiTen(2)) // 20
console.log(multiTen(3)) // 30

const multiNum = (num1) => (num2) => num1 * num2

const multiNum2 = multiNum(2)
console.log(multiNum2(3)) // 6
console.log(multiNum2(5)) // 10

console.log(multiNum(2)(4)) // 8
