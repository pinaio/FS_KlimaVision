<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import MainNav from "./components/MainNav.vue";
import Footer from "./components/Footer.vue";
const route = useRoute();
</script>

<template>
  <MainNav />
  <RouterView :key="route.fullPath" />
  <Footer />
</template>
<script></script>

<style src="..\src\assets\base.css"></style>
