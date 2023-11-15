<template>
  <main>
    <Navigation />
    <div class="container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem, tenetur quidem mollitia consequuntur itaque corrupti illo nam quasi quas optio iste? Quibusdam quas laudantium id illum. Nesciunt, eaque quae.</p>
      <div class="row">
        <div class="col-6">
          <!-- <Button v-for="btnName in btnNames" :key="btnName" :name="btnName" /> -->
        </div>
        <div class="col-6">
          <Button :name="50" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navigation from './components/Nav.vue'
import Button from './components/Button.vue'
import { computed, reactive, ref } from 'vue';


const btnNames = ref(['submit', 'save', 'cancel', 'sign in', 'sign up'])

</script>
<style scoped>
</style>
