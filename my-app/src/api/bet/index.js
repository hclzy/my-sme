import Axios from '../axios'

export default {
    right: 'https://api.sfcp.bet/api/Bet/GetTypePlayList', // 正确路径

    navLottery:'https://api.china-iea.org/api/Bet/GetTypeList?isGov=true'//导航彩种
}

export function getLotterrInfo() {
    let requestUrl = 'https://api.sfcp.bet/api/Bet/GetTypePlayList';
    return Axios({
        url: requestUrl,
        method: 'get',
    })
} 