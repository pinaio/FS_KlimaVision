<script setup></script>

<template>
  <main class="mx-auto max-w-4xl">
    <div class="">
      <div
        class="mt-2 flex flex-col items-center justify-between space-x-2 bg-green-400 bg-gradient-to-br from-emerald-800 p-5 shadow-lg md:flex-row md:rounded-md md:p-10"
      >
        <div class="mr-2 p-2">
          <h1 class="text-xl font-bold text-amber-200">The CO2 Report</h1>
          <p class="text-amber-50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          </p>
        </div>

        <RouterLink
          to="/co2-data"
          class="text-bold m-1 mt-4 min-w-max rounded-xl bg-emerald-900 px-4 py-2 text-emerald-50 transition-all duration-200 hover:bg-amber-200 hover:text-emerald-900"
          >To the Data</RouterLink
        >
      </div>
      <h1>Ein Kurzer Text über Uns</h1>
      <p class="mt-2 px-10">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem halloooo ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet.
      </p>
    </div>
  </main>
</template>
