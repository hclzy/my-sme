import React,{Component}from 'react'
import {post} from '../../../fetch/index';
import {get} from "../../../fetch/index";

import api from '../server/server'
import http from '../../../fetch/axios'
export default class BetNav extends Component{

    constructor(props){
        super(props);
        this.state={
            active:0,
        }
    }
    componentWillMount(){
        this.getNavList()
    }
    async getNavList(){/*get play dataList*/
        await http.get(api.navLottery).then((res) => {
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
    render(){
        let _this = this;
        return(
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
        )
    }
}