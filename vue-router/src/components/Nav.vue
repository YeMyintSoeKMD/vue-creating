<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand" href="#">Vue-Router</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <a class="nav-link" href="#">Sign In</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Sign Up</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
</template>
<script setup>
</script>
<style>
    
</style>