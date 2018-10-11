import { applyMiddleware,createStore ,compose} from 'redux'//引入规则文件
import thunk  from 'redux-thunk'
import rootReducer from '../reducers/index.js'


export default function configStore(initState){
    // 创建store
    const store = createStore(
        rootReducer, initState,
    // 如果安装了redux插件可按照版本打开下面的注释
    // window.devToolsExtension ? window.devToolsExtension() : undefined,
    //  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
        ) //插件调试，未安装会报错

    //
    )
    return store
}
