<template>
  <div class="the-main">
    <aside>
      <TheSilder />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import TheSilder from '@/components/TheSilder/index.vue';
</script>

<style scoped lang="scss">
.the-main {
  display: flex;
  width: 100%;
  height: 100%;

  aside {
    width: 3rem;
    height: 100%;
  }

  main {
    flex: 1;
    background-color: #fff;
  }
}
</style>