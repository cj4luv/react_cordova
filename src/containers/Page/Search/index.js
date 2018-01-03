import React, { Component } from 'react';
import * as Style from './style'
import SearchList from './searchList'
import {URLS} from '../../../common/settings';
import {_getFetch} from '../../../common/utils';
import Indicator from '../../../components/indicator/'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class SearchResultContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            search : "",
            isLoaded : false,
            data:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick(){
      if(this.state.search === ""){
        alert("검색어를 입력하세요")
        return;
      }
        let url = URLS.API.SearchReview + this.state.search;
        _getFetch(url)
        .then(res => {
            this.setState({
                reviewList : res
            })
            url = URLS.API.SearchEvent + this.state.search;
            _getFetch(url)
            .then(res => {
                this.setState({
                    eventList : res,
                    isLoaded:true
                })
            })
        })
    }

    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                <Style.BackBtn onClick={history.goBack}>
                </Style.BackBtn>
                <Style.Input
                    type="text"
                    value={this.state.search}
                    name="search"
                    onChange={this.handleInputChange}
                />
                <Style.SearchBtn onClick={this.handleClick}></Style.SearchBtn>
                </Style.Header>
                {this.state.isLoaded?
                    <SearchList event={this.state.eventList} review={this.state.reviewList}/>
                : null
                }
            </Style.Wrapper>
        )
    }
}
