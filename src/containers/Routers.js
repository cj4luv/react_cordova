import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';

import AlarmPage from './Page/Alarm/'
import CheckUserPage from './Page/CheckUser/'
import CheckListPage from './Page/CheckList/'
import CreateReviewPage from './Page/CreateReview/'
import EsitmatePage from './Page/Estimate/'
import EventPage from './Page/Event';
import FeedbackPage from './Page/Feedback/'
import GroupRequestPage from './Page/GroupRequest/'
import GrouptResponsePage from './Page/GroupResponse/'
import HotEventPage from './Page/HotEvent/'
import HotReviewPage from './Page/HotReview/'
import LoginPage from './Page/Login/'
import MainPage from './Page/Main/';
import MyPagePage from './Page/MyPage/'
import ModifyPwPage from './Page/ModifyPw/'
import PolicyPage from './Page/Policy/'
import ReviewDetailPage from './Page/ReviewDetail/'
import ReviewPage from './Page/Review/'
import SearchPage from './Page/Search/'
import SettingPage from './Page/Setting/'
import SignUpPage from './Page/SignUp/'
import SignUpInitPage from './Page/SignUpInit/'
import SignUpRequestPage from './Page/SignUpRequest/'
import SignUpResponsePage from './Page/SignUpResponse/'
import SmartPage from './Page/Smart/'
import VerificationPage from './Page/Verification/'


/*
 * 서로 다른 헤드타입들을 기준으로 라우터들을 정리
 */
const Routers = () =>{
    return (
        <Wrapper>
            <BodyWrapper>
                <Route
                    exact
                    path = "/"
                    component = {MainPage}
                />
                <Route
                    exact
                    path = "/alarm"
                    component = {AlarmPage}
                />
                <Route
                    exact
                    path = "/checklist"
                    component = {CheckListPage}
                />
                <Route
                    exact
                    path = "/create"
                    component = {CreateReviewPage}
                />
                <Route
                    exact
                    path = "/estimage"
                    component = {EsitmatePage}
                />
                <Route
                    exact
                    path = "/event"
                    component = {EventPage}
                />
                <Route
                    exact
                    path = "/feedback"
                    component = {FeedbackPage}
                />
                <Route
                    exact
                    path = "/group/req"
                    component = {GroupRequestPage}
                />
                <Route
                    exact
                    path = "/group/res"
                    component = {GrouptResponsePage}
                />
                <Route
                    exact
                    path = "/hotevent"
                    component = {HotEventPage}
                />
                <Route
                    exact
                    path = "/login"
                    component = {LoginPage}
                />
                <Route
                    exact
                    path = "/signup/1"
                    component = {CheckUserPage}
                />
                <Route
                    exact
                    path = "/signup/2"
                    component = {VerificationPage}
                />
                <Route
                    exact
                    path = "/signup/3"
                    component = {SignUpPage}
                />
                <Route
                    exact
                    path = "/signup/groupinit"
                    component = {SignUpInitPage}
                />
                <Route
                    exact
                    path = "/signup/request"
                    component = {SignUpRequestPage}
                />
                <Route
                    exact
                    path = "/signup/response"
                    component = {SignUpResponsePage}
                />
                <Route
                    exact
                    path = "/smart"
                    component = {SmartPage}
                />
                <Route
                    exact
                    path = "/mypage"
                    component = {MyPagePage}
                />
                <Route
                    exact
                    path = "/modifypw"
                    component = {ModifyPwPage}
                />
                <Route
                    exact
                    path = "/policy"
                    component = {PolicyPage}
                />
                <Route
                    exact
                    path = "/hotreview"
                    component = {HotReviewPage}
                />
                <Route
                    exact
                    path = "/review"
                    component = {ReviewPage}
                />
                <Route
                    path="/review/:id"
                    component={ReviewDetailPage}
                 />
                 <Route
                     exact
                     path = "/search"
                     component = {SearchPage}
                 />
                <Route
                    exact
                    path = "/setting"
                    component = {SettingPage}
                />
            </BodyWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
`
const BodyWrapper = styled.div`
    background: #fff;
    padding-top:48px;
    padding-bottom:56px;
`
export default Routers;
