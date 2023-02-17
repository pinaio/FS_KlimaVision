<template>
  <div class="card">
    <slot></slot>
    <div class="p-4">
      <h3>{{ blogHeadline }}</h3>
      <p>
        {{ blogText }}
      </p>
    </div>
    <button>Mehr lesen</button>
  </div>
</template>

<script setup>
//
const props = defineProps({
  blogHeadline: String,
  blogText: String,
});
</script>

<style scoped>
.blog-pic {
  @apply my-4 h-40  w-40 self-center text-emerald-900;
}
.card {
  @apply flex flex-col overflow-hidden rounded-md bg-green-50 shadow-md shadow-zinc-700;
}
.card h3 {
  @apply h-16 text-xl  font-semibold text-green-600;
}
.card p {
  @apply text-sm leading-6 text-emerald-800 line-clamp-5;
}

.card button {
  @apply mx-4 my-3 rounded-md bg-sky-400 py-4 transition-all duration-200 hover:bg-green-700;
}
</style>
