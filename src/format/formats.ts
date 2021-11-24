import { defaultBezier } from '@/ease'
import { CssVariable, TgElementConfig, TgFilter } from '../type'
import { getType } from '../util'
const DEFAULT_TO = 1
const DEFAULT_FROM = 0
const DEFAULT_STEP = 0
const DEFAULT_STEPS = 100
const DEFAULT_EDGE = 'cover'
const DEFAULT_MODE = 'retain'
const DEFAULT_FILTER = {
  mode: '',
  values: []
}

export default {
  to: (value?: number): number => {
    return value !== undefined ? Number(value) : DEFAULT_TO
  },
  from: (value?: number): number => {
    return value !== undefined ? Number(value) : DEFAULT_FROM
  },
  step: (value?: number): number => {
    return value !== undefined ? Number(value) : DEFAULT_STEP
  },

  name: (value: string): CssVariable => {
    if (!value) {
      console.warn(`name is not set`)
    }

    if (value.substring(0, 2) === `--`) {
      return value as CssVariable
    }

    // Auto prepend -- for a CSS variable name
    return `--${value}`
  },

  steps: (value?: number) => {
    let result = value !== undefined ? Number(value) : DEFAULT_STEPS

    // Should never be 0
    if (result === 0) {
      result = DEFAULT_STEPS
    }

    return result
  },

  mapping: (value?: Record<string, string>, config?: TgElementConfig) => {
    if (value === undefined) {
      return value
    }
    let mapping = value
    const keys = Object.keys(mapping)
    if (keys.length) {
      keys.forEach((item) => {
        if (item.indexOf(',') > -1) {
          // Multiple Values
          item.split(',').forEach((key) => {
            mapping[key.trim()] = mapping[item]
          })
          delete mapping[item]
        } else if (item.indexOf('...') > -1) {
          let [from, to] = item
            .split('...')
            .map((val) => {
              return +val
            })
            .sort((a, b) => a - b)
          let i = from
          while (i <= to) {
            i = Number(i.toFixed((config && config.decimals) || 2))
            mapping[i.toString()] = mapping[item]
            i += (config && config.increment) || 0.01
          }

          delete mapping[item]
        }
      })
    }
    return mapping
  },

  filter: (value?: TgFilter) => {
    return value
  },

  edge(value: string) {
    // only supports cover / inset for now
    if (!value || !['cover', 'inset'].includes(value)) {
      value = DEFAULT_EDGE
    }
    return value
  },

  bezier(value?: string | Array<number>) {
    if (value === undefined) {
      return undefined
    }
    if (getType(value) === 'array') {
      if (value.length !== 4) {
        throw new Error('数组长度必须为4！')
      }
    } else if (!defaultBezier.hasOwnProperty(value as string)) {
      throw new Error('该bazier函数默认值不存在！')
    }
    return value || undefined
  },

  mode(value?: string) {
    return value === undefined ? DEFAULT_MODE : value
  }
}
