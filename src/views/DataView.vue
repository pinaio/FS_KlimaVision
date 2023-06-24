<script setup>
import { computed, ref } from "vue";
import climadata from "../data/db.json";

const laender = ref(climadata.country);
const business = ref(climadata.business);
const search = ref("");
const language = navigator.language;
const sorting = ref("Alphabetisch Aufsteigend");
const isBusiness = ref(false);

const rtlLanguages = [
  "de",
  "ar",
  "dv",
  "fa",
  "ha",
  "he",
  "khw",
  "ks",
  "ku",
  "ps",
  "ur",
  "yi",
];
const isrtl = ref(rtlLanguages.includes(language.split("-")[0]) ? true : false);

// console.log(language, rtlLanguages, isrtl);

const currentData = computed(() => {
  if (isBusiness.value == true) return business.value;
  else return laender.value;
});

const searchedData = computed(() => {
  if (isBusiness.value === true) {
    return sortedData.value.filter(function (unternehmen) {
      if (
        unternehmen.unternehmen
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
        unternehmen.sektor.toLowerCase().includes(search.value.toLowerCase())
      ) {
        return true;
      }
    });
  } else {
    return sortedData.value.filter((land) =>
      land.land.toLowerCase().includes(search.value.toLowerCase())
    );
  }
});

const sortedData = computed(() => {
  if (isBusiness.value === true) {
    switch (sorting.value) {
      case "Alphabetisch Aufsteigend":
        return currentData.value.sort((a, b) =>
          deUmlaut(a.unternehmen) > deUmlaut(b.unternehmen) ? 1 : -1
        );

      case "Alphabetisch Absteigend":
        return currentData.value.sort((a, b) =>
          deUmlaut(a.unternehmen) < deUmlaut(b.unternehmen) ? 1 : -1
        );

      case "Gesamt-Emmisionen Aufsteigend":
        return currentData.value.sort((a, b) => a.co2Total - b.co2Total);

      case "Gesamt-Emmisionen Absteigend":
        return currentData.value.sort((a, b) => b.co2Total - a.co2Total);

      case "Sektor Aufsteigend":
        return currentData.value.sort((a, b) =>
          deUmlaut(a.sektor) > deUmlaut(b.sektor) ? 1 : -1
        );

      case "Sektor Absteigend":
        return currentData.value.sort((a, b) =>
          deUmlaut(a.sektor) < deUmlaut(b.sektor) ? 1 : -1
        );
      default:
        sorting.value = "Alphabetisch Aufsteigend";
        return currentData.value.sort((a, b) =>
          deUmlaut(a.unternehmen) > deUmlaut(b.unternehmen) ? 1 : -1
        );
    }
  } else {
    switch (sorting.value) {
      case "Alphabetisch Aufsteigend":
        return currentData.value.sort((a, b) =>
          deUmlaut(a.land) > deUmlaut(b.land) ? 1 : -1
        );

      case "Alphabetisch Absteigend":
        return currentData.value.sort((a, b) =>
          deUmlaut(a.land) < deUmlaut(b.land) ? 1 : -1
        );

      case "Gesamt-Emmisionen Aufsteigend":
        return currentData.value.sort((a, b) => a.co2Total - b.co2Total);

      case "Gesamt-Emmisionen Absteigend":
        return currentData.value.sort((a, b) => b.co2Total - a.co2Total);

      case "pro-Kopf-Emmisionen Aufsteigend":
        return currentData.value.sort((a, b) => a.proKopf - b.proKopf);

      case "pro-Kopf-Emmisionen Absteigend":
        return currentData.value.sort((a, b) => b.proKopf - a.proKopf);

      case "globaler Anteil Aufsteigend":
        return currentData.value.sort(
          (a, b) => parseFloat(a.anteil) - parseFloat(b.anteil)
        );

      case "globaler Anteil Absteigend":
        return currentData.value.sort(
          (a, b) => parseFloat(b.anteil) - parseFloat(a.anteil)
        );

      case "Bevölkerung Aufsteigend":
        return currentData.value.sort((a, b) => a.bevolkerung - b.bevolkerung);

      case "Bevölkerung Absteigend":
        return currentData.value.sort((a, b) => b.bevolkerung - a.bevolkerung);

      default:
        sorting.value = "Alphabetisch Aufsteigend";
        return currentData.value.sort((a, b) =>
          deUmlaut(a.land) > deUmlaut(b.land) ? 1 : -1
        );
    }
  }
});

function deUmlaut(value) {
  value = value.toLowerCase();
  value = value.replace(/ä/g, "ae");
  value = value.replace(/ö/g, "oe");
  value = value.replace(/ü/g, "ue");
  value = value.replace(/ß/g, "ss");
  return value;
}

// Only for Development to Simulate an REST-Endponint with JSON-Server
//onMounted(() => {
//  fetch("http://localhost:3000/data")
//    .then((res) => res.json())
//    .then((data) => (laender.value = data))
//    .catch((err) => console.log(err.message));
//});
</script>
<template>
  <div>
    <!--Wrapper um die Tabelle-->
    <main class="flex flex-col justify-between md:max-w-full md:flex-row">
      <menu
        class="relative z-0 m-2 flex min-w-[20rem] flex-col overflow-hidden rounded-2xl bg-sky-800/20 p-4 shadow-sm shadow-zinc-300 backdrop-blur-2xl before:absolute before:top-16 before:-z-10 before:flex before:h-60 before:w-56 before:animate-spin-slow before:self-center before:rounded-full before:bg-green-500 before:bg-gradient-to-br before:from-sky-400 before:opacity-30 before:blur-lg md:before:top-[40vh] lg:max-w-[20rem]"
        :class="{ 'md:order-last': isrtl }"
      >
        <h3
          class="my-4 text-center font-serif text-2xl font-bold max-sm:my-2 max-sm:text-lg"
        >
          Daten Auswählen
        </h3>
        <div class="flex h-12 items-center justify-center space-x-2 text-lg">
          <label class="text-center font-bold">Länder</label>

          <input
            v-model="isBusiness"
            type="checkbox"
            class="toggle toggle-md bg-green-600"
          />
          <label class="text-center font-bold">Unternehmen</label>
        </div>
        <h3
          class="my-4 text-center font-serif text-2xl font-bold max-sm:my-2 max-sm:text-lg"
        >
          Suchen
        </h3>
        <input
          type="search"
          v-model="search"
          placeholder="Suchen"
          class="m-2 h-10 rounded-lg p-2 text-sm outline-none ring-2 ring-green-600 transition-all duration-500 focus:bg-green-100"
        />

        <div class="flex flex-col">
          <h3
            class="my-4 text-center font-serif text-2xl font-bold max-sm:my-2 max-sm:text-lg"
          >
            Sortieren
          </h3>
          <select
            v-model="sorting"
            class="select m-2 text-sm outline-none transition-all duration-500 focus:border focus:border-green-700 focus:bg-green-100"
          >
            <option>Alphabetisch Aufsteigend</option>
            <option>Alphabetisch Absteigend</option>

            <option>Gesamt-Emmisionen Aufsteigend</option>
            <option>Gesamt-Emmisionen Absteigend</option>

            <option v-if="!isBusiness">pro-Kopf-Emmisionen Aufsteigend</option>
            <option v-if="!isBusiness">pro-Kopf-Emmisionen Absteigend</option>
            v-if="!isBusiness"

            <option v-if="!isBusiness">globaler Anteil Aufsteigend</option>
            <option v-if="!isBusiness">globaler Anteil Absteigend</option>

            <option v-if="!isBusiness" class="max-lg:hidden">
              Bevölkerung Aufsteigend
            </option>
            <option v-if="!isBusiness" class="max-lg:hidden">
              Bevölkerung Absteigend
            </option>

            <option v-if="isBusiness">Sektor Aufsteigend</option>
            <option v-if="isBusiness">Sektor Absteigend</option>
          </select>
        </div>
      </menu>
      <div
        class="z-10 flex grow justify-center backdrop-blur-lg md:max-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-14rem)] md:overflow-y-scroll"
      >
        <table
          v-if="!isBusiness"
          class="text-md p-1 shadow-zinc-800 max-sm:mx-0 max-sm:text-sm md:mx-10 md:h-0 md:border-separate md:border-spacing-0.5 lg:border-spacing-x-1 lg:border-spacing-y-1"
        >
          <!--Länder Tabelle-->
          <thead class="max-h-10 bg-emerald-900 text-sky-100">
            <tr class="[&>*]:px-2 md:[&>*]:rounded-md">
              <th class="">Land</th>
              <th class="">
                Gesamt-Emmision <br />
                in kt
              </th>
              <th class="">Pro Kopf <br />in t</th>
              <th class="">
                Globaler Anteil <br />
                in %
              </th>
              <th class="max-lg:hidden">Bevölkerung</th>
            </tr>
          </thead>
          <tbody
            v-for="land in searchedData"
            :key="land.land"
            class="odd:bg-sky-200 even:bg-green-200"
          >
            <tr
              class="border-gray-700 text-center font-medium text-zinc-900 sm:[&>*]:px-2 md:[&>*]:rounded-sm"
            >
              <td>{{ land.land }}</td>
              <td>
                {{ parseInt(land.co2Total).toLocaleString() }}
              </td>
              <td>
                {{ parseFloat(land.proKopf).toLocaleString() }}
              </td>
              <td>
                {{ parseFloat(land.anteil).toLocaleString() }}
              </td>
              <td class="max-lg:hidden">
                {{ parseInt(land.bevolkerung).toLocaleString() }}
              </td>
            </tr>
          </tbody>
        </table>
        <table
          v-if="isBusiness"
          class="text-md max-sm:mx-0 max-sm:text-sm md:mx-10 md:h-0 md:border-separate md:border-spacing-0.5 lg:border-spacing-y-1"
        >
          <!--Länder Tabelle-->
          <thead class="max-h-10 bg-emerald-900 text-sky-100">
            <tr class="[&>*]:px-2 md:[&>*]:rounded-md">
              <th class="">Unternehmen</th>
              <th class="">
                Gesamt-Emmision <br />
                in t
              </th>
              <th class="">Sektor</th>
            </tr>
          </thead>
          <tbody
            v-for="unternehmen in searchedData"
            :key="unternehmen.unternehmen"
            class="odd:bg-sky-200 even:bg-green-200"
          >
            <tr
              class="border-gray-700 text-center font-medium text-zinc-900 sm:[&>*]:px-2 md:[&>*]:rounded-sm"
            >
              <td>{{ unternehmen.unternehmen }}</td>
              <td>
                {{ parseInt(unternehmen.co2Total).toLocaleString() }}
              </td>
              <td>
                {{ unternehmen.sektor }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
