import http from "../../fetch/axios";
import api from "./server/server";

export const Tab_Lottery = 'Tab_Lottery';


function tabLottery(data) {
    return{
        type: Tab_Lottery,
        payload:data
    }
}

export function getTabLottery() {
    return dispatch =>{
        http.get(api.right,{typeId:1,isGov:true})
            // .then(response => response.json())
            // .then(data => dispatch(tabLottery(data))
            .then(res=>{
                dispatch(tabLottery(res.data.data))
            })

    }
}


