import React, { Component } from 'react';
import * as Style from './style';

import store from '../../../common/store'
import { _putFetch, _postFetch , _getFetch, _deleteFetch, getCookie} from '../../../common/utils'
import { HOST, URLS } from '../../../common/settings'

import Indicator from '../../../components/indicator/'

class GroupResponse extends Component{
    constructor(props){
        super(props);
        this.state ={
          from_name :"",
          from_phone:"",
          isLoaded : false,
          no_gr:"",
          no_gr_req:"",
          del_no_gr:""
        }
        this.ConnectGroup = this.ConnectGroup.bind(this)
        this.goMain = this.goMain.bind(this)
        this.fetchUpdateUserGr = this.fetchUpdateUserGr.bind(this)
        this.fetchUpdateGroup = this.fetchUpdateGroup.bind(this)
        this.rejectRequest = this.rejectRequest.bind(this);
    }
    componentDidMount(){
        this.GetGroupStatus()
    }

    GetGroupStatus(){
      const {UserInfo} = store;
      const phone = getCookie("phone")
      const Urls = URLS.API.GetGrReqWithPhone + phone
        _getFetch(Urls)
        .then(res => {
          console.log(res);
          this.setState({
            no_gr_req : res[0].no_gr_req,
            no_gr : res[0].no_gr,
            from_phone : res[0].from_phone,
            from_name : res[0].from_name,
            isLoaded : true,
            del_no_gr : UserInfo.userPf.no_gr
          })
        })
    }

    //연동하기
    ConnectGroup() {
        this.fetchUpdateGroup()
    }

    //UpdateGroup : "/db_gr/gr/update/",//그룹번호 PUT
    fetchUpdateGroup(){
        const { UserInfo } = store;
        const no_gr = this.state.no_gr;
        var Urls = URLS.API.UpdateGroup + no_gr;
        console.log(Urls);
        const userData = {
            gr : {
                b_matched : 1,
                [UserInfo.userPf.gender === 0? "no_user_hus" :"no_user_wife"] : UserInfo.user.no_user
            }
        }
        _putFetch(Urls, userData)
        .then((data)=>{
            //NOTE : res.json() 값이 무엇인지 기억안남 그냥 함주 인자값을 넘김
            this.fetchUpdateUserGr();
        })
        .catch(err => {console.log("UpdateGroup",err)})
    }

//UpdateUserGr : "/db_user/user/update/",//PUT유저아이디
    fetchUpdateUserGr(){
        const { UserInfo } = store;
        var userData ={
            user_pf : {
                no_user : UserInfo.userPf.no_user,
                no_gr : this.state.no_gr
            }
        }
        const Urls = URLS.API.UpdateUserGr + UserInfo.user.no_user;
        _putFetch(Urls, userData)
        .then(res => {
            const data ={
                user : UserInfo.user,
                userPf : {
                    no_user :UserInfo.userPf.no_user,
                    gender:UserInfo.userPf.gender,
                    no_photo:UserInfo.userPf.no_photo,
                    no_gr:UserInfo.userPf.no_gr,
                    wed_date:UserInfo.userPf.wed_date,
                    wed_loc:UserInfo.userPf.wed_loc,
                    date_creation:UserInfo.userPf.date_creation
                },
                userDt : UserInfo.user_dt,
                token : UserInfo.token,
                phone : UserInfo.phone
            }
            store.setUserInfo(data);
            this.deleteTableRow()
        })
        .then(res=>{console.log(res)})
        .catch(err => {console.log("UpdtateUserGr",err)})
    }

    async deleteTableRow(){
      var deleteGrUrl = URLS.API.TrueDelete + "?model=gr&&pst_id=" +this.state.del_no_gr;
      var deleteGrReqUrl = URLS.API.TrueDelete + "?model=gr_req&&pst_id="+this.state.no_gr_req;
      const delGr = await _deleteFetch(deleteGrUrl)
      const delGrReq = await _deleteFetch(deleteGrReqUrl)
      console.log(delGr, delGrReq);
      this.props.history.push("/")
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
    //나중에 하기
    goMain() {
      this.props.history.push('/');
    }

    render(){
        return(
          <div>
            {this.state.isLoaded?
              <Style.Wrapper>
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
                          onClick={this.ConnectGroup}
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
              </Style.Wrapper> : <Indicator/>
            }
          </div>
        )
    }
}

export default GroupResponse;
