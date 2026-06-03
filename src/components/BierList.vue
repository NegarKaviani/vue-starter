<template>
  <div>
    <div class="filter">
      <label for="filter">Filter by Availability: </label>
      <select v-model="selectedType" id="filter">
        <option value="">All</option>
        <option value="available">Available</option>
        <option value="sold_out">Not Available</option>
      </select>
    </div>

    <div class="bier-list">
      <BierCard v-for="bier in filteredbiers" :key="bier.id" :bier="bier" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BierCard from './bierCard.vue';

const props = defineProps({
  biers: {
    type: Array,
    required: true,
  },
});

const selectedType = ref('');

// Compute the filtered list based on selectedType
const filteredbiers = computed(() => {
  if (!selectedType.value) {
    return props.biers; // If no filter is selected, return all biers
  }

  if (selectedType.value === 'available') {
    return props.biers.filter(bier => bier.state === 'available'); // Filter by available
  }

  if (selectedType.value === 'sold_out') {
    return props.biers.filter(bier => bier.state === 'sold_out'); // Filter by sold out
  }

  return props.biers;
});
</script>

<style scoped>
.filter {
  width: 100%;
  margin: 20px 0;
}

select {
  padding: 8px;
  margin-left: 10px;
  border-radius: 6px;
  cursor: pointer;
}

.bier-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
