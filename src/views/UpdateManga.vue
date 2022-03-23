<template>
  <div class="bg-black">
    <div class="flex justify-center">
      <div class="py-16 w-1/2 font-semibold text-gray-500 flex-col">
        <h1 class="text-white text-2xl">ADD Manga</h1>
        <form @submit.prevent="updateManga" class="space-y-4">
          <input
            class="w-full p-2 bg-gray-900 rounded-md border border-gray-700 focus:border-blue-700"
            placeholder="title"
            type="text"
            v-model="mangaUpdate.title"
          />

          <textarea
            class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
            placeholder="content"
            rows="7"
            type="text"
            v-model="mangaUpdate.content"
            id="content"
          ></textarea>

          <input
            type="text"
            placeholder="Enter a Tag"
            class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
            @keydown.enter="addTag"
          />
          <div
            v-for="(tag, index) in mangaUpdate.tags"
            :key="index"
            class="tag-input__tag"
          >
            <span @click="removeTag(index)">x</span>
            {{ tag }}
          </div>

          <input
            class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
            type="text"
            v-model="mangaUpdate.image"
            placeholder="image*"
          />
          <button class="px-4 bg-gray-50 text-black py-2 rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { db } from "../firebase/config";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const mangaUpdate = reactive({
      title: "",
      content: "",
      tags: [],
      image: "",
      slug: "",
    });
    const router = useRouter();
    const route = useRoute();
    const manga = ref({});
    const error = ref(null);
    const id = route.params.id;
    const load = async () => {
      try {
        const res = await db.collection("mangas").doc(id).get();

        if (!res.exists) {
          throw Error("this manga doesn't exist !");
        }
        manga.value = { ...res.data(), id };
        mangaUpdate.title = manga.value.title;
        mangaUpdate.content = manga.value.content;
        mangaUpdate.tags = manga.value.tags;
        mangaUpdate.image = manga.value.image;
      } catch (err) {
        error.value = err.message;
      }
    };
    load();

    const addTag = (event) => {
      event.preventDefault();
      var val = event.target.value.trim();
      if (val.length > 0) {
        mangaUpdate.tags.push(val);
        event.target.value = "";
      }
    };
    const removeTag = (index) => {
      mangaUpdate.tags.splice(index, 1);
    };

    const updateManga = async () => {
      try {
        mangaUpdate.slug = mangaUpdate.title.replace(" ", "-");
        const res = await db.collection("mangas").doc(id).update(mangaUpdate);
        router.push({ name: "manga" });
      } catch (err) {
        error.value = err.message;
      }
    };
    return { addTag, updateManga, mangaUpdate, removeTag };
  },
};
</script>

<style>
.tag-input__tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
  border-radius: 5px;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}
</style>
