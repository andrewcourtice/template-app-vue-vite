<template>
    <div class="app" layout="row center-center">
        <div>
            <h1>Vue-Vite Starter</h1>
            <ul>
                <li layout="row center-justify" v-for="task in tasks" :key="task.id">
                    <div>{{ task.value }}</div>
                    <div>Is complete: {{ task.isComplete }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';

import {
    tasks,
    addTask,
    completeTask,
    removeTask
} from './stores/tasks';

export default defineComponent({

    setup() {
        return {
            tasks,
            addTask,
            completeTask,
            removeTask
        };
    }

});
</script>

<style lang="scss">

    .app {
        width: 100%;
        height: 100%;
    }

</style>