import React, { Component } from 'react';
import * as Style from './style';
import store from '../../../common/store'
import {  _getFetch  } from '../../../common/utils'
import { URLS } from '../../../common/settings'
import BackButton from '../../../components/BackButton'
import {PrivacyPolicy, ServicePolicy, AlarmPolicy} from './PolicyContent';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      name : "",
      phone : "",
      gender : 0,
      password : "",
      checkPassword:"",
      wed_date_year: 2017,
      wed_date_month : 5,
      wed_date_day : 11,
      weddingDayConfirm : false,
      weddingLocation : "서울",
      weddingLocationConfirm : false,
      agreement1 : false,
      agreement2 : false,
      agreement3 : false,
      agreement4 : false,
      disabled : true,
      toggle1 : false,
      toggle2:false,
      toggle3:false,
      toggle4:false,
      checkPhone : false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.SignUp = this.SignUp.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.toggle = this.toggle.bind(this);
    this.dropdown = this.dropdown.bind(this);
    this.nextStep = this.nextStep.bind(this)
    this.checkPhone = this.checkPhone.bind(this);
  }

  checkPhone(){
    var Urls = URLS.API.UserCheck + "?phone=" + this.state.phone;
    _getFetch(Urls)
    .then(res => {
      console.log(res);
      if(res.status === 1102){
        alert("번호를 입력하세요.")
        return ;
      }
      if(res.status === 1106){
        alert("가입된 번호입니다.")
        return ;
      }
      if(res === "가입 가능"){
        alert("가입이 가능합니다.")
        this.setState({
          checkPhone  : true
        })
      }
    })
    .catch(err =>{
      console.log(err);
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
      if(name === "phone"){
      this.setState({
        [name]: value,
        checkPhone : false
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  handleRadioChange(param){
    this.setState({gender : param})
  }

  nextStep() {
    const { UserInfo } = store
    const Urls =  URLS.API.GetGrReqWithPhone + UserInfo.user_auth.id_phone
    _getFetch(Urls)
    .then(res => {
        if(res.length === 0){
            this.setState({groupStatus : "NoGroup"})
            this.props.history.push("/signup/groupinit");
        } else {
            this.setState({groupStatus : "HasGroup"})
            this.props.history.push("/signup/response");
        }
    })
    .catch(err => {console.log("HasGroup",err)})
  }

  SignUp(){
        //Validation
        let wedding_day;
        let wed_month;
        let wed_location;
        let password = this.state.password;
        let checkPassword  = this.state.checkPassword;
        if(this.state.wed_date_month < 10){
          wed_month = "0" + this.state.wed_date_month;
        } else {
          wed_month = this.state.wed_date_month.toString();
        }
        if(this.state.weddingDayConfirm) {
          wedding_day = 0;
        } else {
          wedding_day = this.state.wed_date_year + wed_month + this.state.wed_date_day
        }
        if(this.state.weddingLocationConfirm){
            wed_location = "미정";
        } else {
            wed_location = this.state.weddingLocation;
        }
        if(this.state.name ==="" && this.state.phone===""){
          alert("이름과 전화번호를 입력해주세요.")
          return ;
        }
        if(this.state.password === "" && this.state.checkPassword === ""){
          alert("비밀번호를 입력해주세요.")
          return ;
        }
        if (password !== checkPassword) {
          alert("비밀번호가 일치하지 않습니다.")
          return;
        }
        if(this.state.checkPhone === false){
          alert("핸드폰 중복체크를 먼저 해주세요.")
          return ;
        }
        const UserData = {
          user : {
            user_name: this.state.name,
            user_uri : "avatar"
          },
          user_pf : {
            gender : this.state.gender,
            wed_date: wedding_day,
            wed_loc : wed_location
          },
          user_auth: {
            pw : this.state.password,
            id_phone : this.state.phone,
            salt : "empty"
          }
        }

        store.setUserInfo(UserData)
        this.nextStep()
    }

    toggle(e){
      const target = e.target;
      const name = target.name;

      this.setState((prevState) => {
        return {[name]: !prevState[name]};
      }, () =>{
            if(
              this.state.name !== "" &&
              this.state.phone !== "" &&
              this.state.password !== "" &&
              this.state.checkPassword !==""&&
              this.state.agreement1 === true &&
              this.state.agreement2 === true &&
              this.state.agreement3 === true
            ){
              this.setState({ disabled : false})
            }
      });
    }

    dropdown(param){
      if(param === 1){
        this.setState((prevState) => {
          return {toggle1 : !prevState.toggle1}
        })
      }
      if(param === 2){
        this.setState((prevState) => {
          return {toggle2 : !prevState.toggle2}
        })
      }
      if(param === 3){
        this.setState((prevState) => {
          return {toggle3 : !prevState.toggle3}
        })
      }
      if(param === 4){
        this.setState((prevState) => {
          return {toggle4 : !prevState.toggle4}
        })
      }
    }

    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <BackButton handleClick={history.goBack}/>
                    <h3>회원가입</h3>
                </Style.Header>

                <Style.Body>
                    <Style.InputWrapper>
                        <p>이름</p>
                        <Style.Text
                        value={this.state.name}
                        name = "name"
                        onChange = {this.handleInputChange}
                        />
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <p>성별</p>
                        <Style.RadioButton
                        value={this.state.gender}
                        name = "gender"
                        onChange = {() => {this.handleRadioChange(0)}}
                        />신랑
                        <Style.RadioButton
                        value={this.state.gender}
                        name = "gender"
                        onChange = {() => {this.handleRadioChange(1)}}
                        />신부
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <p>휴대폰번호</p>
                        <Style.Phone
                        value={this.state.phone}
                        name = "phone"
                        onChange = {this.handleInputChange}
                        />
                        <Style.CheckPhone onClick={this.checkPhone}>중복체크</Style.CheckPhone>
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <p>비밀번호</p>
                        <Style.PassWord
                        value={this.state.password}
                        name = "password"
                        onChange = {this.handleInputChange}
                        />
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                        <p>비밀번호 확인</p>
                        <Style.PassWord
                        value={this.state.checkPassword}
                        name = "checkPassword"
                        onChange = {this.handleInputChange}
                        />
                    </Style.InputWrapper>
                    <Style.checkWrapper>
                        <p>결혼예정일</p>
                        <Style.WedDate>
                        <input
                        type="number"
                        value = {this.state.wed_date_year}
                        name = "wed_date_year"
                        onChange = {this.handleInputChange}
                        disabled = {this.state.weddingDayConfirm}
                        />년
                        </Style.WedDate>
                        <Style.WedDate>
                        <input
                        type="number"
                        value = {this.state.wed_date_month}
                        name = "wed_date_month"
                        onChange = {this.handleInputChange}
                        disabled = {this.state.weddingDayConfirm}
                        />월
                        </Style.WedDate>
                        <Style.WedDate>
                        <input
                        type="number"
                        value = {this.state.wed_date_day}
                        name = "wed_date_day"
                        onChange = {this.handleInputChange}
                        disabled = {this.state.weddingDayConfirm}
                        />일
                        </Style.WedDate>
                        <Style.CheckBox
                        value = {this.state.weddingDayConfirm}
                        name  = "weddingDayConfirm"
                        onClick = {this.toggle}
                        />
                    </Style.checkWrapper>
                    <Style.checkWrapper>
                        <p>결혼예정지역</p>
                        <Style.Select
                          disabled = {this.state.weddingLocationConfirm}
                          value = {this.state.weddingLocation}
                          onChange={this.handleInputChange}
                        >
                        <option value="서울">서울</option>
                        <option value="대전">대전</option>
                        <option value="대구">대구</option>
                        <option value="부산">부산</option>
                        </Style.Select>
                        <Style.CheckBox
                        value = {this.state.weddingLocationConfirm}
                        name  = "weddingLocationConfirm"
                        onClick = {this.toggle}
                        />
                    </Style.checkWrapper>
                    <Style.checkPolicy>
                        <Style.CheckBox
                        value = {this.state.agreement1}
                        name  = "agreement1"
                        onClick = {this.toggle}
                        />
                        <label>오월한시 개인정보처리방침 동의</label>
                        <span onClick={() => {this.dropdown(1)}}>상세보기</span>
                        <Style.policy toggle={this.state.toggle1}>
                        <PrivacyPolicy/>
                        </Style.policy>
                        </Style.checkPolicy>
                    <Style.checkPolicy>
                    <Style.CheckBox
                        value = {this.state.agreement2}
                        name  = "agreement2"
                        onClick = {this.toggle}
                        />
                        <label>개인정보 수집, 이용 제공 동의</label>
                        <span onClick={() => {this.dropdown(2)}}>상세보기</span>
                        <Style.policy toggle={this.state.toggle2}>
                        <PrivacyPolicy/>
                        </Style.policy>
                    </Style.checkPolicy>
                    <Style.checkPolicy>
                        <Style.CheckBox
                        value = {this.state.agreement3}
                        name  = "agreement3"
                        onClick = {this.toggle}
                        />
                        <label>개인정보 처리 위탁 동의</label>
                        <span onClick={() => {this.dropdown(3)}}>상세보기</span>
                        <Style.policy toggle={this.state.toggle3}>
                        <ServicePolicy/>
                        </Style.policy>
                    </Style.checkPolicy>
                    <Style.checkPolicy>
                        <Style.CheckBox
                        value = {this.state.agreement4}
                        name  = "agreement4"
                        onClick = {this.toggle}
                        />
                        <label>이벤트 알람 수신 동의(선택))</label>
                        <span onClick={() => {this.dropdown(4)}}>상세보기</span>
                        <Style.policy toggle={this.state.toggle4}>
                        <AlarmPolicy/>
                        </Style.policy>
                    </Style.checkPolicy>
                    <Style.Button onClick={this.SignUp} disabled={this.state.disabled}>확인</Style.Button>
                </Style.Body>
            </Style.Wrapper>
        )
    }
}
