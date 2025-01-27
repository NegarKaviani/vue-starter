<template>
  <div class="hello-world">
    <h1>Welcome to the Vue-Starter-Project!</h1>
    <p>This project uses Vue3 (<a href="https://vuejs.org/guide/extras/composition-api-faq" target="_blank">
      <strong>Composition API</strong>
    </a>) + Vite</p>
    <p>
      <a href="https://vuejs.org/" target="_blank"><strong>Vue docs</strong></a> /
      <a href="https://primevue.org/" target="_blank"><strong>PrimeVue docs</strong></a>
    </p>
    <Button :severity="n%2 ? 'danger' : 'primary'" @click="increment">Click me!</Button>
    <p v-if="n > 0">You clicked the button {{ n }} time{{ n > 1 ? 's' : '' }}!</p>
  </div>
</template>

<script lang="ts">
import Button from "primevue/button";
import {ref} from "vue";

export default {
  name: "HelloWorld",
  components: {Button},
  setup() {
    const n = ref(0);
    const increment = () => n.value++;
    return {
      n,
      increment
    }
  }
}
</script>

<style lang="scss" scoped>
.hello-world {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>