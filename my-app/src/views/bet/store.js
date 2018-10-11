import { createStore } from "redux";

import { BetReducer } from './reducer';

/*
let store = createStore(rootReducer);

export default store;*/

// export default combineReducers({TabNav})



let store = createStore(BetReducer)