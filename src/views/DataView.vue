<script setup>
import { computed, onMounted, ref } from "vue";

const laender = ref([]);
const search = ref("");

const searchedLaender = computed(() => {
  return laender.value.filter((land) =>
    land.Land.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(() => {
  fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => (laender.value = data))
    .catch((err) => console.log(err.message));
});

function showIt() {
  console.log(laender.value[1]);
}
</script>
<template>
  <div>
    <div class="min-h-36 flex flex-col justify-center bg-red-200 md:flex-col">
      <h1 class="my-4 self-center text-lg font-bold">Die CO-2 Daten</h1>
      <p class="mx-6 my-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quis labore
        exercitationem laudantium blanditiis quibusdam non hic, eligendi eos
        eaque, consectetur sed quos excepturi saepe nisi sit architecto maiores
        in reprehenderit, dolor dolorum. Expedita nostrum consectetur similique!
        Quos reiciendis quod ratione omnis saepe alias, quisquam amet earum
        nisi, quas nemo.
      </p>
    </div>
    <!--Wrapper um die Tabelle-->
    <div class="flex flex-col items-center justify-between">
      <!-- Wrapper um die Steuerelemente-->
      <div class="my- 4 flex w-full justify-around bg-slate-200 py-4">
        <button
          type="button"
          @click="showIt"
          class="rounded-lg bg-emerald-400 px-6 py-4"
        >
          Sortieren
        </button>
        <input
          type="search"
          v-model="search"
          placeholder="Suchen"
          class="p-2"
        />
      </div>
      <div class="py-6">
        <table
          class="mx-2 table-fixed border-collapse rounded-md bg-gradient-to-tr from-slate-900 to-emerald-600 p-1 text-center md:mx-auto md:table-fixed"
        >
          <thead class="text-amber-100">
            <tr class="">
              <th class="border-l-1 border-0 border-gray-700">Land</th>
              <th class="border border-t-0 border-gray-700">Gesamt-Emmision</th>
              <th class="border border-t-0 border-gray-700">Pro Kopf</th>
              <th class="border border-t-0 border-r-0 border-gray-700">
                Globaler anteil
              </th>
            </tr>
          </thead>
          <tbody v-for="land in searchedLaender" :key="land.Land">
            <tr class="bg-amber-50 font-medium text-emerald-900">
              <td class="border border-gray-700">{{ land.Land }}</td>
              <td class="border border-gray-700">
                {{ Math.round(land.co2Emmision) }}
              </td>
              <td class="border border-gray-700">
                {{ Math.round(land.proKopf) }}
              </td>
              <td class="border border-gray-700">13%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
