<template>
  <div class="single" :class="border">
    <p>{{ obj.task }}</p>
    <p style="color: blue" @click="$emit('deleteTask', index)">Delete</p>
    <p>{{ obj.completed ? "Complete" : " Not Complete" }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    obj: Object,
    index: Number,
  },
  emits: ["deleteTask"],
  setup(props) {
    let border = computed(() => {
      return props.obj.completed ? "true" : "false";
    });

    return {
        border
    }
  },
};
</script>

<style scoped>
.single {
  background-color: whitesmoke;
  color: white;
  margin: 20px;
  width: 600px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  border-radius: 15px;
}

.single p {
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
}

.true {
  border: 5px solid green;
}

.false {
  border: 5px solid red;
}
</style>
