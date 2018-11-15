import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SSC from './components/ssc'
import BetNav from './components/betNav'
import { getTabLottery } from './bet.redux'

export default class BetIndex extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    getData(){
        console.log(getTabLottery)
    }
    render(){
        return(
            <div className='betWrap'>
                <BetNav />

                {/*<SSC />*/}
            </div>

        )
    }
}