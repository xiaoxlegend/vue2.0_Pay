/**
 * Created by xiaox on 17/3/3.
 */
export default ({
    switchStaffOnlineState(context){
        if(context.state.staffState.staffOnlineState == "offline"){
            alert(1);
            context.commit("switchOnline");
        }else if(context.state.staffState.staffOnlineState == "online"){
            alert(2);
            context.commit("switchOffline");
        }
    },
    changeWelcomeSentences({commit},obj){
        commit("changeWelcomeWord",{
            state: obj[0],
            welcomeStr: obj[1]
        })
    },
    pm_detail({commit},row){
        commit("pm_detail_show", row)
    },
    pm_add_showToggle({commit}){
        commit("pm_add_showToggle")
    },
    addNewDataToTable({commit},data){
        commit("addNewDataToTable", data);
        commit("pm_add_showToggle");
    },
    loadTableData({commit},config){
        commit("loadTableData", config);
    }
})