import React, { Component } from 'react';
import * as Style from './style'
import { URLS } from '../../../common/settings'
import {_postFetch, setCookie} from '../../../common/utils'
import {Link} from 'react-router-dom'

import WrapperComp from '../../../components/Wrapper'
import WideButtonComp from '../../../components/WideButton'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class LogintContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password  : "",
            disabled : true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.logIn = this.logIn.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        },()=>{
            if(this.state.phone !== "" && this.state.password !== ""){
                this.setState({disabled : false})
            }
        })
    }

    async _login(userInfo) {
        this.props.history.push('/')
    }

    logIn() {
        const UserData = {
            phone :  this.state.username,
            pw :  this.state.password
        }
        _postFetch(URLS.API.Login, UserData)
        .then(res => {
            const result = res
            const userInfo ={
                user : result.user,
                userDt : result.userDt,
                userPf : result.userPf,
                token : result.token,
                phone : result.phone
            }
            let phone = result.phone
            let  token = result.token;
            let  no_user = result.user.no_user;
            setCookie("phone", phone, 365);
            setCookie("token",token,365);
            setCookie("no_user",no_user,365);
            this._login(userInfo);
        })
        .catch(err =>{
            alert("로그인에 실패했습니다.")
        })
    }

    render(){
        return(
            <WrapperComp login floating>
                <Style.Header>
                    <h1><img src="/images/logo-w.png" alt="logo"/></h1>
                </Style.Header>
                <Style.Body>
                    <form>
                    <Style.Input
                        type="text"
                        value={this.state.username}
                        name = "username"
                        onChange = {this.handleInputChange}
                    />
                    <Style.Input
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInputChange}
                    />
                    </form>
                </Style.Body>
                <Style.Footer>
                    <WideButtonComp
                        handleClick={this.logIn}
                        disabled={this.state.disabled}
                    >
                        로그인
                    </WideButtonComp>
                    <Style.SignUp>
                        아직 회원이 아니신가요? <Link to="/signup/1">가입하기</Link>
                    </Style.SignUp>
                </Style.Footer>
            </WrapperComp>
        )
    }
}
