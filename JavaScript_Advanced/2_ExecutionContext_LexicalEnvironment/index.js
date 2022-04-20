/*
 * @Author: zxb
 * @Date: 2022-04-20 17:15:06
 * @LastEditTime: 2022-04-20 17:18:34
 * @LastEditors: zxb
 * @Description: 执行上下文对象
 * @Description: 词法环境
 * @FilePath: /JavaScript_Advanced/2_ExecutionContext_LexicalEnvironment/index.js
 */

var favoriteFood = 'grapes'

var foodThoughts = function () {
  // 创建执行上下文
  // 解析词法环境
  // 初始化变量、函数
  // runtime
  console.log('Original favorite food: ' + favoriteFood) // undefined

  var favoriteFood = 'sushi'

  console.log('New favorite food: ' + favoriteFood) // sushi
}

foodThoughts()
