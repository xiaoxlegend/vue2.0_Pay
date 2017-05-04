/**
 * Created by xiaox on 17/3/2.
 */

import VueRouter from 'vue-router';

import routes_navigation  from './routes_navigation';
import routes_app2 from './routes_app2';

const routes = routes_navigation.concat(routes_app2);

const router = new VueRouter({
    routes: routes
})

export default router