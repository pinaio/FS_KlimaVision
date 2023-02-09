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
  <button
    type="button"
    @click="toggleBg"
    class="rounded-xl border-4 border-emerald-300 bg-slate-500 p-2"
  >
    Hier Klicken um die Farbe zu ändern
  </button>
</template>

<style></style>
