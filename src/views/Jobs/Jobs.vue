<template>
  <h1>Jobs</h1>
  <div class="jobs-list">
    <div class="div" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobsDetails', params: { id: job.id } }">
        <h4>{{ job.title }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json()) // return a promise
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.jobs-list {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.div {
  width: 200px;
  margin-top: 50px;
  background-color: #ccc;
  font-size: 1.4rem;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: bold;
  padding: 10px 30px;
}
a {
  color: #fff;

  text-decoration: none;
}
</style>
