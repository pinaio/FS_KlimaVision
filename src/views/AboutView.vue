<script setup>
import { ref } from "vue";

const isClicked = ref(false);

function changeBG() {
  console.log("wurde geklickt");
  isClicked.value = !isClicked.value;
}
</script>

<template>
  <div class="flex bg-red-400" :class="{ 'bg-emerald-600': isClicked }">
    <div>
      <p>
        KlimaVision ist eine Non-Profit-Organisation, die sich für den
        Klimaschutz und die Reduzierung von CO2-Emissionen einsetzt. Wir
        betreiben eine Informationsplattform, auf der Sie die CO2-Emissionen
        aller Länder und großer Unternehmen einsehen können.
      </p>
      <p>
        Unsere Datenbank ist sehr benutzerfreundlich und bietet umfangreiche
        Filter- und Sortiermöglichkeiten, um Ihnen einen einfachen und schnellen
        Zugang zu relevanten Informationen zu ermöglichen. Wir glauben, dass
        Transparenz ein wichtiger Faktor bei der Bekämpfung des Klimawandels
        ist. Daher sind wir bestrebt, so viele Daten wie möglich zur Verfügung
        zu stellen und einfach zugänglich zu machen.
      </p>

      <p>
        Unser Ziel ist es, Verbraucher, Unternehmen und Regierungen dazu zu
        ermutigen, ihren Beitrag zur Reduzierung von CO2-Emissionen zu leisten.
        Wir arbeiten eng mit Experten und Forschern aus verschiedenen Bereichen
        zusammen, um sicherzustellen, dass die Informationen auf unserer
        Plattform stets aktuell und zuverlässig sind. Darüber hinaus fördern wir
        aktiv die Verwendung erneuerbarer Energien und den Einsatz von
        Technologien, die zu einer Reduzierung der CO2-Emissionen beitragen. Wir
        möchten, dass Sie Teil unserer Mission werden und uns dabei helfen, eine
        bessere Zukunft für unseren Planeten zu schaffen. Wir laden Sie ein,
        sich unsere Plattform anzusehen und uns bei unseren Bemühungen zu
        unterstützen. Zusammen können wir eine positive Veränderung bewirken.
      </p>
    </div>

    <button
      @click="changeBG"
      class="rounded-md border-emerald-900 bg-emerald-400 p-6"
    >
      Hi
    </button>
  </div>
</template>

<style></style>
