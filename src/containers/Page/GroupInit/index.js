import React, { Component } from 'react';
import * as Style from './style';
import store from '../../../common/store'
import { _putFetch, _postFetch, _getFetch  } from '../../../common/utils'
import { URLS } from '../../../common/settings'

class GroupInit extends Component{
    constructor(props){
        super(props);
        this.state= {
            groupStatus : "NoGroup",
        }
        this.NoRequset = this.NoRequset.bind(this);
        this.GroupRequest = this.GroupRequest.bind(this);
    }

    componentWillMount(){
        this.hasGroup()
    }

    hasGroup(){
        const { UserInfo } = store
        const Urls = URLS.API.HasGroup + UserInfo.phone
        _getFetch(Urls)
        .then(res => {
            if(res.length === 0){
                this.setState({groupStatus : "NoGroup"})
            } else {
                this.setState({groupStatus : "HasGroup"})
            }
        })
        .catch(err => {console.log("HasGroup",err)})
    }

    //NOTE : 추후 로그인창으로 옮길 예정
    GroupRequest(){
        if(this.state.groupStatus === "NoGroup") {
            this.props.history.push('/group/req')
        } else {
            this.props.history.push('/group/res')
        }
    }

    NoRequset(){
        const { UserInfo } = store;
        const userData = {
            gr : {
                phone : UserInfo.phone,
                no_user_hus  :  UserInfo.user.no_user,
                wed_date : UserInfo.userPf.wed_date,
                wed_loc : UserInfo.userPf.wed_loc
            }
        }
        _postFetch(URLS.API.AddGroup, userData)
        .then(res => {
            const userData = {
                user_pf : {
                    no_user : UserInfo.userPf.no_user,
                    no_gr : res
                }
            }
            const urls = URLS.API.UpdateUserGr + UserInfo.user.no_user;
            _putFetch(urls, userData)
            .then(res => {
              this.props.history.push("/")
            })
            .catch(err => {console.log("UpdateUserGr",err)})
        })
        .catch(err => {console.log("AddGroup",err)})
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

export default GroupInit;
