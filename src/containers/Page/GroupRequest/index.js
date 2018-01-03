import React, { Component } from 'react';
import * as Style from './style';
import store from '../../../common/store'
import { Link, withRouter } from 'react-router-dom';
import { _postFetch , _putFetch, getCookie } from '../../../common/utils';
import { URLS } from '../../../common/settings';

class GroupRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            phone : "",
            disable : true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.connectNow = this.connectNow.bind(this);
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
        const phone = getCookie("phone");
        const Data = {
            gr_req : {
                no_gr : UserInfo.userPf.no_gr,
                from_name: UserInfo.user.user_name,
                from_phone : phone,
                to_phone:this.state.phone
            }
        }
        _postFetch(URLS.API.AddGrReq, Data)
        .then(res => {
          console.log("그룹리퀘스트",res);
            this.props.history.push("/")
        })
        .catch(err => {console.log("JoinGroup",err)})
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
                    <Link to="/">나중에하기</Link>
                </Style.Footer>
            </Style.Wrapper>
        )
    }
}

export default withRouter(GroupRequest);
