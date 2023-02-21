<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <MainNav />
  <RouterView />
  <Footer />
</template>

<style src="..\src\assets\base.css"></style>
