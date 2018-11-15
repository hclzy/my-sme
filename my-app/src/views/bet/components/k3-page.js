import React,{Component} from 'react'
import {post} from '../../../axios/index';
import {get} from "../../../axios/index";
export default class Ssc extends Component{

    constructor(props){
        super(props);
        this.state={
            index:0,
        }
    }
    componentWillMount() {
        this.getPlayData()
    }
    getPlayData(){/*get play dataList*/
        get("https://api.sfcp.bet/api/Bet/GetTypePlayList?typeId=1&isGov=true").then((res) => {
            return res.json();
        }).then((json)=>{
            this.setState({
                dataList: json.data
            })
        }).catch(function (err) {
            console.log(err);
        })
    }
    getPlayList(idx){
        this.setState({
            active:idx,
            loading:true
        });
        console.log(idx)
    }

    render(){
        let _this = this;
        return(
            <div className='sscMain'>
                <div className="headtype">
                    快三
                    <ul className="typelist">
                        {_this.state.dataList && _this.state.dataList.map((item,idx) =>{
                            return (
                                <li
                                    key={idx}
                                    className={this.state.active ===idx ? 'active' : null}
                                    onClick={()=>{this.getPlayList(idx)}}>
                                    {item.groupName}
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        )
    }
}