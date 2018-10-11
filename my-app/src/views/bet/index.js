import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import SSC from './components/ssc-page'
import BetNav from './components/betNav'
import '../../style/bet.less'
import '../../style/common.less'

export default class BetIndex extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className='betWrap'>
                <BetNav />
                <div className='betHeader'>
                    <div className='left'>
                        <div className="no">
                            <h3>重庆时时彩</h3>
                            <p><em>1254455</em>期</p>
                        </div>
                        <div className="cutdown"></div>
                    </div>
                    <div className='mid'>
                        <div className="midL">
                            <p>第2342343544期</p>
                            <p>开奖结果</p>
                        </div>
                        <div className="winNum" >
                            <span>1</span>
                            <span>1</span>
                            <span>1</span>
                            <span>1</span>
                            <span>1</span>
                        </div>
                    </div>

                    <div className='right'>
                        <button>
                            {/*<icon class="zs-icon" name="iconZS"></icon>*/}
                            <a className="h4" >号码走势</a>
                    </button>
                    </div>
                </div>
                <div className='betMain'>
                    <SSC />
                </div>

            </div>

        )
    }
}