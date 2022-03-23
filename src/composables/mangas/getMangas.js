import { ref } from "vue";
import { db } from "../../firebase/config";
const getMangas = () => {
  const mangas = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const res = await db.collection("mangas").get();
      mangas.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch(err) {
      error.value = err.message;
    }
  };
  return { mangas, error, load };
};
export default getMangas;