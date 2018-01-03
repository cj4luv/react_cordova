import React, {Component} from 'react';
import * as Style from './style';

import { URLS } from '../../../common/settings'
import {_postFetch, _deleteFetch} from '../../../common/utils';

class CheckInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            myPrice : this.props.property.cost,
            checked : false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    checkInput(){
        if(this.state.checked === false){
            // let Cost = parseInt(this.state.myPrice,10)
            // const data = {
            //     store_check : {
            //         no_gr : UserInfo.userPf.no_gr,
            //         no_chk_item : this.props.property.id,
            //         ctg_type:2,
            //         cost: Cost,
            //     }
            // }
            // const Urls = URLS.API.StoreCheck
            // _postFetch(Urls, data)
            // .then(res => {
                this.setState((prevState) => {
                    return {checked: !prevState.checked};
                })
            // })
        } else {
            // const Urls = URLS.API.DeleteCheck + "?gr_id=" + UserInfo.userPf.no_gr + "&&item_id=" + this.props.property.id;
            // _deleteFetch(Urls)
            // .then(res => {
                this.setState((prevState) => {
                    return {checked: !prevState.checked};
                });
            // })
        }
    }

    render(){
        return(
            <Style.InputWrapper>
                <Style.FloatDiv col={4}>
                    {this.props.property.name}
                </Style.FloatDiv>
                <Style.FloatDiv col={4}>
                    <Style.CheckBox
                        name = "checked"
                        value = {this.state.cheked}
                        onChange = {this.checkInput}
                    />
                </Style.FloatDiv>
                <Style.FloatDiv col={4}>
                    <span>{this.props.property.cost} 만원</span>
                </Style.FloatDiv>
                <Style.FloatDiv col={4} won>
                    <input
                        type="number"
                        name = "myPrice"
                        value = {this.state.myPrice}
                        onChange = {this.handleInputChange}
                    />
                    <span>만원</span>
                </Style.FloatDiv>
            </Style.InputWrapper>
        )
    }
}


const Budget = (props) => {
    const List = props.checklist.map((budget, index) => (
        <Style.ChildrenList key={index}>
            <CheckInput property = {budget}/>
        </Style.ChildrenList>
    ))
    return(
        <Style.ChildrenListWrapper>
            {List}
        </Style.ChildrenListWrapper>
        )
}

const BudgetList = (props) => {
    let arr = new Array(11);
    for(var i=0 ; i< 11 ; i++){
        arr[i] = [];
    }
    props.list.map((data, j) => {
        switch(data.type){
            case 1: arr[0].push(data); break;
            case 2: arr[1].push(data);break;
            case 3: arr[2].push(data);break;
            case 4: arr[3].push(data);break;
            case 5: arr[4].push(data);break;
            case 6: arr[5].push(data);break;
            case 7: arr[6].push(data);break;
            case 8: arr[7].push(data);break;
            case 9: arr[8].push(data);break;
            case 10: arr[9].push(data);break;
            case 11: arr[10].push(data);break;
        }
        return true;
    })

    const List = arr.map((item, index)=>(
        <Style.List key={index}>
            <Style.Badge>{item.type}</Style.Badge>
            <Budget checklist={item} />
        </Style.List>
    ))

    return(
        <Style.ListWrapper>
            {List}
        </Style.ListWrapper>
    )
}

export default class CheckBudget extends Component{
    render(){
        return(
            <div>
                <BudgetList list={this.props.BudgetData}/>
            </div>
        )
    }
}
