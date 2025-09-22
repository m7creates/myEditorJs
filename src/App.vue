<script setup>
  import Header from "./templates/header.vue"
  import Footer from './templates/Footer.vue';
</script>

<template>
  <header>
    <Header />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
