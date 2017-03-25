import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './store/store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../resource/bootstrap/css/bootstrap.css';
import '../resource/bootstrap/fontIcon/font-awesome/4_6_1/css/font-awesome.min.css';
import '../resource/adminLTE/dist/css/AdminLTE.css';
import '../resource/adminLTE/dist/ext-css/AdminLTE-itim.css';
import '../resource/adminLTE/dist/css/skins/_all-skins.css';

import Pay from './components/Pay';
import {router} from './router';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

//入口文件
new Vue({
    el: '#app',
    components: {Pay},
    store: store,
    router: router
})





