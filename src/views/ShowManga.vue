<template>
  <div>
    <div v-if="error" class="w-full p-8 text-center text-2xl mt-10 bg-red-500 text-white">
      {{ error }}
    </div>
    <div v-else class="bg-black py-4 flex justify-center">
      <div class="sm:flex space-x-7 md:items-start items-center">
        <div class="mb-4">
          <img class="rounded-md md:w-80" :src="manga.image" alt="brad" />
        </div>
        <div>
          <h1 class="text-slate-100 text-4xl font-bold my-2">
            {{ manga.title }}
          </h1>
          <p class="text-slate-100 text-lg tracking-wide mb-6 md:max-w-lg">
            {{ manga.content }}
          </p>
          <div v-for="(tag, index) in manga.tags" :key="index">
            <a
              href="#"
              class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 ml-2 px-2 mb-1 rounded-full"
            >
              #{{ tag }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import showManga from "../composables/mangas/showManga";
export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const { manga, error, load } = showManga();
    load(id);
    return { manga, error };
  },
};
</script>
