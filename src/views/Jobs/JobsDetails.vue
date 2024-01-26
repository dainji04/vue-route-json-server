<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>This is A Details for {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("https://localhost:3000/jobs" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => err.message);
  },
};
</script>

<style></style>
