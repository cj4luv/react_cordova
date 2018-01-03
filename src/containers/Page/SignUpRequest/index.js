import React, { Component } from 'react';
import * as Style from './style';
import store from '../../../common/store'
import { Link } from 'react-router-dom';
import { _postFetch , _putFetch, setCookie } from '../../../common/utils';
import { URLS } from '../../../common/settings';

class SignUpGroupRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            phone : "",
            disable : true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.connectNow = this.connectNow.bind(this);
        this.login = this.login.bind(this)
        this.NoRequset = this.NoRequset.bind(this);
        // this.goMain = this.goMain.bind(this)

    }

    handleInputChange(event) {
        const target = event.target,
                value = target.value,
                name = target.name;

        this.setState({
            [name]: value
        });

        if(this.state.phone !== ""){
            this.setState({disable : false});
        }
    }


      connectNow(){
          const { UserInfo } = store;
          console.log(UserInfo);
          const userData = {
              ...UserInfo,
              gr : {
                  phone : UserInfo.user_auth.id_phone,
                  wed_date : UserInfo.user_pf.wed_date,
                  wed_loc : UserInfo.user_pf.wed_loc
              },
              gr_req : {
                  from_phone : UserInfo.user_auth.id_phone,
                  to_phone:this.state.phone,
                  from_name : UserInfo.user.user_name
              }
          }
          _postFetch(URLS.API.SignUpOpt2, userData)
          .then(res => {
              console.log("SignUpOpt2",res);
              this.login();
          })
          .catch(err => {console.log("SignUpOpt2",err)})
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
                    <h3>가입완료</h3>
                    <img src="/images/Group_2.png" alt="group" />
                    <p>
                        상대방과 계정 연동시,<br/>
                        더 편리한 서비스를 이용할 수 있어요!
                    </p>
                </Style.Header>
                <Style.Body>
                    <span>+82</span>
                    <Style.Text
                        name="phone"
                        value = {this.state.phone}
                        onChange={this.handleInputChange}
                    />
                    <Style.Button
                        onClick={this.connectNow}
                        gradient = {this.state.disable}
                        disabled = {this.state.disable}
                    >
                        연동하기
                    </Style.Button>
                    <p>
                        전화번호는 계정 연결을 위한 수단으로만 사용되며,<br/>
                        다른 용도로는 절대 사용되지 않습니다.
                    </p>
                </Style.Body>
                <Style.Footer>
                    <a onClick={this.NoRequset}>나중에하기</a>
                </Style.Footer>
            </Style.Wrapper>
        )
    }
}

export default SignUpGroupRequest;
