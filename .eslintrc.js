module.exports = {
  // 设定项目根目录，避免 ESLint 递归查找配置文件
  root: true,
  // 指定运行环境（浏览器、Node.js等），ESLint 会根据这些环境定义相应的全局变量
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // 使用 vue-eslint-parser 解析 .vue 文件，同时指定使用的 JS 解析器（例如 @babel/eslint-parser 或 @typescript-eslint/parser）
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser', // 如果使用 TypeScript，可以改为 '@typescript-eslint/parser'
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 如果使用 JSX，可以启用
    },
  },
  // 扩展一些推荐的配置
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  // 使用的插件列表
  plugins: ['vue'],
  // 声明全局变量，避免 ESLint 报未定义错误
  globals: {
    defineOptions: 'readonly',
  },
  // 自定义 ESLint 规则
  rules: {
    // 确保未定义的变量会报错
    'no-undef': 'error',
    // 可以在此添加其他自定义规则
  },
};
