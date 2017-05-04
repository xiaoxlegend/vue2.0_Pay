/**
 * Created by xiaox on 17/4/10.
 */
const app5 = resolve => require(['../components/main/App5.vue'], resolve);
const app6 = resolve => require(['../components/main/App6.vue'], resolve);
const app7 = resolve => require(['../components/main/App7.vue'], resolve);

const routes_app2 = [
    {path: '/app5', name: 'app5', components: {mainRouter: app5}},
    {path: '/app6', name: 'app6', components: {mainRouter: app6}},
    {path: '/app7', name: 'app7', components: {mainRouter: app7}}
];

export default routes_app2