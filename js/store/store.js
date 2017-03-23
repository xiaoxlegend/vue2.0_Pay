/**
 * Created by xiaox on 17/3/3.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const staffState = {
    staffOnlineState: "offline"

}

const welcome = {
    welcomeWord: ""
}

export default new Vuex.Store({
    state: {
        staffState: staffState,
        welcome: welcome
    },
    mutations: mutations,
    actions: actions,
    getters: getters
})