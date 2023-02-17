<script setup>
import { ref } from "vue";
import BlogCard from "../components/BlogCard.vue";
import blogs from "../data/blogs.json";
const blogdata = ref(blogs.data);
</script>
<template>
  <div class="max- mx-auto flex max-w-6xl flex-col justify-center">
    <h1 class="my-8 text-center text-3xl font-bold text-green-600">
      Der KlimaVision Blog
    </h1>
    <div class="my-10 mx-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="" v-for="blog in blogdata">
        <BlogCard
          :blog-headline="blog.titel"
          :blog-text="blog.text"
          :blog-pic="blog.picUrl"
          :blog-id="blog.id"
          class=""
        ></BlogCard>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
