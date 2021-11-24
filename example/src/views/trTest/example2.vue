<template>
  <div class="container" v-trigger="config1" id="parent2" ref="parent2">
    <div class="container_in element" v-trigger="config2">
      <div class="sticky">
        <div class="ele">Hello.</div>
        <div class="ele">World.</div>
      </div>
    </div>
    <div class="container_in element" v-trigger="config2">
      <div class="sticky">
        <div class="ele">Hello.</div>
        <div class="ele">Trigger.</div>
      </div>
    </div>
    <div class="container_in element" v-trigger="config3">
      <div class="sticky">
        <div class="ele">Hello.</div>
        <div class="ele">Trigger.</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
  name: 'example2',
  setup() {
    const parent2 = ref(null)
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
    onMounted(() => {
      // trigger.bind(parent2.value, config1)
      // trigger.bind('.element', config2)
    })
    onBeforeUnmount(() => {})
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
        // steps: 1000,
        // filter: {
        // mode: 'keyframe',
        //   values: []
        // },
        mode: 'smooth',
        // bezier: [0.23, 1.32, 0.32, 2],
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
        // steps: 1000,
        // filter: {
        // mode: 'keyframe',
        //   values: []
        // },
        mode: 'smooth',
        // bezier: [0.23, 1.32, 0.32, 2],
        mapping: {
          0: 'rgb(123, 234, 45)',
          5: '#ffd700',
          10: 'DodgerBlue'
        }
      }
    ]
    const config3 = [
      {
        name: 'size',
        edge: 'cover',
        from: 0,
        to: 10,
        step: 0.1,
        mode: 'smooth',
        mapping: {
          0: 0,
          5: 14
        }
      }
    ]
    return {
      config1,
      config2,
      config3,
      parent2
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
