import './styles/index.scss';

import Harlem from '@harlem/core';
import createDevtoolsPlugin from '@harlem/plugin-devtools';

import App from './app.vue';

import routes from '~/routes';

import {
    createApp,
} from 'vue';

import {
    createRouter,
    createWebHistory,
} from 'vue-router';

function start() {
    const app = createApp(App);
    const router = createRouter({
        routes,
        history: createWebHistory(),
    });

    app.use(router);
    app.use(Harlem, {
        plugins: [
            createDevtoolsPlugin(),
        ],
    });

    app.mount('#app');
}

start();