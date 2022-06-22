<template>
    <div class="route home-route" layout="row center-center">
        <div>
            <h1>Tasks</h1>
            <ul>
                <li v-for="task in tasks" :key="task.id" layout="row center-justify" @click="completeTask(task.id)">
                    <div>{{ task.value }}</div>
                    <div>Is complete: {{ task.isComplete }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    completeTask,
    tasks,
} from '~/stores/tasks';
</script>