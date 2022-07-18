module.exports = {
  // 停止在父级目录中寻找
  root: true,
  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
    // Node.js 全局变量和 Node.js 作用域
    node: true,
    // 启用 ES2021 语法
    es2021: true,
  },
  //此项是用来指定eslint解析器的，解析器必须符合规则
  parser: 'vue-eslint-parser',

  // 此项是用来配置(拓展)标准的js风格
  extends: [
    // 启动 eslint 推荐的规则
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],

  //此项是用来指定javaScript语言类型和风格，
  parserOptions: {
    // sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    sourceType: 'module',
    //支持 ES2012 语法
    ecmaVersion: 12,
    // 此项是用来指定eslint解析器，与上面雷同
    parser: '@typescript-eslint/parser',
    // 额外的拓展
    ecmaFeatures: {
      // 开启jsx语法格式支持
      jsx: true,
    },
  },

  // 此项是用来提供插件的
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],

  // 自定义一些规则
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    // 出现 console 警告
    'no-console': 'warn',
    // 出现 debugger 警告
    'no-debugger': 'warn',
    // 出现 var 警告
    'no-var': 'warn',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
    // 强制函数块最多允许的的语句数量20
    'max-statements': ['warn', 100],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 3],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['warn', { max: 1 }],
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'warn',
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'warn',
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    // 函数定义时括号前面不要空格，后面要空格
    'space-before-function-paren': 'off',
    // 'space-after-function-paren': 'warn',

    // 强制使用一致的缩进
    indent: 'off',
    // 必须使用全等 '===' 符号
    eqeqeq: 'error',
    // 静止出现分号
    semi: ['warn', 'never'],
  },

  // 脚本在执行期间访问的额外的全局变量，具体参看 https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
