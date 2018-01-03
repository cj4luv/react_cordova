import React, {Component} from 'react';
import * as Style from './style';
import { PieChart, Pie } from 'recharts';

import {URLS} from '../../../common/settings'
import { _deleteFetch, _postFetch } from '../../../common/utils'

class CheckInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked : false,
            pinned : false
        }

        this.checkInput = this.checkInput.bind(this);
    }

    checkInput(){
        if(this.state.pinned === false){
        // const data = {
        //     store_check : {
        //         no_gr : UserInfo.userPf.no_gr,
        //         no_chk_item : this.props.property.id,
        //         ctg_type:1
        //     }
        // }
        // const Urls = URLS.API.StoreCheck
        // _postFetch(Urls, data)
        // .then(res => {
            this.setState((prevState) => {
                return {pinned: !prevState.pinned};
            })
        // })
        } else {
            // const Urls = URLS.API.DeleteCheck + "?gr_id=" + UserInfo.userPf.no_gr + "&&item_id=" + this.props.property.id;
            // _deleteFetch(Urls)
            // .then(res => {
                this.setState((prevState) => {
                    return {pinned: !prevState.pinned};
                });
            // })
        }
    }

    render(){
        return(
            <div>
            <Style.InputWrapper>
                {this.props.property.name}
            <Style.CheckBox
                name = "checked"
                value ={this.state.checked}
                onChange={this.checkInput}
            />
            </Style.InputWrapper>
            </div>
        )
    }
}

const DayList = (props) => {
    const List = props.schedule.map((dayDo, index) => (
        <Style.ChildrenList key={index}>
            <CheckInput property = {dayDo}/>
        </Style.ChildrenList>
    ))
    return(
        <Style.ChildrenListWrapper>
            {List}
        </Style.ChildrenListWrapper>
    )
}

const ScheduleList = (props) => {
    let arr = new Array(12);
    for(var i=0 ; i< 12 ; i++){
        arr[i] = [];
    }
    props.list.map((data, j) => {
        switch(data.type){
            case 180: arr[0].push(data); break;
            case 160: arr[1].push(data);break;
            case 100: arr[2].push(data);break;
            case 60: arr[3].push(data);break;
            case 50: arr[4].push(data);break;
            case 40: arr[5].push(data);break;
            case 30: arr[6].push(data);break;
            case 20: arr[7].push(data);break;
            case 10: arr[8].push(data);break;
            case 7: arr[9].push(data);break;
            case 3: arr[10].push(data);break;
            case 1: arr[11].push(data);break;
        }
        return true;
    })
    const List = arr.map((item, index) => (
        <Style.List key={index}>
            <Style.Badge>{item[0].type}</Style.Badge>
            <DayList schedule={item} />
        </Style.List>
    ))
    return(
        <Style.ListWrapper>
            {List}
        </Style.ListWrapper>
    )
}

class DDayCheck extends Component{
    render(){
        let data = [
            {
                name : "groupA",
                value : this.props.groupA
            },
            {
                name : "groupB",
                value : this.props.groupB
            }
        ]
        return(
            <div>
                <PieChart width={300} height={200} style={{margin:"auto"}}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        startAngle ={90}
                        endAngle={450}
                        fill="#82ca9d"
                        label
                    />
                </PieChart>
            </div>
        )
    }
}

export default class CheckSchedule extends Component{
    constructor(props){
        super(props);
        this.state ={
            groupA : 0,
            groupB : 41
        }
    }

    render(){
        return(
            <div>
                <DDayCheck groupA = {this.state.groupA} groupB = {this.state.groupB} />
                <ScheduleList list={this.props.ScheduleData} />
            </div>
        )
    }
}
