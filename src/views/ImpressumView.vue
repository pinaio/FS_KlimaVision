<script setup></script>

<template>
  <div class="my-16 flex min-h-screen">
    <div class="mx-auto flex flex-col space-y-16">
      <h1 class="text-3xl font-bold text-green-600">Impressum</h1>
      <p>
        Anbieter:<br />Max Mustermann<br />Musterstraße 1<br />80999 München
      </p>
      <p>
        Kontakt:<br />Telefon: 089/1234567-8<br />Telefax: 089/1234567-9<br />E-Mail:
        mail@mustermann.de<br />Website: www.mustermann.de
      </p>

      <p>Bei redaktionellen Inhalten:</p>
      <p>
        Verantwortlich nach § 55 Abs.2 RStV<br />Moritz Schreiberling<br />Musterstraße
        2<br />80999 München
      </p>
    </div>
  </div>
</template>

<style>
p {
  @apply decoration-green-600 decoration-solid decoration-4 underline-offset-4;
}
</style>
