import Harlem from '@harlem/core';
import createResetPlugin from '@harlem/plugin-reset';

import {
    createApp
} from 'vue';

function initialise() {
    createApp({
        setup: () => () => {}
    })
    .use(Harlem, {
        plugins: [
            createResetPlugin()
        ]
    })
    .mount(document.body);
}

initialise();