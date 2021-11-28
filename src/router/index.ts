import VueRouter, { RouteConfig } from 'vue-router';
import TypingTest from '../pages/TypingTest.vue';

const routes: RouteConfig[] = [
    { name: 'TypingTest', path: '/typing-test', component: TypingTest },
    { path: '/', redirect: { name: 'TypingTest' } },
];

export const router = new VueRouter({
    routes,
    mode: 'history',
});
