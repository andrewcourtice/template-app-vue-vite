import type {
    RouteRecordRaw,
} from 'vue-router';

export default [
    {
        path: '/',
        component: () => import('./home/index.vue'),
    },
] as RouteRecordRaw[];