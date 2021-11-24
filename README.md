# vue-trigger
![GitHub Stars](https://img.shields.io/github/stars/kakachake/vue-trigger)

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
          '0...3': 5,
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

