<template>
  <div class="api">
    <h3>{{ name }}</h3>
    <p>{{ user }}</p>
    <p>{{ user2 }}</p>
    <button @click="changeSomething">Click me!!!</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const name = ref("Nguyen Van A");
    const user2 = ref({
      // ref for a single type (string, number, boolean)
      name: "Nguyen Van B",
      age: 18,
      id: 0,
    });
    const user = reactive({
      // reactive for object, array type
      name: "Nguyen Van A",
      age: 18,
      id: 1,
    });

    function changeSomething() {
      name.value = "Nguyen Cuong Dai";
      user.name = "Nguyen Cuong Dai"; // user name reactive type object
      user.id = ++user.id; // user id reactive type object
      user.age = 20; // user age reactive type object
      user2.value.name = "Nguyen Tran Phuong Yen"; // user name ref type object
      user2.value.age = 20; // user age ref type object
      console.log(name);
      console.log(user);
      console.log(user2);
    }
    return {
      name,
      user,
      user2,
      changeSomething,
    };
  },
};
</script>

<style></style>
