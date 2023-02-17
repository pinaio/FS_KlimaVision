<script setup>
import blogs from "../data/blogs.json";
import BlogCard from "./BlogCard.vue";
import img1Url from "../assets/images/earth.jpg";
import img2Url from "../assets/images/happy_earth.jpg";
import img3Url from "../assets/images/pollution.jpg";
import { ref } from "vue";

const blogdata = ref(blogs.data);
</script>

<template>
  <div
    class="flex w-full justify-center bg-sky-200 bg-opacity-40 shadow-md backdrop-blur-lg"
  >
    <div class="max-w-6xl self-center">
      <h2>Unsere neusten Beiträge</h2>
      <div
        class="grid grid-cols-1 gap-x-3 gap-y-4 p-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <!--Grid Platzhalter zu entwicklungszwecken-->

        <BlogCard
          :blog-headline="blogdata[0].titel"
          :blog-text="blogdata[0].text"
          image-alt="Hallooooo"
          ><img :src="img3Url" alt="Halloooo"
        /></BlogCard>
        <BlogCard
          :blog-headline="blogdata[1].titel"
          :blog-text="blogdata[1].text"
          image-alt="Hallooooo"
          ><img :src="img1Url" alt="Halloooo"
        /></BlogCard>
        <BlogCard
          :blog-headline="blogdata[2].titel"
          :blog-text="blogdata[2].text"
          image-alt="Hallooooo"
          ><img :src="img2Url" alt="Halloooo"
        /></BlogCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  @apply ml-5 py-4 text-center text-3xl font-bold text-green-700;
}
</style>
