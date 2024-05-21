<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>This is A Details for {{ id }}</p>
    <p>{{ job.details }}</p>
    Trạng Thái: <input type="checkbox" v-model="job.completed" />
  </div>
  <div v-else>
    <p>Loading Job....</p>
  </div>
</template>

<script>
import dataUser from "../data/fetchUser";
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    console.log(this.id);
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log("error: " + err));
  },
};
</script>

<style></style>
