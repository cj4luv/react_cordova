import React, { Component } from 'react';
import * as Style from './style';
import store from '../../../common/store'
import { _putFetch, _postFetch, _getFetch, setCookie } from '../../../common/utils'
import { URLS } from '../../../common/settings'

class SignUpGroupInit extends Component{
    constructor(props){
        super(props);
        this.state= {
            groupStatus : "NoGroup",
        }
        this.NoRequset = this.NoRequset.bind(this);
        this.GroupRequest = this.GroupRequest.bind(this);
        this.login = this.login.bind(this)
    }

    //NOTE : 추후 로그인창으로 옮길 예정
    GroupRequest(){
      this.props.history.push('/signup/request')
    }

    login(){
      const { UserInfo } = store;
      const UserData = {
          phone :  UserInfo.user_auth.id_phone,
          pw :  UserInfo.user_auth.pw
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
          this.props.history.push('/');
      })
      .catch(err =>{
          alert("로그인에 실패했습니다.")
      })
    }

    NoRequset(){
        const { UserInfo } = store;
        const userData = {
            ...UserInfo,
            gr : {
                phone : UserInfo.user_auth.id_phone,
                wed_date : UserInfo.user_pf.wed_date,
                wed_loc : UserInfo.user_pf.wed_loc
            }
        }
        _postFetch(URLS.API.SignUpOpt1, userData)
        .then(res => {
          this.login()
        })
        .catch(err => {
          console.log("SignUpOpt1",err)
        })
    }

    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <p>
                    상대방과 계정 연동시,<br/>
                    더 편리한 서비스를 이용할 수 있어요!
                    </p>
                </Style.Header>
                <Style.Body>
                    <img src="/images/Group_2.png" alt="page" />
                </Style.Body>
                <Style.Footer>
                    <Style.Button onClick={this.NoRequset}>나중에 하기</Style.Button>
                    <Style.Button onClick={this.GroupRequest} gradient>연동하기</Style.Button>
                </Style.Footer>
            </Style.Wrapper>
        )
    }
}

export default SignUpGroupInit;
