import React, { Component } from 'react';
import * as Style from './style';
import Modal from 'react-modal';
import { Link,withRouter } from 'react-router-dom'
import { ModalStyle } from '../../../common/styles';
import store from '../../../common/store'
import { setCookie } from '../../../common/utils'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class SettingList extends Component {
    render(){
        return(
            <Style.List>
                <Link to={this.props.url}>
                    {this.props.text}
                </Link>
            </Style.List>
        );
    }
}

class LogOut extends Component {
    constructor(props){
        super(props);
        this.state = {
        modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    LogOut(){
        setCookie("no_user","",0);
        setCookie("token","",0);
        setCookie("phone",0);
        store.setUserInfo("");
        this.closeModal();
        history.goBack();
    }

    render(){
        return(
            <Style.List>
                <p onClick={this.openModal}>
                    {this.props.text}
                </p>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={ModalStyle}
                    onRequestClose={this.closeModal}
                    contentLabel="Logout Modal"
                >
                    <Style.ModalWrapper>
                        <h2 ref={subtitle => this.subtitle = subtitle}>로그아웃 하시겠습니까?</h2>
                        <Style.ModalButtons confirm>
                            <a onClick={this.closeModal}>취소</a>
                            <a onClick={this.LogOut}>확인</a>
                        </Style.ModalButtons>
                    </Style.ModalWrapper>
                </Modal>
            </Style.List>
        );
    }
}

class SettingContent extends Component{
    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <h3>설정</h3>
                    <Style.BackBtn onClick={history.goBack}>
                        &lt;
                    </Style.BackBtn>
                </Style.Header>
                <Style.Body>
                    <SettingList
                        text="나의 정보"
                        url="/mypage"
                    />
                    <SettingList
                        text="비밀번호 변경"
                        url="/modifypw"
                    />
                    <SettingList
                        text="개인정보 취급 방침"
                        url="/policy"
                    />
                    <SettingList
                        text="오월한시팀에게 피드백 주기"
                        url="/feedback"
                    />
                    <LogOut
                        text="로그아웃"
                    />
                </Style.Body>
            </Style.Wrapper>
        )
    }
}
export default withRouter(SettingContent);
