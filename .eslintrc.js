const path = require('path')
const resolve = (_path) => path.resolve(__dirname, _path)
const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']
// const tsConfig = require('./tsconfig.eslint.json')

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser', // 配置ts解析器
  parserOptions: {
    project: resolve('./tsconfig.json'),
    tsconfigRootDir: resolve('./'),
    sourceType: 'module'
  },
  files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  plugins: ['prettier'],
  rules: {
    indent: ['error', 2],
    'no-unused-vars': 'error',
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],
    'no-console': 'off'
  }
  // ignorePatterns: tsConfig.exclude
}
