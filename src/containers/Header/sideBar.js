import React, { Component } from 'react';
import * as Style from './sideBarStyle';
import { Link, withRouter } from 'react-router-dom'
import { URLS } from '../../common/settings'
import {_getFetch, getCookie} from '../../common/utils'
import store from '../../common/store';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class SideBarMenu extends Component {
  render() {
    return (
      <Link to={this.props.url} onClick={this.props.routing}>
        <span><img src={this.props.image} alt="icon" /></span>
        {this.props.text}
      </Link>
    )
  }
}

class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state ={
          groupStatus : ""
        }
        this.GroupRequest = this.GroupRequest.bind(this);
        this.folderSideBar = this.folderSideBar.bind(this)
    }

    //NOTE : 그룹존재 여부 체킹하고 req, 혹은 res로 보내기
    GroupRequest(){
      const { UserInfo } = store
      const phone = getCookie("phone")
      const Urls = URLS.API.GetGrReqWithPhone + phone
      _getFetch(Urls)
      .then(res => {
        console.log(res);
          if(res.length === 0){
              this.props.history.push('/group/req');
          } else {
              this.props.history.push('/group/res');
          }
      })
      .catch(err => {
        console.log("HasGroup",err)
      })

    }

    folderSideBar(){
        return this.props.routing
    }

    componentDidMount(){
        this.getGroupInfo()
    }

    getGroupInfo(){
      const { UserInfo } = store
      const phone = getCookie("phone")
      if(UserInfo){
        const Urls = URLS.API.HasGroup + phone
        _getFetch(Urls)
        .then(res => {
          console.log(res);
          if(res.length ===1){
            this.setState({
              groupStatus : "solo"
            })
          } else {
            this.setState({
              groupStatus : "couple"
            })
          }
        })
      }
    }

    render(){
        if(!this.props.userStatus){
            return(
            <Style.UserProfile>
                <Style.Avatar>
                    <img src ="/images/round-logo.png" alt="avatar" />
                </Style.Avatar>
                <br/>
                <br/>
                <Link to="/login">
                로그인하기
                </Link>
            </Style.UserProfile>
            )
        } else if(this.props.userStatus){
            if(this.state.groupStatus === "solo"){
                return(
                <Style.UserProfile>
                    <Style.Avatar>
                        <img
                            src = {this.props.userStatus.userPf.gender === 0 ? "/images/round-man.png" : "/images/round-woman.png"}
                            alt="avatar"
                         />
                        <span>{this.props.userStatus.user.user_name}</span>
                    </Style.Avatar>
                    <Style.Avatar onClick={this.GroupRequest}>
                        요청하기
                    </Style.Avatar>
                    <br/>
                    <br/>
                    <Link to="/mypage">프로필 보기</Link>
                </Style.UserProfile>
            )
        } else {
                return(
                    <Style.UserProfile>
                        <Style.Avatar>
                            <img
                                src = {this.props.userStatus.userPf.gender === 0 ? "/images/round-man.png" : "/images/round-woman.png"}
                                alt="avatar"
                            />
                            <span>{this.props.userStatus.user.user_name}</span>
                        </Style.Avatar>
                        <Style.Avatar>
                            <img
                                src = {this.props.userStatus.userPf.gender === 0 ? "/images/round-woman.png" : "/images/round-man.png"}
                                alt="avatar"
                            />
                        </Style.Avatar>
                        <br/>
                        <br/>
                        <span onClick={()=>{this.GoToPage()}}>프로필 보기</span>
                    </Style.UserProfile>
                )
            }
        }
    }
}

const UserProfileComponent = withRouter(UserProfile)

class SideBar extends Component{
    render(){
        return(
        <Style.Wrapper>
            <UserProfileComponent
                routing ={this.props.route}
                userStatus ={this.props.userStatus}
            />
            <Style.SideBarMenus>
                <SideBarMenu
                    url="/setting"
                    text='설정'
                    routing = {this.props.route}
                    image = "/images/star.png"
                />
                <SideBarMenu
                    url="/favreview"
                    text='관심 후기'
                    routing = {this.props.route}
                    image = "/images/Bookmark_line.png"
                />
                <SideBarMenu
                    url="/pinevent"
                    text='찜한 이벤트'
                    routing = {this.props.route}
                    image = "/images/price_bline.png"
                />
                <SideBarMenu
                    url="/pinevent"
                    text='견적함'
                    routing = {this.props.route}
                    image = "/images/star.png"
                />
                <SideBarMenu
                    url="/myreview"
                    text='마이 후기'
                    routing = {this.props.route}
                    image = "/images/talk_shape.png"
                />
            </Style.SideBarMenus>
        </Style.Wrapper>
        )
    }
}
export default SideBar
