// 规则性文件
import { combineReducers } from 'redux'
import number from './number'
import {TabNav}  from '../views/bet/bet.redux'
// 如果有多个规则，则引入多个文件
// import XXXX from './XXXX'
// 创建规则
export default combineReducers({
// XXXX,
    number,
    TabNav

})
