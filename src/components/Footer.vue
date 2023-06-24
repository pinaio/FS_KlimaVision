<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <footer>
    <div class="h-40 w-screen bg-zinc-800 p-5 font-bold">
      <div
        class="flex list-none items-center justify-center space-x-4 py-4 font-black text-emerald-100"
      >
        <RouterLink to="/impressum">Impressum</RouterLink>
        <RouterLink to="/datenschutz">Datenschutz</RouterLink>
      </div>
      <p class="mt-6 flex justify-center text-emerald-50">KlimaVision ©2023</p>
    </div>
  </footer>
</template>
<style scoped></style>
