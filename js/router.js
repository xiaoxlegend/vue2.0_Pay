/**
 * Created by xiaox on 17/3/2.
 */

import VueRouter from 'vue-router';

const app1 = resolve => require(['./components/main/App1.vue'], resolve);
const app2 = resolve => require(['./components/main/App2.vue'], resolve);
const app3 = resolve => require(['./components/main/App3.vue'], resolve);
const app4 = resolve => require(['./components/main/App4.vue'], resolve);

const routes = [
    {path: '/app1', name: "app1", components: {mainRouter: app1}},
    {path: '/app2', name: "app2", components: {mainRouter: app2}},
    {path: '/app3', name: "app3", components: {mainRouter: app3}},
    {path: '/app4', name: "app4", components: {mainRouter: app4}}
];

const router = new VueRouter({
    routes: routes
})

export {
    router
}