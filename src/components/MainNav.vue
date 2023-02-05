<script setup>
function toggleHamMenu(event) {
  const btn = document.getElementById("menu-btn");
  const hamNav = document.getElementById("menu");
  btn.classList.toggle("open");
  hamNav.classList.toggle("hidden");
  hamNav.classList.toggle("flex");
}
</script>

<template>
  <nav class="container relative mx-auto max-w-6xl p-2 font-semibold">
    <div class="item-center flex justify-between">
      <div class="">
        <object
          data="src\assets\Logo.svg"
          class="mx-auto h-20 self-center"
        ></object>
      </div>
      <!--Menu - items-->
      <div
        class="hidden items-center justify-center space-x-8 text-zinc-800 md:flex"
      >
        <RouterLink
          to="/"
          class="rounded-lg border-emerald-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-emerald-50 hover:text-emerald-900 active:bg-emerald-100"
          >Home</RouterLink
        >

        <RouterLink
          to="/co2-data"
          class="rounded-lg border-emerald-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-emerald-50 hover:text-emerald-900 active:bg-emerald-100"
          >CO2-Data</RouterLink
        >

        <RouterLink
          to="/about"
          class="rounded-lg border-emerald-700 border-opacity-50 py-2 px-2 transition-all duration-100 hover:border-b-4 hover:bg-emerald-50 hover:text-emerald-900 active:bg-emerald-100"
          >About</RouterLink
        >
      </div>

      <div class="hidden items-center md:flex"></div>
      <!--Hamburger Icon-->
      <button
        id="menu-btn"
        @click="toggleHamMenu"
        class="hamburger block self-center focus:outline-none md:hidden"
      >
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
    <!--Mobile menue-->
    <div class="md:hidden">
      <div
        id="menu"
        class="z-100 absolute left-6 right-6 mt-10 hidden flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md transition-all duration-200 sm:w-auto sm:self-center"
      >
        <RouterLink to="/" class="border-b-2 hover:text-emerald-700"
          >Home</RouterLink
        >
        <RouterLink to="/co2-data" class="border-b-2 hover:text-emerald-700"
          >CO2-Data</RouterLink
        >
        <RouterLink to="/about" class="border-b-2 hover:text-emerald-700"
          >About</RouterLink
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

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: rgb(0, 0, 0);
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
  width: 20px;
}

.hamburger-bottom {
  transform: translateY(14px);
}

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
