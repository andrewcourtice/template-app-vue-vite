import './styles/index.scss';

import Harlem from '@harlem/core';
import createResetPlugin from '@harlem/plugin-reset';
import createDevtoolsPlugin from '@harlem/plugin-devtools';

import App from './app.vue';

import {
    createApp
} from 'vue';

function start() {
    return createApp(App)
        .use(Harlem, {
            plugins: [
                createResetPlugin(),
                createDevtoolsPlugin()
            ]
        })
        .mount('#app');
}

start();