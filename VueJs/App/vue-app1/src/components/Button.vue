<template>
    <button class="btn btn-primary m-2">{{name}}</button>
</template>
<script setup>
    defineProps({
        name: {
            type: String,
            required: true,
        }
    })
</script>
<style>
</style>