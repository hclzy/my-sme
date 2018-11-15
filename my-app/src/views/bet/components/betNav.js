import React,{Component}from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import api from '../../../api/bet/index'
import http from '../../../api/axios'
import { getTabLottery } from '../bet.redux'
import {connect} from 'react-redux'


@connect(
    state=>state.TabNav,
    { getTabLottery }
)
export default class BetNav extends Component{

    constructor(props){
        super(props);
        this.state={
            active:0,
        }
    }
    componentWillMount(){
        this.getNavList();
        // this.getPlayData();
        this.props.getTabLottery("genius")
    }
    getNavList(){/*get play dataList*/
        http.get(api.navLottery).then((res) => {
            this.setState({
                navList: res.data.data
            })
        })
    }
    tabLottery(index){
        this.setState({
            active:index,
            loading:true
        });
    }

    getPlayList(idx){
        this.setState({
            active:idx,
            loading:true,
            choosedNavIdx:idx
        });
        console.log(idx)
        console.log("choosedNavIdx:"+this.state.choosedNavIdx)
    };

    openTrend(){
        const w=window.open('about:blank');
        w.location.href='../trend'
    }
    render(){
        let _this = this;
        return(
           <div>
               <div className='betNav'>
                   <ul>
                       {_this.state.navList && _this.state.navList.map((item,index)=>{
                           return(
                               <li key={index}
                                   className={this.state.active ===index ? 'active' : null}
                                   onClick={()=>{this.tabLottery(index)}}
                               >{item.title}</li>
                           )
                       })}
                   </ul>
               </div>
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
                       {/*<button onClick={()=>{this.openTrend()}}>*/}

                           {/*号码走势*/}

                           {/*/!*<icon class="zs-icon" name="iconZS"></icon>*!/*/}

                       {/*</button>*/}
                       <Router >
                           <div>
                               {/*<button>*/}
                                   <Link to={`/trend`} className="h4" target="_blank" replace> 号码走势</Link>

                               {/*</button>*/}
                           </div>

                       </Router>
                   </div>
               </div>
               <div className='betMain'>
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
               </div>
           </div>
        )
    }
}