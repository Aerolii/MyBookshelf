module.exports = {
  printWidth: 120, // 单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  semi: false, // 是否在语句末尾打印分号
  singleQuote: true, // 是否使用单引号
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  bracketSpacing: true, // 是否在对象属性添加空格
  bracketSameLine: true,
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  htmlWhitespaceSensitivity: 'ignore', // 指定 HTML 文件的全局空白区域敏感度, "ignore" - 空格被认为是不敏感的
  trailingComma: 'none', // 去除对象最末尾元素跟随的逗号
  useTabs: false, // 不使用缩进符，而使用空格
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  proseWrap: 'always', // 当超出print width（上面有这个参数）时就折行
  endOfLine: 'lf', // 换行符使用 lf
  arrowParens: 'avoid'
}
