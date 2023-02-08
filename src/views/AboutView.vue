<script setup>
import { ref } from "vue";

const bgChanged = ref(false);

function toggleBg() {
  bgChanged = !bgChanged;
}
</script>

<template>
  <div :class="{ 'bg-red-700': bgChanged }" class="h-32 bg-red-200">
    Hallooooo
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
