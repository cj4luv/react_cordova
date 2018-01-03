import React, { Component } from 'react';

import {
    BackButtonComp,
    WrapperComp,
    HeaderComp
} from '../../../components/';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class CheckUpdate extends Component{
    render(){
        return(
            <WrapperComp>
                <HeaderComp>
                    <BackButtonComp handleClick={history.goBack}/>
                    <h3>업데이트 확인</h3>
                </HeaderComp>
            </WrapperComp>
        )
    }
}

export default CheckUpdate
