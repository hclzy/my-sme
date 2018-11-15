import React,{Component} from 'react'

import {connect} from 'react-redux'


import { getTabLottery } from '../bet.redux'


@connect(
    state=>state.TabNav,
    { getTabLottery }
)

export default class Ssc extends Component{

    constructor(props){
        super(props);
        this.state={
            active:0,
            choosedNavIdx:0,
        }
    }
    componentWillMount() {
        this.getPlayData();
        this.props.getTabLottery("genius")
    }
    componentDidMount(){
        // this.props.getTabLottery("genius")
    }

    getPlayList(idx){
        this.setState({
            active:idx,
            loading:true,
            choosedNavIdx:idx
        });
        console.log(idx);
        console.log("choosedNavIdx:"+this.state.choosedNavIdx)
    }

    render(){
        // let _this = this;
        return(
            <div className='sscMain'>
                <div className="headtype">
                    <ul className="typelist">
                       {/* {_this.state.dataList && _this.state.dataList.map((item,idx) =>{
                            return (
                                <li
                                    key={idx}
                                    className={this.state.active ===idx ? 'active' : null}
                                    onClick={()=>{this.getPlayList(idx)}}>
                                    {item.groupName}
                                    </li>
                            )
                        })}*/}

                        {this.props.tabLotteryList.map((item,idx) =>{
                            return (
                                <li
                                    key={idx}
                                    className={this.state.active ===idx ? 'active' : null}
                                    onClick={()=>{this.getPlayList(idx,0)}}>
                                    {item.groupName}
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <div className="playrealcon">

                    <div className="secondNav">
                        <div className="secondNavL">
                            <div >
                                <span>{this.props.tabLotteryList[this.choosedNavIdx]}</span>
                                <h4>
                                   {/* {this.props.tabLotteryList[this.choosedNavIdx].childList.map((item,idx)=>{
                                        return(
                                            <em
                                                className={this.state.active ===idx ? 'active' : null}
                                                // onClick={()=>{this.getPlayList(choosedNavIdx,idx)}}
                                            >{item.name}</em>
                                        )
                                    })}*/}

                                </h4>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}