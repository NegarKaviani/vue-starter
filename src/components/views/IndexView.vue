<template style="background-color: #374650;">
  <BurgerMenu></BurgerMenu>
  <!-- Conditionally render BierList after the component has mounted -->
  <BierList v-if="isMounted" :biers="biers" />
  <!-- <p v-if="isMounted">BierList is mounted!</p> -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import BurgerMenu from "@/components/FullWidthMenu.vue";
import BierList from "@/components/BierList.vue";
import { demoMockData } from '../../shared/mock/product.mock';

// Create a reactive variable to store biers
const biers = ref(demoMockData);

// Create a reactive variable to control when the component is mounted
const isMounted = ref(false);

// Lifecycle hook: set isMounted to true once the component has been mounted
onMounted(() => {
  isMounted.value = true;
});
</script>
