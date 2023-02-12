<script setup>
import BlogPreview from "../components/BlogPreview.vue";
</script>

<template>
  <div class="relative">
    <div
      class="fixed inset-0 -z-10 mx-auto mt-[32rem] h-[20rem] w-[20rem] animate-spin-slow rounded-full bg-gradient-to-t from-green-600 to-sky-500 opacity-30 ring-4 ring-sky-800 blur-md md:mt-96 md:h-96 md:w-96 lg:h-[40rem] lg:w-[40rem]"
    ></div>
    <header
      class="relative mx-auto my-4 flex max-w-6xl items-center justify-start overflow-hidden text-6xl font-bold"
    >
      <h1
        class="ml-4 max-w-sm bg-gradient-to-br from-green-600 to-sky-300 bg-clip-text p-8 text-transparent md:mx-auto"
      >
        <span class="text-zinc-700">Co2</span> geht uns alle etwas an!
      </h1>
      <div class="absolute left-1/2 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="2 2 20 20"
          stroke-width="0.6"
          stroke="currentColor"
          class="h-64 w-64 stroke-sky-300 opacity-40"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
          />
        </svg>
      </div>
    </header>

    <main class="mx-auto flex flex-col">
      <div
        class="relative flex max-w-6xl justify-center self-center overflow-hidden py-10"
      >
        <div class="z-0">
          <h2 class="">Wir sind KlimaVision</h2>
          <p class="my-4 px-6">
            KlimaVision ist eine Non-Profit-Organisation, die sich dem
            Klimaschutz und der Reduzierung von CO2-Emissionen verschrieben hat.
            Wir betreiben eine Informationsplattform, auf der die CO2-Emissionen
            von Ländern und Unternehmen einsehbar sind. Unsere Datenbank bietet
            benutzerfreundliche Filter- und Sortiermöglichkeiten. Wir arbeiten
            eng mit Experten zusammen, um aktuelle und zuverlässige
            Informationen bereitzustellen. Wir fördern aktiv erneuerbare
            Energien und Technologien zur Emissionsreduzierung. Werden Sie Teil
            unserer Mission und helfen Sie uns, eine bessere Zukunft für unseren
            Planeten zu schaffen.
          </p>
        </div>
      </div>
      <div class="my-10 self-center">
        <div
          class="flex max-w-6xl flex-col items-center justify-between space-x-2 bg-green-800/95 p-5 md:flex-row md:rounded-md md:p-10"
        >
          <div class="mr-2 p-2">
            <h2 class="text-sky-300">The CO2 Report</h2>
            <p class="text-lg text-sky-50">
              Sehen Sie sich die die Co2 Ausstöße von Ländern und unternehmen
              an!
            </p>
          </div>

          <RouterLink
            to="/co2-data"
            class="text-bold m-1 mt-4 min-w-max rounded-md bg-sky-400 px-4 py-2 text-zinc-800 transition-all duration-200 hover:bg-amber-200 hover:text-emerald-900"
            >To the Data</RouterLink
          >
        </div>
      </div>
      <BlogPreview />
    </main>
  </div>
</template>
<style scoped>
h2 {
  @apply ml-1 text-xl font-bold;
}
</style>
