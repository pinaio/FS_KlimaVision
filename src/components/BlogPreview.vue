<template>
  <div
    class="flex w-full justify-center bg-sky-200 bg-opacity-40 shadow-md backdrop-blur-lg"
  >
    <div class="max-w-6xl self-center">
      <h2>Unsere neusten Beiträge</h2>
      <div
        class="grid grid-cols-1 gap-x-3 gap-y-4 p-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <!--Grid Platzhalter zu entwicklungszwecken-->

        <div class="card">
          <img
            src="../assets/Co2-pollution-2.png"
            alt="Bild von Umweltverschmutzung"
          />
          <div class="p-4">
            <h3>Überschrift 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              voluptatum eveniet in asperiores nulla fugiat odio quis hic,
              aspernatur perspiciatis molestias reiciendis laudantium officia
              porro quo ipsum. Facilis, aliquid officiis.
            </p>
          </div>
          <button>Mehr lesen</button>
        </div>
        <div class="card">
          <img src="../assets/earth.png" alt="Bild von Umweltverschmutzung" />

          <div class="p-4">
            <h3>Überschrift 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              voluptatum eveniet in asperiores nulla fugiat odio quis hic,
              aspernatur perspiciatis molestias reiciendis laudantium officia
              porro quo ipsum. Facilis, aliquid officiis.
            </p>
          </div>
          <button>Mehr lesen</button>
        </div>
        <div class="card">
          <img
            src="../assets/happy_earth.png"
            alt="Bild von Umweltverschmutzung"
          />
          <div class="p-4">
            <h3>Überschrift 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              voluptatum eveniet in asperiores nulla fugiat odio quis hic,
              aspernatur perspiciatis molestias reiciendis laudantium officia
              porro quo ipsum. Facilis, aliquid officiis.
            </p>
          </div>
          <button>Mehr lesen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.blog-pic {
  @apply my-4 h-40  w-40 self-center text-emerald-900;
}

h2 {
  @apply ml-5 py-4 text-center text-3xl font-bold text-green-700;
}

.card {
  @apply flex flex-col overflow-hidden rounded-md bg-green-50 shadow-md shadow-zinc-700;
}
.card h3 {
  @apply ml-6 text-xl  font-semibold text-green-600;
}
.card p {
  @apply text-sm text-emerald-800 line-clamp-5;
}

.card button {
  @apply mx-4 my-3 rounded-md bg-sky-400 py-4 transition-all duration-200 hover:bg-green-700;
}
</style>
