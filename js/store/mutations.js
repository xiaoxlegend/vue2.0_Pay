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
    changeWelcomeWord(state,obj){
        if(obj.state){
            state.welcome.welcomeWord = obj.welcomeStr;
        }else{
            state.welcome.welcomeWord = "";
        }
    }
})