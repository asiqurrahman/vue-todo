<template>
    <div class="Todo">
        <div class="heading">
            <h1>Task Tracker</h1>
            <button @click='showinput = !showinput'>Add</button>
        </div>
        <div v-show="showinput">
            <Field @addTask="addTask"/>
        </div>
        <div v-for="(obj, index) in data" :key="index" class="tasks">
            <Task :obj="obj" @dblclick="setComplete(index)" :index="index" @deleteTask="deleteTask"/>
        </div>
    </div>
</template>

<script setup>
import Field from './Field.vue'
import Task from './Task.vue'
import {ref, reactive, watch} from 'vue'

let showinput = ref(false)
let data = reactive([])

const setComplete = (index) => {
    data[index].completed = !data[index].completed
}

const addTask = (text) => {
    data.unshift({task: text, completed: false})
    showinput.value = false
}

const deleteTask = (index) => {
    data.splice(index, 1)
}

watch(data, (currentValue, oldValue) => {
  if(currentValue){
    alert('changed')
  }
});


</script>


<style>
.Todo {
    width: 700px;
    min-height: 100px;
    height: fit-content;
    background-color: #1F222A;
    border-radius: 10px;
    color: whitesmoke;
}

.heading {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.heading button {
    all: unset;
    background-color: green;
    color: white;
    font-size: 1.5em;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}

.tasks {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>