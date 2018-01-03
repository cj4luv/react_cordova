import React, { Component }  from 'react';
import * as Style from  './style';
import { Link, withRouter } from 'react-router-dom'
import SideBar from './sideBar';
import store from '../../common/store'
import { _getFetch, getCookie } from '../../common/utils'
import { URLS, HOST } from '../../common/settings'

class HeaderMenu extends Component {
    render() {
    if(this.props.alt === "사이드메뉴바"){
        return (
            <Style.Anchor onClick={this.props.ClickClick}>
                <img src={this.props.src} alt = {this.props.alt} />
            </Style.Anchor>
        )
    } else {
        return (
            <Link to={this.props.url}>
                <img src={this.props.src} alt = {this.props.alt} />
            </Link>
        )
    }
    }
}

class HeaderTitle extends Component {
  constructor(props){
    super(props);
    this.state={
      title:"메인"
    }
  }
  componentDidMount(){
    this.getLocation()
  }
  getLocation(){
    const {location} = this.props;
    console.log(location.pathname);
    switch (location.pathname) {
      case "/":
        this.setState({title:"메인"})
        break;
      case "/hotreview":
        this.setState({title:"인기 후기"})
        break;
      case "/hotevent":
        this.setState({title:"인기 이벤트"})
        break;
      case "/event":
        this.setState({title:"이벤트"})
        break;
      case "/review":
        this.setState({title:"후기"})
        break;
      case "/checklist":
        this.setState({title:"체크리스트"})
        break;
      case "/smart":
        this.setState({title:"스마트비교"})
        break;

      default:
          console.log("default");
    }
  }
    render() {
        return (
            <Style.Title>{this.state.title}</Style.Title>
        )
    }
}

const HeaderTtitleComponent = withRouter(HeaderTitle)

export default class MainHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
        }
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick (){
        this.setState((prevState) => {
            return {toggle: !prevState.toggle};
        });
    }
    componentDidMount(){
      this.getUserStatus()
    }

    async getUserStatus(){
      const no_user = getCookie("no_user");
      if(no_user === null) {
          return false;
      } else {
          const res = await _getFetch(HOST+URLS.API.GetUserInfo + no_user);
          console.log('ddfwef',res,'url',HOST+URLS.API.GetUserInfo + no_user)
          const token = getCookie("token");
          store.setUserInfo(res)
      }
    }

    render() {
      const {UserInfo} = store;
      console.log("???",UserInfo);
      return (
          <Style.Header>
              <HeaderTtitleComponent />
              <Style.HeaderMenus>
                  <HeaderMenu
                      url="/search"
                      src="/images/bar_icon1.png"
                      alt='검색'
                  />
                  <HeaderMenu
                      url="/alarm"
                      src="/images/bar_icon2.png"
                      alt='알람'
                  />
                  <HeaderMenu
                      ClickClick={this.handleClick}
                      src="/images/bar_icon3.png"
                      alt='사이드메뉴바'
                  />
              </Style.HeaderMenus>
              <Style.SlideBarWrapper toggle={this.state.toggle} >
                  <SideBar route={this.handleClick} userStatus ={UserInfo}/>
              </Style.SlideBarWrapper>
              <Style.Dimmed
                  toggle={this.state.toggle}
                  onClick={this.handleClick}
              />
          </Style.Header>
      )}
};
