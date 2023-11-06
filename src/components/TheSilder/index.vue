<template>
  <div class="the-silder">
    <div 
      class="chapter-title"
      v-for="item in chapterList"
      :key="item.name"
      @click="handleClick"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const chapterList: Record<string, any>[] = [
  {
    name: '深入组件',
    children: [
      { name: 'Props', },
      { name: '事件', }
    ]
  },
  {
    name: '逻辑复用',
  },
  {
    name: '内置组件',
  },
  {
    name: '地图'
  }
]

const handleClick = () => {
  router.push({ name: '地图', })
}
</script>

<style lang="scss" scoped>
.the-silder {
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: .2rem;
  width: 100%;
  height: 100%;
  padding: .2rem;
  background-color: #F2F2F2;
  font-size: .16rem;
} 
</style>