<template>
  <div class="input">
    <input v-model="text" />
    <button @click="$emit('addTask', text), text=''">Add Task</button>
  </div>
</template>

<script>
export default {
  emits: ["addTask"],
};
</script>

<script setup>
import { ref} from "vue";
let text = ref("");

</script>

<style>
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.input input {
  width: 400px;
  height: 50px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 1.5em;
  border: 1px solid purple;
}

.input button {
  height: 60px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #6675ff;
  color: white;
  cursor: pointer;
  font-size: 1.4em;
}
</style>
