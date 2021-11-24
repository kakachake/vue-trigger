import rgbcolor from 'rgb-color'

export const getType = (o: any): string => {
  const s = Object.prototype.toString.call(o)
  const match = s.match(/\[object (.*?)\]/)
  return match && match.length ? match[1].toLowerCase() : 'null'
}

export function decimalsLength(number: number) {
  if (Math.floor(number.valueOf()) === number.valueOf()) return 0
  return number.toString().split('.')[1].length || 0
}

export function getTopHeight(el: HTMLElement) {
  let { top, height } = el.getBoundingClientRect()
  top = top + window.scrollY
  return {
    top,
    height
  }
}
// Judge the MapValue type
/***
 * params: val
 * return: {
 *  type: MapValue Type,
 *  val: Format Value
 * }
 */
export function getMapTypeAndValue(val: string) {
  // number
  if (!isNaN(Number(val))) {
    return {
      type: 'number',
      val: +val
    }
  } else {
    const color = rgbcolor(val)
    // 'isValid()' is true when the parsing was a success
    if (color.isValid()) {
      return {
        type: 'color',
        val: color.hex()
      }
    }
  }
  // unknown
  return {
    type: 'unknown',
    val
  }
}

/**
 * 根据选择器查找元素
 * @param selector <String> 选择器
 * @param context <DOM> 查询上下文
 * @return 返回查找到的元素
 */
export function getEl(selector: string, context?: Document): HTMLElement | HTMLCollectionOf<Element> | null {
  context = context || document
  if (selector.charAt(0) === '#')
    //通过id查找
    return context.getElementById(selector.slice(1))
  if (selector.charAt(0) === '.') return context.getElementsByClassName(selector.slice(1))
  else return context.getElementsByTagName(selector)
}

export class Throttle {
  /**
   *
   * @param fn
   * @param awit
   */
  static use(fn: Function, awit: number = 1000) {
    //定时器
    let timer: NodeJS.Timeout | null
    return (...args: any) => {
      if (!timer) {
        fn.apply(this, args)
        timer = setTimeout(() => {
          timer && clearTimeout(timer)
          timer = null
        }, awit)
      }
    }
  }
}

export class Debounced {
  /**
   *
   * @param fn 要执行的函数
   * @param awit  时间
   * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
   */
  static use(fn: Function, awit: number = 1000, immediate: boolean = false) {
    let timer: NodeJS.Timeout | null
    return (...args: any) => {
      if (timer) clearInterval(timer)
      if (immediate) {
        if (!timer) fn.apply(this, args)
        timer = setTimeout(function () {
          timer = null
        }, awit)
      } else {
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, awit)
      }
    }
  }
}
