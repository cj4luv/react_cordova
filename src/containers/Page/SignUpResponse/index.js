import React, { Component } from 'react';
import * as Style from './style';
import store from '../../../common/store'
import { _putFetch, _postFetch , _getFetch, setCookie} from '../../../common/utils'
import { HOST, URLS } from '../../../common/settings'
import Indicator from '../../../components/indicator/'

class SignUpGroupResponse extends Component{
    constructor(props){
        super(props);
        this.state ={
          from_phone :"",
          from_name:"",
          isLoaded:false
        }
        this.Group = this.Group.bind(this)
        this.rejectRequest = this.rejectRequest.bind(this)
        this.login = this.login.bind(this)
        this.goMain = this.goMain.bind(this)
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
    //나중에 하기
    goMain() {
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
        console.log("SignUpOpt4",res);
        this.login();
      })
      .catch(err => console.log(err))
    }
    //거절
    rejectRequest() {
      const { UserInfo } = store;
      const userData = {
          ...UserInfo,
          gr : {
              phone : UserInfo.user_auth.id_phone,
              wed_date : UserInfo.user_pf.wed_date,
              wed_loc : UserInfo.user_pf.wed_loc
          }
      }
      _postFetch(URLS.API.SignUpOpt4, userData)
      .then(res => {
        console.log("SignUpOpt4",res);
        this.login();
      })
      .catch(err => console.log(err))
    }
    // 요청 승낙
    Group() {
        const { UserInfo } = store;
        const userData = {
            ...UserInfo,
            gr : {
                phone : UserInfo.user_auth.id_phone,
                wed_date : UserInfo.user_pf.wed_date,
                wed_loc : UserInfo.user_pf.wed_loc
            }
        }
        console.log(userData);
        _postFetch(URLS.API.SignUpOpt3, userData)
        .then(res => {
            console.log("SignUpOpt3",res);
            this.login();
        })
        .catch(err => {console.log("SignUpOpt3",err)})
    }

    componentDidMount(){
        this.GetGroupStatus()
    }

    GetGroupStatus(){
      const {UserInfo} = store;
      const Urls = URLS.API.GetGrReqWithPhone + UserInfo.user_auth.id_phone
        _getFetch(Urls)
        .then(res => {
          console.log(res);
          this.setState({
            from_phone : res[0].from_phone,
            from_name : res[0].from_name,
            isLoaded : true
          })
        })
    }

    render(){
        return(
            <Style.Wrapper>
            {this.state.isLoaded?
              <div>
                <Style.Header>
                    <h3>가입완료</h3>
                    <img src="/images/Group_2.png" alt="group" />
                    <p>
                        {this.state.from_name}님({this.state.from_phone})께서 <br/>
                        계정 연동을 요청하셨습니다.
                    </p>
                </Style.Header>
                <Style.Body>
                    <Style.Button
                        onClick={this.Group}
                    >
                        예
                    </Style.Button>
                    <Style.Button
                        onClick={this.rejectRequest}
                        gradient
                    >
                        아니오
                    </Style.Button>
                    <p>
                        전화번호는 계정 연결을 위한 수단으로만 사용되며,<br/>
                        다른 용도로는 절대 사용되지 않습니다.
                    </p>
                </Style.Body>
                <Style.Footer>
                    <div onClick={this.goMain}>나중에하기</div>
                </Style.Footer>
              </div> : <Indicator/>
            }
            </Style.Wrapper>
        )
    }
}

export default SignUpGroupResponse;
