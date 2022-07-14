<template>
  <div class="Main">
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.Main {
  display: flex;
  justify-content: center;
}
</style>
