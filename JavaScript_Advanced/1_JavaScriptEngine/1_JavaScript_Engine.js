/*
 * @Author: zxb
 * @Date: 2022-04-18 11:50:40
 * @LastEditTime: 2022-04-18 11:52:59
 * @LastEditors: zxb
 * @Description: 分析 JavaScript Engine 语法分词器
 * @FilePath: /JavaScript_Advanced/1_JavaScript_Engine.js
 */

function jsengine(code) {
  return code.split(/\s+/)
}

// 使用分词器对代码进行分词
const s = jsengine('var a = 5')

console.log('s', s) // s [ 'var', 'a', '=', '5' ]
