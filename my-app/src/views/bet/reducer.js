import { combineReducers } from 'redux'

import  { Tab_Lottery }  from './action';

const initialState = {
    tabLotteryList: [],
}
export function TabNav(state=initialState, action) {
    switch (action.type) {
        case Tab_Lottery: {
            return {...state, tabLotteryList: action.payload}
        }

        default:
            return state;
    }
}
const BetReducer = combineReducers({
    TabNav,
})

export default BetReducer;
