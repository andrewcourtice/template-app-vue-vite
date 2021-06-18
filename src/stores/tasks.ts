import {
    createStore
} from '@harlem/core';

import {
    reset as _reset
} from '@harlem/plugin-reset';

interface Task {
    id: number;
    value: string;
    isComplete: boolean;
    created: number;
}

interface State {
    tasks: Task[];
};

const NAME = 'tasks';

const STATE: State = {
    tasks: [{
        id: 0,
        value: 'My first task',
        isComplete: false,
        created: Date.now()
    }]
};

const {
    getter,
    mutation,
    ...store
} = createStore(NAME, STATE);

export const {
    state,
    onBeforeMutation,
    onAfterMutation
} = store;

export const reset = () => _reset(NAME);

export const tasks = getter('tasks', state => state.tasks.slice().sort((a, b) => a.created - b.created));
export const completeTasks = getter('complete-tasks', () => tasks.value.filter(task => task.isComplete));
export const incompleteTasks = getter('incomplete-tasks', () => tasks.value.filter(task => !task.isComplete));


/**
 * Add a new task to the store
 * 
 * @returns The id of the newly added task
 * @param payload - The value/description of the task
 * @example "Do the laundry"
 */
export const addTask = mutation('add-task', (state, value: string) => {
    const id = Math.random() * 100000;

    state.tasks.push({
        id,
        value,
        isComplete: false,
        created: Date.now()
    });

    return id;
});


/**
 * Marks the specified task as complete
 * 
 * @param payload - The id of the task to mark as complete
 */
export const completeTask = mutation('complete-task', (state, id: number) => {
    state.tasks = state.tasks.map(task => ({
        ...task,
        isComplete: task.isComplete || task.id === id
    }))
});


/**
 * Remove the specified task from the store
 * 
 * @param payload - The id of the task to remove
 */
export const removeTask = mutation('remove-task', (state, id: number) => {
    state.tasks = state.tasks.filter(task => task.id !== id);
});