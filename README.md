# vue-trigger
[![npm version](https://img.shields.io/npm/v/vue-trigger)]([vue-trigger - npm (npmjs.com)](https://www.npmjs.com/package/vue-trigger))
[![npm downloads](https://img.shields.io/npm/dm/vue-trigger)](https://www.npmjs.com/package/vue-trigger)
![GitHub Stars](https://img.shields.io/github/stars/kakachake/vue-trigger)
![Github Forks](https://img.shields.io/github/forks/kakachake/vue-trigger)
![License](https://img.shields.io/github/license/kakachake/vue-trigger)

## 介绍

一个基于vue3.0的用于创建滚动动画的库

## 致谢

该项目基于[TriggerJs](https://github.com/triggerjs/trigger)进行开发2

## 使用

1.安装

```
npm i vue-trigger --save
```

2.使用

```javascript
// 引入
import { createApp } from 'vue'
import App from './App.vue'
import trigger from 'vue-trigger'

createApp(App).use(trigger).mount('#app')
```

```vue
// 指令方式
<template>
  <div class="container" v-trigger="config_p" id="parent" ref="parent">
    <div class="container_in element" v-trigger="config_c">
      <div class="sticky">
        <div class="ele">Hello.</div>
        <div class="ele">World.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
  setup() {
    // 创建配置文件
    const config_p = [
      {
        name: 'blur',
        edge: 'inset',
        from: 0,
        to: 10,
        steps: 1000,
        mode: 'smooth',
        mapping: {
          '0...3': 5,
          '6...7': 1,
          '8...10': 0
        }
      }
    ]
    const config_c = [
      {
        name: 'opacity',
        edge: 'inset',
        from: 0.9,
        to: 1,
        bezier: 'easeInOut'
      },
      {
        name: 'size',
        edge: 'inset',
        from: 0,
        to: 10,
        mode: 'smooth',
        mapping: {
          '0...4': 3,
          '5...8': 10,
          '9...10': 12
        }
      },
      {
        name: 'color',
        edge: 'inset',
        from: 0,
        to: 10,
        mode: 'smooth',
        mapping: {
          0: 'rgb(123, 234, 45)',
          5: '#ffd700',
          10: 'DodgerBlue'
        }
      }
    ]
    return {
      config_p,
      config_c
    }
  }
}
</script>

<style>
:root {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 100 !important;
  --blur: 0;
  --opacity: 1;
  --color: #fff;
}

body {
  padding: 0;
  margin: 0;
}

.container {
  height: 300vh;
}
.container_in {
  height: 300vh;
}

.sticky {
  font-size: 10rem;
  letter-spacing: -0.03em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: sticky;
  top: 0;
  filter: blur(calc(var(--blur) * 1px));
  font-size: calc(var(--size) * 1rem);
  transition: all 0.2s;
  color: var(--color);
}

span {
  opacity: var(--opacity);
}
</style>

```

```vue
// js绑定方式
<template>
  <div class="container" id="parent" ref="parent">
    <div class="container_in elm">
      <div class="sticky">
        <div class="ele">Hello.</div>
        <div class="ele">World.</div>
      </div>
    </div>
    <div class="container_in elm">
      <div class="sticky">
        <div class="ele">Hello.</div>
        <div class="ele">Trigger.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted, onBeforeUnmount } from 'vue'
export default {
  name: 'example1',
  setup() {
    const { appContext } = getCurrentInstance()
    // 获取trigger实例
    const trigger = appContext.config.globalProperties.$trigger
    
    // 获取dom元素
    const parent = ref(null)
    
    //创建配置文件
    const config1 = [
      {
        name: 'blur',
        edge: 'inset',
        from: 0,
        to: 10,
        steps: 1000,
        mode: 'smooth',
        mapping: {
          // 多种映射方式
          '0,1,2,3': 5,
          '6...7': 1,
          '8...10': 0
        }
      }
    ]
    const config2 = [
      {
        name: 'opacity',
        edge: 'inset',
        from: 0.9,
        to: 1,
        bezier: 'easeInOut'
      },
      {
        name: 'size',
        edge: 'inset',
        from: 0,
        to: 10,
        mode: 'smooth',
        mapping: {
          '0...4': 3,
          '5...8': 10,
          '9...10': 12
        }
      },
      {
        name: 'color',
        edge: 'inset',
        from: 0,
        to: 10,
        mode: 'smooth',
        mapping: {
          0: 'rgb(123, 234, 45)',
          5: '#ffd700',
          10: 'DodgerBlue'
        }
      }
    ]
    onMounted(() => {
      // 绑定trigger事件
      trigger.bind(parent.value, config1)
      trigger.bind('.elm', config2)
    })
    onBeforeUnmount(() => {
      // 销毁trigger事件
      trigger.destroy(parent.value)
      trigger.destroy('.elm')
    })
    return {
      parent
    }
  }
}
</script>

<style>
:root {
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 100 !important;
  --blur: 0;
  --opacity: 1;
  --color: '';
}

body {
  padding: 0;
  margin: 0;
}

.container {
  height: 300vh;
}
.container_in {
  height: 300vh;
}

.sticky {
  font-size: 10rem;
  letter-spacing: -0.03em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: sticky;
  top: 0;
  filter: blur(calc(var(--blur) * 1px));
  font-size: calc(var(--size) * 1rem);
  transition: all 0.2s;
  color: var(--color);
}

span {
  opacity: var(--opacity);
}
</style>

```

## 配置

接收的为一个配置对象或数组，数组包含多个对象

| 属性名称 | 类型   | 默认值  | 简介                                                         |
| -------- | ------ | ------- | ------------------------------------------------------------ |
| `name`   | String | -       | 接收滚动值的 CSS 变量名称                                    |
| `from`   | Number | `0`     | 起始值                                                       |
| `to`     | Number | `1`     | 终点值                                                       |
| `steps`  | Number | `100`   | 从 `from` 至 `to` 之间触发多少次                             |
| `step`   | Number | `0`     | 每次递加的数值，如果此值不为 `0`，则会忽略 `steps` 的设置。  |
| `map`    | Object | null    | 将一个值映射至另一个值。格式: 见上述使用示例                 |
| `edge`   | String | cover   | 计算滚动值的起始点与结束点。`cover` 代表画面外至画面外，即在元素从底部进入画面时开始计算，从顶部完整离开画面时结束；`inset` 代表当元素的顶部触及页面的顶部时开始计算，元素的底部触及页面的底部时结束。以下将有图解说明。 |
| mode     | String | default | 当map映射存在间断时，设置`smooth`将采用平滑的方式从两个mapvalue间过渡，支持数值型和颜色，见上述示例 |

## 方法

**trigger.bind(el, config[])**

用于绑定trigger事件

params:

- el: 必须。指定一个或多个匹配元素的 CSS 选择器。 可以使用它们的 id, 类, 类型, 属性, 属性值等来选取元素。
- config:必须。配置对象或多个配置对象组成的数组集合，配置项如上表

```javascript
// 示例
import { getCurrentInstance} from 'vue'
const { appContext } = getCurrentInstance()
//………………
// 获取trigger实例
trigger.bind('.elm', config)
```

**trigger.destroy(el, config[])**

params:

- el: 必须。指定一个或多个匹配元素的 CSS 选择器。 可以使用它们的 id, 类, 类型, 属性, 属性值等来选取元素。

用于在合适的时间销毁事件，如onMounted事件发生

```javascript
// 示例
import { getCurrentInstance} from 'vue'
const { appContext } = getCurrentInstance()
//………………
// 获取trigger实例
const trigger = appContext.config.globalProperties.$trigger
trigger.destroy('.elm')
```

**注：使用指令方式不需要手动销毁**

## 授权协议

vue-trigger 使用 [MIT 授权](LICENSE).

