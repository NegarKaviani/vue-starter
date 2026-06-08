<template>
  <div class="flex justify-center w-full">
    <Button
      type="button"
      icon="pi pi-align-justify"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      style="background-color: #374650; border: none;"
    />

    <Menu
      ref="menu"
      id="overlay_menu"
      :model="items"
      :popup="true"
      style="width: 100%; height:100%; position: absolute; left: 0;"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Menu, Button } from "primevue";

const router = useRouter();
const menu = ref();

const items = ref([
  {
    items: [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => router.push('/')
      },
      {
        label: 'Brauerei',
        command: () => router.push('/brauerei')
      },
      {
        label: 'Restaurants',
        command: () => router.push('/restaurants')
      },
      {
        label: 'Ferienwohnungen',
        command: () => router.push('/ferienwohnungen')
      },
      {
        label: 'Genusshotel',
        command: () => router.push('/genusshotel')
      }
    ]
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>