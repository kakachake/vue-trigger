import { gradientColors } from './color'
import { cubicBezier, defaultBezier, ease } from './ease'
import { Mapping, TgElement, TriggerEles } from './type'
import { decimalsLength, getMapTypeAndValue, getTopHeight, getType } from './util'

export const parseAttr = (triggerEle: TgElement) => {
  const el = triggerEle.$el
  let { top, height } = getTopHeight(el)
  triggerEle.top = top
  triggerEle.height = height
  triggerEle.config.forEach((config) => {
    if (config.follow !== undefined) {
      let { top, height } = getTopHeight(config.follow)
      config.top = top
      config.height = height
    }
  })
}

export const parseValue = (triggerEle: TgElement) => {
  const scrolled = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight
  const el = triggerEle.$el
  const configs = triggerEle.config
  // console.log(name, top, height)

  // 遍历每一个配置项
  configs.forEach((config) => {
    const { from, name, mapping, mode, range, multiplier, decimals } = config
    // console.log(from)

    const percentage = calcPercentage(triggerEle, config, scrolled, clientHeight)
    config.percentage = percentage

    // 计算最终值
    // 废弃 let mappingValue = (from + Math.floor((segments + 1) * percentage) * increment * multiplier).toFixed(decimals)
    let mappingValue = +(from + range * percentage * multiplier).toFixed(decimals)

    let value: string | number = mappingValue
    if (mapping && Object.keys(mapping).length) {
      if (typeof mapping[mappingValue] !== 'undefined') {
        value = mapping[mappingValue]
      } else if (mode === 'smooth') {
        let region = calcKeyFrameRegion(mapping, mappingValue)

        if (region.length) {
          value = calcKeyFrameValue(mapping, mappingValue, region)
        } else {
          return
        }
      } else {
        if (mode === 'exact') {
          el.style.removeProperty(name)
        }
        return
      }
    }

    el.style.setProperty(name, value.toString())
    el.dispatchEvent(
      new CustomEvent('tg', {
        // @ts-ignore
        target: el,
        detail: {
          name,
          value,
          percentage
        }
      })
    )
  })
}

// 计算百分比
const calcPercentage = (triggerEle: TgElement, config: any, scrolled: number, clientHeight: number) => {
  let { edge, follow, bezier } = config
  let { top, height } = follow === undefined ? triggerEle : config

  let percentage =
    edge === 'cover'
      ? Math.min(Math.max((scrolled + clientHeight - top) / (clientHeight + height), 0), 1)
      : Math.min(Math.max((scrolled - top) / (height - clientHeight), 0), 1)

  if (bezier !== undefined) {
    if (getType(bezier) === 'array') {
      let [p1x, p1y, p2x, p2y] = bezier as Array<number>
      percentage = cubicBezier(p1x, p1y, p2x, p2y)(percentage)
    } else {
      percentage = defaultBezier[bezier as string](percentage)
    }
  }
  config.percentage = percentage
  return percentage
}

// Calculate the result value of the keyframe corresponding to the current value
const calcKeyFrameValue = (mapping: Mapping, value: number, region: Array<string>) => {
  const [lkey, rkey] = region
  const lValue = getMapTypeAndValue(mapping[lkey] as string)
  const rValue = getMapTypeAndValue(mapping[rkey] as string)
  const curKeyRange = Math.abs(value - +lkey)
  const percentage = curKeyRange / (+rkey - +lkey)
  // If the value is a color value
  if (rValue.type === 'color' && lValue.type === 'color') {
    // TODO: Link the steps here with user settings……
    const steps = 100
    const graColor = gradientColors(lValue.val, rValue.val, steps)
    const key = (percentage * steps).toFixed(0)
    return graColor[key]
  } else {
    const range = Math.abs(rValue.val - lValue.val)
    const multiplier = lValue.val > rValue.val ? -1 : 1
    return lValue.val + range * percentage * multiplier
  }
}

// 计算当前value在mapping的哪个区间
const calcKeyFrameRegion = (mapping: Mapping, value: number) => {
  if (Object.keys(mapping).length === 1) {
    return []
  } else {
    let lastKey = '',
      currentKey = ''

    for (const key of Object.getOwnPropertyNames(mapping).sort((a, b) => {
      return +a - +b
    })) {
      if (lastKey === null) {
        lastKey = key
        continue
      } else {
        currentKey = key
        if ((value >= +lastKey && value <= +currentKey) || (value >= +currentKey && value <= +lastKey)) {
          return [lastKey, currentKey]
        }
      }
      lastKey = key
    }
  }
  return []
}
