import React, { Component } from 'react';
import * as Style from './style';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import BackButton from '../../../components/BackButton';
import { ModalStyle } from '../../../common/styles';
// import Iamport from 'iamport';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

// const iamport = new Iamport({
//     impKey: '8222088408698515',
//     impSecret: 'MraubT607ni9fczi0dfPMppvIdvTXwNJYXd9QjaYHt8XFHgGVvvHVVdD8Jx5fkPeh2o8my632e1IVioR'
// });

export default class Verification extends Component{
    constructor(props){
        super(props);
        this.state={
            verification : "",
            modalIsOpen: false,
            isBlocking : true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.verification === ""){
          alert("인증번호를 입력하세요")
          return;
        }
        this.props.history.push("/signup/3")
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        },()=>{
            if(this.state.verification !== ""){
                this.setState({isBlocking : false})
            }
        });
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <BackButton handleClick={history.goBack} />
                    <Style.Title>인증번호를 입력해주세요.</Style.Title>
                </Style.Header>
                <Style.Body>
                    <Style.InputWrapper>
                        <p>인증번호</p>
                        <Style.Text
                            value={this.state.verification}
                            name = "verification"
                            onChange = {this.handleInputChange}
                        />
                    </Style.InputWrapper>
                    <Style.Button
                        disabled ={this.state.isBlocking}
                    >
                        <a onClick={this.handleClick}>
                            확인
                        </a>
                    </Style.Button>
                    <Style.DidURecieveCode>인증번호를 받지 못하셨나요? <span onClick={this.openModal}>다시받기</span></Style.DidURecieveCode>
                </Style.Body>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={ModalStyle}
                    contentLabel="Resend Modal"
                >
                    <Style.ModalWrapper>
                        <h2 ref={subtitle => this.subtitle = subtitle}>인증번호 재발송</h2>
                        <p>
                            새로운 인증번호를<br/>
                            문자메세지로 전송하였습니다.
                        </p>
                        <Style.ModalButtons>
                            <button onClick={this.closeModal}>확인</button>
                        </Style.ModalButtons>
                    </Style.ModalWrapper>
                </Modal>
            </Style.Wrapper>
        )
    }
}
