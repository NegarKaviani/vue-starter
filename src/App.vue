<template>
  <main class="vue-main">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
export default {
  name: "App"
}
</script>

<style lang="scss" scoped>
main.vue-main {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 400px) {
    padding: 5px;
  }
}
</style>
