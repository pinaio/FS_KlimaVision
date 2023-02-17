<script setup>
import { useRoute, useRouter } from "vue-router";
import blogs from "@/data/blogs.json";
import { ref, computed } from "vue";
const bloglist = ref(blogs.data);

const router = useRouter();
const route = useRoute();
const thisId = parseInt(route.params.id);

const titel = computed(() => {
  if (bloglist.value[thisId]) {
    return bloglist.value[thisId].titel;
  } else {
    return "Dieser Blog existiert leider nicht";
  }
});

const text = computed(() => {
  if (bloglist.value[thisId]) {
    return bloglist.value[thisId].text;
  } else {
    return "blaa";
  }
});

const picture = computed(() => {
  if (bloglist.value[thisId]) {
    return bloglist.value[thisId].picUrl;
  } else {
    return false;
  }
});
</script>

<template>
  <div class="float mx-auto max-w-6xl justify-center">
    <img v-if="picture" :src="picture" />
    <h1 class="py-10 px-2 text-2xl font-bold text-green-600">{{ titel }}</h1>
    <p class="p-4 text-lg leading-8">{{ text }}</p>
  </div>
</template>

<style></style>
