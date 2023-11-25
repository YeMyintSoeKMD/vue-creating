<template>
  <main>
    <Navigation />
    <div id="main-body" class="container py-4">
      <h4>Ladies & Gentalmen, Welcome to Vue.js Course!!</h4>
      <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem, tenetur quidem mollitia consequuntur itaque corrupti illo nam quasi quas optio iste? Quibusdam quas laudantium id illum. Nesciunt, eaque quae.</p>

      <label for=""><b>Name:</b> {{ name }}</label>
      <input type="text" v-model="name" class="form-control w-25">

    </div>
  </main>
  <Footer/>
</template>

<script setup>
import Navigation from './components/Nav.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue';

const name = ref('Bella Snow')

</script>
<style scoped>
  #main-body {
    min-height: 87vh;
  }
</style>
