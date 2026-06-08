<template>
  <div class="product-list-container">
    <div class="filter">
      <label for="filter">Filter by Availability: </label>
      <select v-model="selectedType" id="filter">
        <option value="">All</option>
        <option value="available">Available</option>
        <option value="sold_out">Not Available</option>
      </select>
    </div>

    <div class="product-list">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCard from './productCard.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const selectedType = ref('');

// Compute the filtered list based on selectedType
const filteredProducts = computed(() => {
  if (!selectedType.value) {
    return props.products; // If no filter is selected, return all products
  }

  if (selectedType.value === 'available') {
    return props.products.filter(product => product.state === 'available'); // Filter by available
  }

  if (selectedType.value === 'sold_out') {
    return props.products.filter(product => product.state === 'sold_out'); // Filter by sold out
  }

  return props.products; // Default case, return all products 
});
</script>

<style scoped>
.product-list-container {
  width: 85%;
  margin: 0 auto;
}

.filter {
  width: 100%;
  margin: 20px 12px;
}

select {
  padding: 8px;
  margin-left: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.product-list {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
