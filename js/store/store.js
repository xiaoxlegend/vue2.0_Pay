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

const pmData = {}

export default new Vuex.Store({
    state: {
        staffState: staffState,
        welcome: welcome,
        pmData: pmData,
        modal_add: false,
        dataTable: [
            {
                "code": "PROJECT_T_1",
                "name": "项目T_1",
                "responsible": "张三",
                "datePeriod": "2012/02/11-2013/09/08",
                "rate": '3.8',
                "state": "ready"
            },
            {
                "code": "PROJECT_T_2",
                "name": "项目T_2",
                "responsible": "李四",
                "datePeriod": "2012/03/23-2013/11/01",
                "rate": '4.5',
                "state": "running"
            },
            {
                "code": "PROJECT_T_3",
                "name": "项目T_3",
                "responsible": "王五",
                "datePeriod": "2014/01/12-2016/10/09",
                "rate": '1.2',
                "state": "running"
            },
            {
                "code": "PROJECT_T_4",
                "name": "项目T_4",
                "responsible": "赵六",
                "datePeriod": "2015/07/08-2017/01/05",
                "rate": '3.6',
                "state": "running"
            },
            {
                "code": "PROJECT_T_5",
                "name": "项目T_5",
                "responsible": "孙七",
                "datePeriod": "2013/05/22-2014/02/02",
                "rate": '4.2',
                "state": "completed"
            },
            {
                "code": "PROJECT_T_6",
                "name": "项目T_6",
                "responsible": "王大",
                "datePeriod": "2010/04/21-2012/01/22",
                "rate": '2.7',
                "state": "completed"
            },
            {
                "code": "PROJECT_T_7",
                "name": "项目T_7",
                "responsible": "王大",
                "datePeriod": "2010/04/21-2012/01/22",
                "rate": '2.7',
                "state": "completed"
            },
            {
                "code": "PROJECT_T_8",
                "name": "项目T_8",
                "responsible": "王大",
                "datePeriod": "2010/04/21-2012/01/22",
                "rate": '2.7',
                "state": "completed"
            },
            {
                "code": "PROJECT_T_9",
                "name": "项目T_9",
                "responsible": "王大",
                "datePeriod": "2010/04/21-2012/01/22",
                "rate": '2.7',
                "state": "completed"
            },
            {
                "code": "PROJECT_T_10",
                "name": "项目T_10",
                "responsible": "王大",
                "datePeriod": "2010/04/21-2012/01/22",
                "rate": '2.7',
                "state": "completed"
            },
            {
                "code": "PROJECT_T_11",
                "name": "项目T_11",
                "responsible": "王大",
                "datePeriod": "2010/04/21-2012/01/22",
                "rate": '2.7',
                "state": "completed"
            }
        ],
        formValidate:{
            code: '',
            name: '',
            desc: '',
            amount: '1',
            datePeriod: "",
            desc: "",
            selectedPersons: [],
            rate: 3
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
})