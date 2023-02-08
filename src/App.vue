<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import MainNav from "./components/MainNav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <MainNav />
  <RouterView />
  <Footer />
</template>
<script></script>

<style src="..\src\assets\base.css"></style>
