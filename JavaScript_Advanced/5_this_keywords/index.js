/*
 * @Author: zxb
 * @Date: 2022-04-21 22:57:27
 * @LastEditTime: 2022-04-21 23:05:11
 * @LastEditors: zxb
 * @Description: this 关键字
 * @FilePath: /JavaScript_Advanced/5_this_keywords/index.js
 */

// this 是引用对象
// this 是函数作为属性的对象
// this 可以时作为对象属性的函数访问该对象成员
// this 可以时函数作为多个对象属性复用

function print() {
  console.log(this.propertyName)
}

const propertyName = 'obj'

const obj1 = {
  propertyName: 'obj1',
  print
}

const obj2 = {
  propertyName: 'obj2',
  print
}

console.log(propertyName) // obj
print() // undefined

obj1.print() // obj1

obj2.print() // obj2
