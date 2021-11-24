import { TgElementConfig, TriggerEles } from '@/type'
import { decimalsLength } from '@/util'
import formats from './formats'

export const formatValues = (config: TgElementConfig): TgElementConfig => {
  for (const key of Object.keys(formats)) {
    let value = config[key]
    config[key] = formats[key](value, config)
  }
  const { to, from, step, steps } = config
  const resOptions = calcOption(from, to, step, steps)
  for (const key of Object.keys(resOptions)) {
    config[key] = resOptions[key]
  }

  return config as TgElementConfig
}

const calcOption = (from: number, to: number, step: number, steps: number) => {
  // 计算范围
  const range = Math.abs(to - from)

  // 计算步长
  const increment = step === 0 ? range / steps : step

  // 计算步数
  const segments = range / increment
  //
  const multiplier = from > to ? -1 : 1

  //计算小数点位数，用于匹配mapping对象
  const decimals = decimalsLength(increment)
  return {
    range,
    increment,
    segments,
    multiplier,
    decimals
  }
}
