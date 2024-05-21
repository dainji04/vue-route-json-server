<template>
  <h1>Jobs</h1>
  <div class="jobs-list">
    <div class="div" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobsDetails', params: { id: job.id } }">
        <h4>{{ job.title }}</h4>
      </router-link>
    </div>

    <table style="width: 100%">
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  </div>
</template>

<script>
import dataUser from "../data/fetchUser";
export default {
  setup() {
    const { fetchAll, jobs } = dataUser();

    fetchAll();

    return { jobs };
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
