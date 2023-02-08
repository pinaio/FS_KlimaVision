<script setup></script>
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
        <button type="button" class="rounded-lg bg-emerald-400 px-6 py-4">
          Sortieren
        </button>
        <input type="search" placeholder="Suchen" class="p-2" />
      </div>
      <div class="py-6">
        <table
          class="mx-2 border-collapse rounded-md bg-gradient-to-tr from-slate-900 to-emerald-600 p-1 text-center md:mx-auto"
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
          <tr class="bg-amber-50 font-medium text-emerald-900">
            <td class="border border-gray-700">Deutschland</td>
            <td class="border border-gray-700">454654</td>
            <td class="border border-gray-700">4545</td>
            <td class="border border-gray-700">13%</td>
          </tr>
          <tr class="bg-amber-50 font-medium text-emerald-900">
            <td class="border border-gray-700">China</td>
            <td class="border border-gray-700">454654</td>
            <td class="border border-gray-700">4545</td>
            <td class="border border-gray-700">13%</td>
          </tr>
          <tr class="bg-amber-50 font-medium text-emerald-900">
            <td class="border border-gray-700">Russland</td>
            <td class="border border-gray-700">454654</td>
            <td class="border border-gray-700">4545</td>
            <td class="border border-gray-700">13%</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
