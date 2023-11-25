<script setup>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
</script>

<template>
<main>
    <Nav />
    <Hero />
    <router-view></router-view>
</main>
</template>

<style scoped>
#hero {
    min-height: 40vh;
}
</style>
