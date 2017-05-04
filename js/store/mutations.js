/**
 * Created by xiaox on 17/3/3.
 */
export default ({
    switchOnline(state){
        state.staffState.staffOnlineState = "online";
    },
    switchOffline(state){
        state.staffState.staffOnlineState = "offline";
    },
    changeWelcomeWord(state, obj){
        if (obj.state) {
            state.welcome.welcomeWord = obj.welcomeStr;
        } else {
            state.welcome.welcomeWord = "";
        }
    },
    pm_detail_show(state, obj){
        state.pmData = obj;
    },
    pm_add_showToggle(state){
        if (state.modal_add) {
            state.modal_add = false;
        } else {
            state.modal_add = true;
        }
        state.formValidate = {
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
    pm_add_hide(state){
        if (!state.modal_add) {
            state.modal_add = null;
        }
        state.modal_add = false;
    },
    addNewDataToTable(state, obj){
        var personsArr = obj["selectedPersons"];
        var personStr = new Array();
        for (var i = 0; i < personsArr.length; i++) {
            var person = personsArr[i];
            personStr.push(person["name"]);
        }

        var timeArr = obj["datePeriod"];
        var timeStr = new Array();
        for (var i = 0; i < timeArr.length; i++) {
            var time = timeArr[i];
            var data = new Date(time);
            var day = data.pattern("yyyy/MM/dd");
            timeStr.push(day);
        }

        var newObj = {
            "code": obj["code"],
            "name": obj["name"],
            "responsible": personStr.join("，"),
            "datePeriod": timeStr.join("-"),
            "rate": obj["rate"],
            "state": "ready"
        }
        state.dataTable.push(newObj);
    },
    loadTableData(state, config){
        let currentPage = config["currentPage"];
        let pageSize = config["pageSize"];
        state.dataTable.slice((currentPage - 1) * parseInt(pageSize), currentPage * parseInt(pageSize));
    }
})