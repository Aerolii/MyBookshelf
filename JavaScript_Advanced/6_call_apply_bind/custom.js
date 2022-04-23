/*
 * @Author: zxb
 * @Date: 2022-04-22 10:05:32
 * @LastEditTime: 2022-04-22 10:49:00
 * @LastEditors: zxb
 * @Description: 自定义
 * @FilePath: /JavaScript_Advanced/6_call_apply_bind/custom.js
 */

Function.prototype.customCall = function (context) {
  context = context ? Object(context) : window

  context.called = this

  console.log(this.length)

  const args = []

  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  // console.log(this)
  // const strFn = 'context.called(' + args + ')'

  // const r = eval(strFn)
  const r = context.called(args)

  delete context.called

  return r
}

function print(arg) {
  console.log(arg)
}

const obj = {
  name: '123'
}

print.customCall(obj, obj.name)
