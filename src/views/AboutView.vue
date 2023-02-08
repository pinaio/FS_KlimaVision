<script setup>
import { ref } from "vue";

const isClicked = ref(false);

function changeBG() {
  console.log("wurde geklickt");
  isClicked.value = !isClicked.value;
}
</script>

<template>
  <div class="about bg-red-400">
    <h1
      :class="{ 'bg-emerald-600': isClicked }"
      class="h-52 transition-colors duration-1000"
    >
      This is an awesome about page
    </h1>
    <button
      @click="changeBG"
      class="rounded-md border-emerald-900 bg-emerald-400 p-6"
    >
      Hi
    </button>
  </div>
</template>

<style></style>
