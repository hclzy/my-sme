import axios from 'axios'
import qs from 'qs'
// import store from '@/store'
// import { Message } from 'element-ui'
// import {getCookie} from '@/utils/cookie'

axios.defaults.withCredentials = true;//请求携带cookie 需要后端配置
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型

//创建实例
const instance = axios.create({
    //当创建实例的时候配置默认配置
    xsrfCookieName: 'xsrf-token',
    timeout: 5000,
});
//添加请求拦截

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

instance.interceptors.request.use(config => {
    // loading
    /*if(store.getters.token){
        config.headers['TOKEN']=getCookie('TOKEN')
    }*/
    return config
}, error => {
    return Promise.reject(error)
});
//添加响应拦截器
instance.interceptors.response.use(response => {
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
     */
    // response => {
    //   const res = response.data
    //   if (res.code !== 20000) {
    //     })
    //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //       }).then(() => {
    //         })
    //       })
    //     }
    //     return Promise.reject('error')
    //   } else {
    //     return response.data
    //   }
    // },

    return response
}, error => {
    console.log('err'+error);
    /*Message({
        Message:error.message,
        type:'error',
        duration:5*1000
    })*/
    return Promise.resolve(error.response)
});

function checkStatus (response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode (res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === -404) {
        alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
        alert(res.data.error_msg)
    }
    return res
}

export default {
    post (url, data) {
    return axios({
        method: 'post',
        // baseURL: 'https://cnodejs.org/api/v1',
        url,
        data: qs.stringify(data),

        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(
        (response) => {
            return checkStatus(response)
        }
    ).catch(
        (res) => {
            return checkCode(res)
        }
    )
},
    get (url, params) {
        return axios({
            method: 'get',
            baseURL: '',
            url,
            params, // get 请求时带的参数
            timeout: 5000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).catch(
            (res) => {
                return checkCode(res)
            }
        )
    }
}