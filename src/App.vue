<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'composition' }">Composition API</router-link>
  </nav>
  <div class="options">
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
    <button @click="redirect">Redirect</button>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    redirect() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

p {
  text-align: justify;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.options {
  display: flex;
  gap: 50px;
}
.options > button {
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
}
</style>
