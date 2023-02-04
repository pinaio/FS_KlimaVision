<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <Page class="bg-slate-400">
    <header class="min-h-50 m-auto flex max-w-6xl justify-between bg-slate-900">
      <div class="ml-2 flex items-center space-x-4">
        <object
          data="src\assets\Logo.svg"
          class="mt-2 mb-2 w-20 bg-amber-500 p-4 text-center"
        ></object>
        <span class="mt-2 mb-2 bg-orange-500 p-4 text-center">Company</span>
      </div>

      <nav class="mr-2 hidden items-center space-x-4 md:flex">
        <a
          class="mt-2 mb-2 rounded-xl bg-red-500 p-4 duration-200 hover:bg-gray-200"
        >
          Element 1
        </a>
        <a
          class="mt-2 mb-2 rounded-xl bg-red-500 p-4 duration-200 hover:bg-gray-200"
        >
          Element 2
        </a>
        <a
          class="mt-2 mb-2 rounded-xl bg-red-500 p-4 duration-200 hover:bg-gray-200"
        >
          Element 3
        </a>
        <a
          class="mt-2 mb-2 rounded-xl bg-red-500 p-4 duration-200 hover:bg-gray-200"
        >
          Element 4
        </a>
      </nav>
    </header>
  </Page>
</template>

<style src="..\src\assets\base.css" scoped></style>

<!---
<header class=" bg-slate-500 mx-auto max-w-7xl px-6">
  <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 ">
    <nav class="flex justify-start lg:w-0 lg:flex-1 -my-2 -mr-2 md:hidden">
      
      <RouterLink to="/" class=" inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">Home</RouterLink>
      <RouterLink to="/co2-data" class=" bg-red-600 p-2 flex-row space-y-3 hover:bg-red-300   hover:duration-500 duration-500  hover:text-fuchsia-500" >CO2-Data</RouterLink>
      <RouterLink to="/about" class=" bg-red-600 p-2 flex-row hover:bg-red-300   hover:duration-500 duration-500  hover:text-fuchsia-500">About</RouterLink>
    </nav>
  </div>
</header>

<RouterView />

-->
