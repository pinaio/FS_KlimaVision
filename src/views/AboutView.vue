<script setup>
import BlogPreview from "../components/BlogPreview.vue";
</script>

<template>
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
        class="h-64 w-64 stroke-sky-600 opacity-40"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
        />
      </svg>
    </div>
  </header>
  <main class="mx-auto mt-10 max-w-4xl px-2">
    <div>
      <div class="flex items-center">
        <p class="py-4 text-lg font-semibold text-zinc-800 md:leading-loose">
          KlimaVision ist eine Non-Profit-Organisation, die sich für den
          Klimaschutz und die
          <u class="">Reduzierung von CO2-Emissionen</u>
          einsetzt. Wir betreiben eine Informationsplattform, auf der Sie die
          CO2-Emissionen aller Länder und großer Unternehmen einsehen können.
        </p>

        <svg
          fill="#000000"
          height="200px"
          width="800px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 442.525 442.525"
          class="fill-green-600 stroke-green-600"
        >
          <g>
            <path
              d="M385.057,205.853c2.419-8.397,3.177-17.067,3.177-25.587c0-57.761-46.991-104.752-104.751-104.752
		c-22.791,0-44.459,7.196-62.66,20.812c-17.59,13.156-30.855,31.899-37.354,52.781c-0.215,0.691-0.955,2.281-3.948,1.784
		c-0.264-0.044-0.542-0.037-0.824-0.056c-0.984-0.063-2.051-0.117-3.153-0.117c-34.256,0-64.816,22.152-76.529,55.286
		c-0.174,0.493-0.708,1.654-2.122,1.38c-0.144-0.028-0.287-0.059-0.431-0.087c-5.191-1.041-10.514-1.567-15.822-1.567
		C36.174,205.73,0,241.905,0,286.371c0,44.465,36.174,80.64,80.638,80.64h281.247c44.466,0,80.641-36.175,80.641-80.64
		c0-34.865-22.822-66.047-55.811-76.721C385.902,209.388,384.2,208.826,385.057,205.853z M361.885,352.011H80.638
		c-36.192,0-65.638-29.445-65.638-65.64c0-36.194,29.445-65.641,65.638-65.641c4.441,0,8.892,0.453,13.227,1.346
		c1.416,0.292,2.839,0.439,4.227,0.439c7.023,0,12.497-3.844,14.643-10.282c9.27-27.822,34.51-46.515,62.808-46.515
		c0.912,0,1.909,0.067,2.965,0.139c1.149,0.078,2.339,0.158,3.614,0.17l0.265,0.001c8.692,0,13.84-4.001,15.298-11.892
		c0.041-0.224,0.074-0.439,0.107-0.575c11.738-37.711,46.175-63.047,85.691-63.047c49.489,0,89.751,40.263,89.751,89.752
		c0,8.493-1.244,17.086-3.697,25.539c-1.194,4.117-0.924,7.778,0.805,10.883c2.57,4.615,7.192,5.905,9.414,6.525l0.352,0.099
		c27.92,8.05,47.419,33.98,47.419,63.059C427.525,322.565,398.079,352.011,361.885,352.011z"
            />
            <path
              d="M189.365,225.192c-4.302-1.388-9.292-2.151-14.052-2.151c-22.581,0-38.352,15.598-38.352,37.931
		c0,21.853,14.345,36.534,35.695,36.534c8.507,0,14.687-1.841,17.614-2.94c1-0.375,3.655-1.373,3.279-5.5l-1.022-4.578
		c-0.455-2.111-1.855-3.371-3.741-3.371c-0.823,0-1.565,0.248-2.051,0.435c-2.427,0.93-6.295,2.167-11.843,2.167
		c-12.853,0-21.488-9.366-21.488-23.307c0-14.327,8.6-23.585,21.908-23.585c4.205,0,7.904,0.626,10.993,1.861l0.16,0.065
		c0.488,0.203,1.225,0.509,2.092,0.509c1.023,0,2.87-0.439,3.733-3.372l1.381-4.692l0.052-0.224
		C194.161,228.457,192.449,226.187,189.365,225.192z"
            />
            <path
              d="M238.29,222.762c-20.933,0-35.555,15.598-35.555,37.932c0,21.675,14.161,36.813,34.437,36.813
		c17.191,0,35.694-11.87,35.694-37.932C272.866,237.899,258.648,222.762,238.29,222.762z M237.732,284.278
		c-10.75,0-18.553-10.096-18.553-24.005c0-12.088,5.823-24.285,18.832-24.285c14.453,0,18.273,15.703,18.273,24.006
		C256.283,274.065,248.482,284.278,237.732,284.278z"
            />
            <path
              d="M326.691,285.473h-14.803c-2.625,0-1.327-1.278-0.681-1.91c11.59-11.327,20.177-21.27,20.177-33.531
		c0-10.557-6.855-21.209-22.172-21.209c-5.997,0-11.775,1.688-16.709,4.881c-3.072,1.989-4.229,4.903-2.968,7.449l1.238,2.742
		l0.089,0.18c0.736,1.378,2.09,2.2,3.621,2.2c1.603,0,2.933-0.864,3.831-1.448c3.032-1.972,6.115-2.971,9.164-2.971
		c6.344,0,9.428,3.021,9.428,9.206c-0.082,8.083-6.65,15.635-22.326,30.559c-0.74,0.636-5.064,4.381-6.992,6.824
		c-0.996,1.263-0.972,2.874-0.951,4.295l0.006,0.568c0,3.413,2.917,5.198,5.799,5.198h34.188c0.218,0.023,0.534,0.048,0.906,0.048
		c3.723,0,5.39-2.38,5.39-4.739v-3C332.927,287.345,329.804,285.501,326.691,285.473z"
            />
          </g>
        </svg>
      </div>

      <p class="py-4 text-lg font-semibold text-zinc-800 md:leading-loose">
        Unsere Datenbank ist sehr benutzerfreundlich und bietet umfangreiche
        Filter- und Sortiermöglichkeiten, um Ihnen einen einfachen und schnellen
        Zugang zu relevanten Informationen zu ermöglichen. Wir glauben, dass
        <u
          >Transparenz ein wichtiger Faktor bei der Bekämpfung des Klimawandels
          ist.</u
        >
        Daher sind wir bestrebt, so viele Daten wie möglich zur Verfügung zu
        stellen und einfach zugänglich zu machen.
      </p>

      <p class="py-4 text-lg font-semibold text-zinc-800 md:leading-loose">
        Unser Ziel ist es, Verbraucher, Unternehmen und Regierungen dazu zu
        ermutigen, ihren Beitrag zur Reduzierung von CO2-Emissionen zu leisten.
        Wir arbeiten eng mit Experten und Forschern aus verschiedenen Bereichen
        zusammen, um sicherzustellen, dass die Informationen auf unserer
        Plattform stets aktuell und zuverlässig sind. Darüber hinaus fördern wir
        aktiv die Verwendung erneuerbarer Energien und den Einsatz von
        Technologien, die zu einer Reduzierung der CO2-Emissionen beitragen.
        <u>
          Wir möchten, dass Sie Teil unserer Mission werden und uns dabei
          helfen, eine bessere Zukunft für unseren Planeten zu schaffen.</u
        >
        Wir laden Sie ein, sich unsere Plattform anzusehen und uns bei unseren
        Bemühungen zu unterstützen. Zusammen können wir eine positive
        Veränderung bewirken.
      </p>
    </div>
  </main>
  <BlogPreview />
</template>

<style>
p u {
  @apply decoration-green-600 decoration-solid decoration-4 underline-offset-4;
}
</style>
