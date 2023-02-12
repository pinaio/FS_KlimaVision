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

        <BlogCard
          blog-headline=" Das hier ist Blog 3"
          blog-text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos et, nisi possimus numquam optio quod harum debitis ullam error quidem sequi quibusdam dolor natus doloremque voluptatibus expedita est, nobis atque pariatur nulla ducimus ut. Doloremque veritatis quidem natus, in dolores dicta illo voluptas illum quod nisi esse dolorem minus, architecto repudiandae ipsum tenetur ullam, similique sequi molestias earum dolor asperiores. Eius excepturi numquam est voluptates architecto earum, sint, magni nesciunt, odit dolorem possimus. At soluta error architecto ut, vitae aut. Laborum, quidem fuga! Mollitia minima, tempore nisi sit deleniti sed? Molestias doloribus labore doloremque, consequatur illo aut pariatur inventore? Ipsum doloremque dignissimos itaque expedita molestiae ea neque alias nostrum quasi? Tenetur dolor laboriosam aut, voluptas ipsam eaque architecto cum earum reprehenderit. Voluptas fugiat consequatur rerum minus voluptatum maiores modi repellendus, dolorum eveniet, cupiditate ipsum recusandae. Voluptas, provident quisquam nisi voluptates modi ullam architecto ad dignissimos? Excepturi rerum necessitatibus omnis iure, officia suscipit possimus doloremque perferendis magni modi nihil doloribus, odit cum! Accusamus reiciendis odio adipisci doloribus, nobis nesciunt doloremque, laudantium asperiores cum ullam quibusdam tenetur, temporibus veritatis? Eum sapiente a ducimus assumenda odio architecto numquam dolores corporis ea placeat ipsam beatae alias neque, enim ullam quia repudiandae distinctio rerum. Culpa."
          image-file="{{img1Url}}"
          image-alt="Hallooooo"
          ><img :src="img1Url" alt="Halloooo"
        /></BlogCard>
        <BlogCard
          blog-headline=" Das hier ist Blog 3"
          blog-text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos et, nisi possimus numquam optio quod harum debitis ullam error quidem sequi quibusdam dolor natus doloremque voluptatibus expedita est, nobis atque pariatur nulla ducimus ut. Doloremque veritatis quidem natus, in dolores dicta illo voluptas illum quod nisi esse dolorem minus, architecto repudiandae ipsum tenetur ullam, similique sequi molestias earum dolor asperiores. Eius excepturi numquam est voluptates architecto earum, sint, magni nesciunt, odit dolorem possimus. At soluta error architecto ut, vitae aut. Laborum, quidem fuga! Mollitia minima, tempore nisi sit deleniti sed? Molestias doloribus labore doloremque, consequatur illo aut pariatur inventore? Ipsum doloremque dignissimos itaque expedita molestiae ea neque alias nostrum quasi? Tenetur dolor laboriosam aut, voluptas ipsam eaque architecto cum earum reprehenderit. Voluptas fugiat consequatur rerum minus voluptatum maiores modi repellendus, dolorum eveniet, cupiditate ipsum recusandae. Voluptas, provident quisquam nisi voluptates modi ullam architecto ad dignissimos? Excepturi rerum necessitatibus omnis iure, officia suscipit possimus doloremque perferendis magni modi nihil doloribus, odit cum! Accusamus reiciendis odio adipisci doloribus, nobis nesciunt doloremque, laudantium asperiores cum ullam quibusdam tenetur, temporibus veritatis? Eum sapiente a ducimus assumenda odio architecto numquam dolores corporis ea placeat ipsam beatae alias neque, enim ullam quia repudiandae distinctio rerum. Culpa."
          image-file="{{img1Url}}"
          image-alt="Hallooooo"
          ><img :src="img1Url" alt="Halloooo"
        /></BlogCard>
        <BlogCard
          blog-headline=" Das hier ist Blog 3"
          blog-text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos et, nisi possimus numquam optio quod harum debitis ullam error quidem sequi quibusdam dolor natus doloremque voluptatibus expedita est, nobis atque pariatur nulla ducimus ut. Doloremque veritatis quidem natus, in dolores dicta illo voluptas illum quod nisi esse dolorem minus, architecto repudiandae ipsum tenetur ullam, similique sequi molestias earum dolor asperiores. Eius excepturi numquam est voluptates architecto earum, sint, magni nesciunt, odit dolorem possimus. At soluta error architecto ut, vitae aut. Laborum, quidem fuga! Mollitia minima, tempore nisi sit deleniti sed? Molestias doloribus labore doloremque, consequatur illo aut pariatur inventore? Ipsum doloremque dignissimos itaque expedita molestiae ea neque alias nostrum quasi? Tenetur dolor laboriosam aut, voluptas ipsam eaque architecto cum earum reprehenderit. Voluptas fugiat consequatur rerum minus voluptatum maiores modi repellendus, dolorum eveniet, cupiditate ipsum recusandae. Voluptas, provident quisquam nisi voluptates modi ullam architecto ad dignissimos? Excepturi rerum necessitatibus omnis iure, officia suscipit possimus doloremque perferendis magni modi nihil doloribus, odit cum! Accusamus reiciendis odio adipisci doloribus, nobis nesciunt doloremque, laudantium asperiores cum ullam quibusdam tenetur, temporibus veritatis? Eum sapiente a ducimus assumenda odio architecto numquam dolores corporis ea placeat ipsam beatae alias neque, enim ullam quia repudiandae distinctio rerum. Culpa."
          image-file="{{img1Url}}"
          image-alt="Hallooooo"
          ><img :src="img1Url" alt="Halloooo"
        /></BlogCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogCard from "./BlogCard.vue";
import img1Url from "../assets/images/earth.png";
</script>

<style scoped>
h2 {
  @apply ml-5 py-4 text-center text-3xl font-bold text-green-700;
}
</style>
