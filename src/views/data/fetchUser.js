import { ref } from "vue";

export default function (id) {
  const jobs = ref([]);
  const err = ref(null);

  const fetchAll = async () => {
    try {
      const response = await fetch("http://localhost:3000/jobs");
      console.log(response);
      if (!response.ok) throw new Error("something went wrong");
      jobs.value = await response.json();
    } catch (err) {
      err.value = err;
      console.log("error:", err.value);
    }
  };

  return { fetchAll, err, jobs };
}
