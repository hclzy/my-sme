import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import BetPage from './views/bet/index'
import './App.css'
class App extends Component {
    render() {
        return (
            <div className="App">
              {/*  <div className="App-content">
                    路由配置
                    <Router>
                        <div className="content-box">
                            编写导航
                            <ul className="nav">
                                <li><Link to="/">首页</Link></li>
                                <li><Link to="/list">列表页</Link></li>
                                <li><Link to="/mine/mine1">我的页面二级路由</Link></li>
                                link指向二级路由的默认页面
                                </ul>
                            路由匹配
                            <div className="content">
                                <Route exact path="/" component={Home}/>
                                <Route path="/list" component={List}/>
                                <Route path="/mine" component={Mine}/>
                            </div>
                        </div>
                    </Router>
                </div>
                <TestRedux />*/}
                <BetPage />
            </div>
        );
    }
}
export default App
