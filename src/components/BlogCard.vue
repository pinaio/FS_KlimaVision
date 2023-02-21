<template>
  <div
    class="group flex flex-col overflow-hidden rounded-md bg-sky-50 shadow-md shadow-zinc-900/80"
  >
    <img
      :src="blogPic"
      height="400"
      width="400"
      class="mx-auto transition-all duration-300 group-hover:scale-105"
    />
    <div class="p-4">
      <h3 class="h-16 py-4 text-center text-xl font-semibold text-green-600">
        {{ blogHeadline }}
      </h3>
      <p class="mt-8 font-sans text-zinc-800 line-clamp-4">
        {{ blogText }}
      </p>
    </div>

    <RouterLink
      class="text-md peer m-4 rounded-md bg-green-600 px-4 py-2 text-center font-medium text-zinc-800 transition-all duration-200 hover:scale-105 hover:bg-sky-400 hover:text-green-50"
      :to="{ name: 'Blogpage', params: { id: blogId } }"
      >Mehr Lesen</RouterLink
    >
  </div>
</template>

<script setup>
//
const props = defineProps({
  blogHeadline: String,
  blogText: String,
  blogPic: String,
  blogId: Number,
});
</script>
