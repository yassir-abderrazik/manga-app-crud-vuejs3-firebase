import { ref } from "vue";
import { db } from "../../firebase/config";
const showManga = () => {
  const manga = ref({});
  const error = ref(null);
  const load = async (id) => {
    try {
      const res = await db.collection("mangas").doc(id).get();

      if (!res.exists) {
        throw Error("this manga doesn't exist !");
      }
      manga.value = { ...res.data(), id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { manga, error, load };
};
export default showManga;
