/*
 * @Author: zxb
 * @Date: 2022-04-21 09:12:02
 * @LastEditTime: 2022-04-21 09:15:32
 * @LastEditors: zxb
 * @Description:
 * @FilePath: /JavaScript_Advanced/3_const_variable/index.js
 */

const a = 123

const print = () => {
  // ReferenceError: Cannot access 'a' before initialization
  // 可以推断出词法环境是静态的
  console.log(a)

  const a = 321
  console.log(a)
}

print()
