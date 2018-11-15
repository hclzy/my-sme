import http from "../../api/axios";
import api from "../../api/bet/index";

const Tab_Lottery = 'Tab_Lottery';//彩种
const Lottery_Play = 'Lottery_Play';//彩种玩法

/*彩种*/
function tabLottery(data) {
    return{
        type: Tab_Lottery,
        payload:data
    }
}
/*彩种玩法*/

function lotteryPlay(data) {
    return{
        type: Lottery_Play,
        payload:data
    }
}

const initialState = {
    tabLotteryList: [],
    lotteryPlayData:[]
};

export function TabNav(state=initialState, action) {
    switch (action.type) {
        case Tab_Lottery: {
            return {...state, tabLotteryList: action.payload}
        }

        default:
            return state;
    }
}

export function getTabLottery() {
    return dispatch =>{
        http.get(api.right,{typeId:1,isGov:true})
            .then(res=>{
                dispatch(tabLottery(res.data.data))
            })

    }
}
