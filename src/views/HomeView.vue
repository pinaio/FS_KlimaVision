<script setup></script>

<template>
  <header
    class="mx-auto flex max-w-4xl flex-col items-center justify-between text-6xl font-bold sm:flex-row"
  >
    <h1
      class="mr-10 ml-5 bg-gradient-to-br from-green-600 to-sky-300 bg-clip-text py-10 text-transparent md:mr-36 md:ml-20"
    >
      Co2 geht uns alle etwas an!
    </h1>
    <div class="my-2 mr-10 h-24 w-32 bg-red-400"></div>
  </header>

  <main class="mx-auto mt-4 max-w-3xl">
    <div class="relative flex justify-center overflow-hidden">
      <div
        class="absolute h-[30rem] w-[32rem] translate-y-48 justify-center self-center rounded-full bg-gradient-to-t from-green-400 to-sky-200 opacity-50 ring-2 blur-sm"
      ></div>

      <div class="z-0">
        <h2 class="text-center text-2xl font-medium text-emerald-900">
          Wir sind KlimaVision
        </h2>
        <p class="my-4 px-6">
          KlimaVision ist eine Non-Profit-Organisation, die sich dem Klimaschutz
          und der Reduzierung von CO2-Emissionen verschrieben hat. Wir betreiben
          eine Informationsplattform, auf der die CO2-Emissionen von Ländern und
          Unternehmen einsehbar sind. Unsere Datenbank bietet
          benutzerfreundliche Filter- und Sortiermöglichkeiten. Wir arbeiten eng
          mit Experten zusammen, um aktuelle und zuverlässige Informationen
          bereitzustellen. Wir fördern aktiv erneuerbare Energien und
          Technologien zur Emissionsreduzierung. Werden Sie Teil unserer Mission
          und helfen Sie uns, eine bessere Zukunft für unseren Planeten zu
          schaffen.
        </p>
      </div>
    </div>

    <div class="">
      <div
        class="flex flex-col items-center justify-between space-x-2 bg-green-400 bg-gradient-to-br from-emerald-800 p-5 shadow-lg md:flex-row md:rounded-md md:p-10"
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
    </div>
  </main>
</template>
