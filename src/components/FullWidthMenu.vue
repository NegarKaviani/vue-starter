
<template>
  <div class="flex justify-center w-full">
      <Button type="button" icon="pi pi-align-justify" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" 
        style="background-color: #374650; border: none;"/>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" style="width: 100%;height:100%;position: absolute;left: 0;" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu, Button } from "primevue";

const menu = ref();
const items = ref([
  {
      items: [
          {
            label:'',
            icon: 'pi pi-times'
          },
          {
              label: 'Brauerei',
              icon: ''
          },
          {
              label: 'Restuarants',
              icon: ''
          },
          {
            label: "Ferienwohnungen",
            icon: ''
          },
          {
            label: "Genusshotel",
            icon:''
          }
      ]
  }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

