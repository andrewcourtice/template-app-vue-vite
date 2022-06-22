import {
    beforeEach,
    describe,
    expect,
    test,
} from 'vitest';

import {
    addTask,
    completeTask,
    completeTasks,
    removeTask,
    reset,
    tasks,
} from '../../src/stores/tasks';

describe('Tasks Store', () => {

    beforeEach(() => reset());

    test('Should be able to add a new task', () => {
        const id = addTask('My new task');
        const isTaskPresent = tasks.value.some(task => task.id === id);

        expect(isTaskPresent).toBe(true);
    });

    test('Should be able to complete a task', () => {
        const {
            id,
        } = tasks.value[0];

        completeTask(id);

        const isTaskCompleted = completeTasks.value.some(task => task.id === id);

        expect(isTaskCompleted).toBe(true);
    });

    test('Should be able to remove a task', () => {
        const {
            id,
        } = tasks.value[0];

        removeTask(id);

        const isTaskRemoved = !tasks.value.some(task => task.id === id);

        expect(isTaskRemoved).toBe(true);
    });

});