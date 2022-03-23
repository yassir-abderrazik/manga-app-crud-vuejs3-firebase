<template>
  <div class="bg-black">
    <h1 class="text-white text-center font-bold text-3xl pt-10">Manga List</h1>
    <div class="flex justify-end mr-10">

    <router-link
      :to="{ name: 'createManga' }"
      class="bg-gray-700 text-white text-center py-2 px-4 rounded-md "
      >Add Manga</router-link
    >
    </div>
    <div class="bg-black flex items-center justify-center">
      <div class="grid md:grid-cols-4 md:gap-2 sm:grid-cols-1 sm:gap-2 py-4">
        <div
          class="flex flex-col gap-1 mb-10"
          v-for="manga in mangas"
          :key="manga.id"
        >
          <Manga :manga="manga" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Manga from "../components/OneManga.vue";
import getMangas from "../composables/mangas/getMangas";
export default {
  components: { Manga },
  setup() {
    const { mangas, error, load } = getMangas();
    load();
    return { mangas, error };
  },
};
</script>
