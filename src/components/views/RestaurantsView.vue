<template>
  <div class="page-container">
    <BurgerMenu></BurgerMenu>
    <h1 class="page-title">Restaurants</h1>
    <p class="page-description">This is the Restaurants view.</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import BurgerMenu from "@/components/FullWidthMenu.vue";
import ProductList from "@/components/ProductList.vue";
import { demoMockData } from '../../shared/mock/product.mock';

const products = ref(demoMockData);
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<style scoped lang="scss">
.page-container {
  width: 100%;
}

.page-title {
  text-align: center;
  margin: 20px 0;
  font-size: 2rem;
  color: #333;
}

.page-description {
  text-align: center;
  margin: 10px 0;
  font-size: 1.2rem;
  color: #666;
}
</style>
