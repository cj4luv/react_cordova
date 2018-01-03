import React, { Component } from 'react';
import * as Style from './style'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class CreateReviewContent extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.submitFeedback = this.submitFeedback.bind(this)
    }
    handleClick(){
        history.goBack();
    }
    submitFeedback(){
        console.log("전송!");
    }
    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <Style.Button onClick={this.handleClick}>
                        &lt;
                    </Style.Button>
                    <h3>피드백보내기</h3>
                </Style.Header>
                <Style.Body>
                    <textarea placeholder="메세지를 입력해주세요"/>
                </Style.Body>
                <Style.Footer>
                    <button onClick={this.submitFeedback}>전송</button>
                </Style.Footer>
            </Style.Wrapper>
        )
    }
}
