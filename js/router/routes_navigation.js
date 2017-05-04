/**
 * Created by xiaox on 17/4/10.
 */
const app1 = resolve => require(['../components/main/App1.vue'], resolve);
const app2 = resolve => require(['../components/main/App2.vue'], resolve);
const app3 = resolve => require(['../components/main/App3.vue'], resolve);
const app4 = resolve => require(['../components/main/App4.vue'], resolve);

const pm = resolve => require(['../components/main/Pm.vue'], resolve);

const routes_navigation = [
    {path: '/app1', name: "app1", components: {mainRouter: app1}},
    {path: '/app2', name: "app2", components: {mainRouter: app2}},
    {path: '/app3', name: "app3", components: {mainRouter: app3}},
    {path: '/app4', name: "app4", components: {mainRouter: app4}},
    {path: '/pm', name: "pm", components: {mainRouter: pm}},
];

export default routes_navigation