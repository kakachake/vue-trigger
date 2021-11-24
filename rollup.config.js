import requireContext from 'rollup-plugin-require-context2'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
const isDev = process.env.NODE_ENV === 'develop'
console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV === 'develop')

export default {
  input: 'src/index.ts', // 打包入口
  output: {
    // 打包出口
    // file: isDev ? './example/src/trigger/index.js' : './dist/index.js', // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    dir: isDev ? './example/src/trigger' : './dist/',
    format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: 'trigger'
    // sourceMap: true
  },
  plugins: [
    // 打包插件
    requireContext(),
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    // uglify(), //压缩
    babel({
      exclude: 'node_modules/**' // 只转译我们的源代码
    })
  ]
}
