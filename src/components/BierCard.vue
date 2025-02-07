<template>
  <div class="bier-card">
    <img :src="bier.image.source" :alt="bier.descriptionShort" />
    <h3>{{ bier.name }}</h3>
    <p><strong>Avaliability:</strong> {{ bier.available }}%</p>
    <p><strong>Price:</strong> {{ bier.price }}%</p>
    <p>{{ bier.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  bier: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.bier-card {
  width: 400px; /* Default width for larger screens */
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease; /* Smooth hover effect */
}

.bier-card img {
  width: 100%;
  border-radius: 4px;
}

h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

p {
  font-size: 1rem;
  color: #666;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .bier-card {
    width: 180px; /* Smaller width on tablets */
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .bier-card {
    width: 160px; /* Even smaller width on smaller devices */
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .bier-card {
    width: 100%; /* Smallest width on mobile */
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
  }
}

/* Hover effect */
.bier-card:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}
</style>