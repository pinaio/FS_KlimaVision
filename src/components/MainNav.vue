<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isMenuOpen = ref(false);
const router = useRouter();

function openCloseMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const goHome = () => {
  router.push("/");
  console.log("klickt");
};
</script>

<template>
  <nav class="relative mx-auto p-2 font-semibold md:shadow-sm">
    <div class="item-center flex justify-between">
      <div @click="goHome" class="">
        <img src="@\assets\Logo.svg" class="ml-4 h-10 self-center lg:ml-10" />
      </div>

      <!--Menu - items-->
      <div
        class="hidden items-center justify-center space-x-8 text-zinc-800 md:flex"
      >
        <RouterLink
          to="/"
          class="rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100"
          >Home</RouterLink
        >

        <RouterLink
          to="/co2-data"
          class="rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100"
          >CO2-Data</RouterLink
        >

        <RouterLink
          to="/about"
          class="rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100"
          >About</RouterLink
        >
        <RouterLink
          to="/blog"
          class="rounded-lg border-green-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-green-50 hover:text-emerald-900 active:bg-green-100"
          >Blog</RouterLink
        >
      </div>

      <div class="hidden items-center md:flex"></div>
      <!--Hamburger Icon-->
      <button
        id="menu-btn"
        @click="openCloseMenu"
        :class="{ open: isMenuOpen }"
        class="hamburger relative block h-6 w-6 cursor-pointer self-center transition-all duration-300 focus:outline-none md:hidden"
      >
        <span
          class="hamburger-top absolute top-0 left-0 h-0.5 w-6 rotate-0 bg-slate-900 transition-all duration-500"
        ></span>
        <span
          class="hamburger-middle absolute top-0 left-0 h-0.5 w-5 translate-y-[7px] rotate-0 bg-slate-900 transition-all duration-500"
        ></span>
        <span
          class="hamburger-bottom absolute top-0 left-0 h-0.5 w-6 translate-y-[14px] rotate-0 bg-slate-900 transition-all duration-500"
        ></span>
      </button>
    </div>
    <!--Mobile menue-->
    <div class="md:hidden">
      <div
        id="hamMenuBackdrop"
        @click="openCloseMenu"
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        class="fixed left-0 top-0 z-10 m-0 h-screen w-screen bg-slate-100 bg-opacity-20 backdrop-blur-sm"
      ></div>
      <div
        id="menu"
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        class="absolute left-6 right-6 z-20 mt-10 flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md transition-all duration-200 sm:w-auto sm:self-center"
      >
        <RouterLink
          @click="openCloseMenu"
          to="/"
          class="border-b-2 hover:text-emerald-700"
          >Home</RouterLink
        >
        <RouterLink
          @click="openCloseMenu"
          to="/co2-data"
          class="border-b-2 hover:text-emerald-700"
          >CO2-Data</RouterLink
        >
        <RouterLink
          @click="openCloseMenu"
          to="/about"
          class="border-b-2 hover:text-emerald-700"
          >About</RouterLink
        >
        <RouterLink
          @click="openCloseMenu"
          to="/blog"
          class="border-b-2 hover:text-emerald-700"
          >Blog</RouterLink
        >
      </div>
    </div>

    <!--LOGO-->
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply border-emerald-900 text-emerald-600;
}

/* Animation des Menu-Buttons*/
.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>
