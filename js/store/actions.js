/**
 * Created by xiaox on 17/3/3.
 */
export default ({
    switchStaffOnlineState(context){
        if(context.state.staffOnlineState == "offline"){
            alert(1);
            context.commit("switchOnline");
        }else if(context.state.staffOnlineState == "online"){
            alert(2);
            context.commit("switchOffline");
        }
    },
    changeWelcomeSentences({commit},obj){
        commit("changeWelcomeWord",{
            state: obj[0],
            welcomeStr: obj[1]
        })
    }
})