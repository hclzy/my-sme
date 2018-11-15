import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


import BetPage from './views/bet/index'
import Trend from './views/bet/trend'
import './style/bet.less'
import './style/common.less'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/*<BetPage />*/}
                    <Switch>
                        <Route exact  path="/" component={BetPage}/>
                        {/*<Route path='/BetPage' component={BetPage}></Route>*/}
                        <Route path='/Trend' component={Trend} />
                    </Switch>

                </div>
            </Router>

        );
    }
}
export default  App
