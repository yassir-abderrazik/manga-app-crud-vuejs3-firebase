<template>
  <div class="mx-2">
    <!-- Image -->
    <a href="" class="bg-green-500">
      <img :src="manga.image" class="w-full" />
    </a>
    <div class="bg-gray-800 rounded-b-xl">
      <!-- Manga Title -->
      <div class="text-center py-2">
        <a
          href="#"
          class="hover:text-purple-500 text-xl text-gray-200 font-semibold"
        >
          {{ manga.title }}
        </a>
      </div>

      <!-- Category Tags -->
      <div class="flex flex-col">
        <div v-for="(tag, index) in manga.tags" :key="index">
          <a
            href="#"
            class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 ml-2 px-2 mb-1 rounded-full"
          >
            #{{ tag }}
          </a>
        </div>
      </div>
      <div class="flex flex-col">
        <router-link
          :to="{
            name: 'showManga',
            params: { id: manga.id, slug: manga.slug },
          }"
          class="text-gray-800 text-center font-semibold bg-slate-100 mx-4 my-2 px-4 py-1 rounded-lg hover:bg-gray-500 hover:text-white"
        >
          More Info
        </router-link>

        <router-link
          :to="{
            name: 'updateManga',
            params: { id: manga.id, slug: manga.slug },
          }"
          class="text-gray-800 font-semibold bg-yellow-500 text-center mx-4 my-2 px-4 py-1 rounded-lg hover:bg-yellow-600"
        >
          Edit
        </router-link>
        <button
          @click="deleteManga(manga.id)"
          class="text-white font-semibold bg-red-500 mx-4 my-2 px-4 py-1 rounded-lg hover:bg-red-600 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { db } from "@/firebase/config";
import { useRouter } from "vue-router";
export default {
  props: ["manga"],
  setup() {
    const error = ref("");
    const router = useRouter();
    const deleteManga = async (id) => {
      try {
        const res = await db.collection("mangas").doc(id).delete();
        router.push({ name: "home" });
      } catch (err) {
        error.value = err.message;
      }
    };
    return { deleteManga };
  },
};
</script>
