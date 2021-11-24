import bind from './bind'
import stringRandom from 'string-random'
import { TgElement, TgElementConfig, TriggerEles } from './type'
import { DirectiveBinding } from 'vue/types/options'
import observer from './observer'
import { Debounced, getEl, getType, Throttle } from './util'
import { formatValues } from './format'
import { parseAttr, parseValue } from './parse'

let triggerActiveNames: HTMLElement[] = []
let triEles: Map<HTMLElement, TgElement> = new Map()

const ob = observer((entries) => {
  entries.forEach((entry) => {
    let { target } = entry
    // let triName = target.getAttribute('data-trigger-name') as string
    if (entry.isIntersecting) {
      triggerActiveNames.push(target as HTMLElement)
    } else {
      // Remove element from array if not intersecting
      triggerActiveNames = triggerActiveNames.filter(function (el) {
        return el !== target
      })
    }
  })
})

const setEventListeners = () => {
  window.addEventListener('scroll', (e) => {
    triggerActiveNames.forEach((el) => {
      const triggerEle = triEles.get(el)
      parseValue(triggerEle as TgElement)
    })
  })
  window.addEventListener(
    'resize',
    Debounced.use(() => {
      triEles.forEach((el) => {
        parseAttr(el as TgElement)
        parseValue(el as TgElement)
      })
    }, 200)
  )
}

export default {
  install(app: any) {
    app.config.globalProperties.$trigger = {
      bind: triggerBind,
      destroy: triggerDestroy
    }
    app.directive('trigger', {
      mounted: (el: HTMLElement, binding: DirectiveBinding) => {
        let config = binding.value
        triggerBind(el, config)
      },
      beforeUnmount: (el: HTMLElement) => {
        triggerDestroy(el)
      }
    })
    setEventListeners()
  }
}

const triggerBind = (el: HTMLElement | string, config: TgElementConfig | TgElementConfig[]) => {
  let parseEl: HTMLElement | NodeList
  if (typeof el === 'string') {
    // const temp = getEl(el)
    try {
      const temp = document.querySelectorAll(el)

      if (!temp.length) {
        throw new Error('There is no node named ' + el)
      } else {
        parseEl = temp
      }
    } catch (e: any) {
      throw new Error(e)
    }
  } else {
    parseEl = el
  }

  // 如果传来的配置为对象，将其封装为数组
  if (getType(config) === 'object') {
    config = [config as TgElementConfig]
  }

  //对配置文件进行预处理
  config = (config as Array<TgElementConfig>).map((item: TgElementConfig) => {
    return formatValues(item)
  }) as TgElementConfig[]

  if (getType(parseEl) === 'nodelist') {
    Array.from(parseEl as NodeList).forEach((el) => {
      generTgEle(el as HTMLElement, config as TgElementConfig[])
    })
  } else {
    generTgEle(parseEl as HTMLElement, config)
  }
  //生成tgElement对象，并缓存
  function generTgEle(el: HTMLElement, config: TgElementConfig[]) {
    // let tgElement: TgElement = { $el: el, config }
    let tgElement: TgElement = { $el: el, top: 0, height: 0, config }
    let name = stringRandom(16, { numbers: false })
    triEles.set(el, tgElement)

    //绑定IntersectionObserver事件
    bind(ob, el, name)
    //初始化属性
    parseAttr(triEles.get(el) as TgElement)
    parseValue(tgElement as TgElement)
  }
}

const triggerDestroy = (el: HTMLElement | string) => {
  let parseEl: HTMLElement | NodeList
  if (typeof el === 'string') {
    // const temp = getEl(el)
    try {
      const temp = document.querySelectorAll(el)
      if (!temp.length) {
        console.error(new Error('There is no node named ' + el))
        return
      } else {
        parseEl = temp
      }
    } catch (e: any) {
      throw new Error(e)
    }
  } else {
    parseEl = el
  }
  if (getType(parseEl) === 'nodelist') {
    Array.from(parseEl as NodeList).forEach((el) => {
      triEles.delete(el as HTMLElement)
    })
  } else {
    triEles.delete(parseEl as HTMLElement)
  }
}
