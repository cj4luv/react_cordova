import React, { Component } from 'react';
import * as Style from './style';

import BackButtonComp from '../../../components/BackButton';
import WrapperComp from '../../../components/Wrapper';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class SignUpContent extends Component{
    constructor(props){
        super(props);
        this.state={
            name  : "",
            phone : "",
            disable : true
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClick(){
      if(this.state.name==="" || this.state.phone===""){
        alert("이름과 핸드폰 번호를 입력해주세요.")
        return;
      }
      this.props.history.push("/signup/2");
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        },()=>{
            if(this.state.name !== "" && this.state.phone !== ""){
                this.setState({disable : false})
            }
        });
    }


    render(){
        return(
            <WrapperComp floating>
                <Style.Header>
                    <BackButtonComp handleClick ={history.goBack}/>
                    <img src="/images/logo-pink.png" alt="logo" />
                    <p>
                        대한민구 1등 웨딩앱<br/>
                        오월한시 가입을 환영합니다.
                    </p>
                </Style.Header>
                <Style.Body disable ={this.state.disable}>
                    <Style.InputWrapper>
                        <p>이름</p>
                        <Style.Text
                            value={this.state.name}
                            name = "name"
                            onChange = {this.handleInputChange}
                        />
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <p>휴대폰번호</p>
                        <Style.Phone
                            value={this.state.phone}
                            name = "phone"
                            onChange = {this.handleInputChange}
                        />
                    </Style.InputWrapper>
                    <a onClick={this.handleClick}>
                        다음
                    </a>
                </Style.Body>
            </WrapperComp>
        )
    }
}
