import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import '../resource/bootstrap/css/bootstrap.css';
import '../resource/bootstrap/fontIcon/font-awesome/4_6_1/css/font-awesome.min.css';
import '../resource/adminLTE/dist/css/AdminLTE.css';
import '../resource/adminLTE/dist/ext-css/AdminLTE-itim.css';
import '../resource/adminLTE/dist/css/skins/_all-skins.css';

import '../resource/util/Date';

import Pay from './components/Pay';
import router from './router/router';

const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = isDebug_mode;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(iView);

//入口文件
new Vue({
    el: '#app',
    components: {Pay},
    store: store,
    router: router
})





