import React, { Component } from 'react';
import * as Style from './style'
import { Tabs, TabPanel } from 'react-tabs';
import { withRouter} from 'react-router-dom'
import Header from '../../Header/'
import Footer from '../../Footer/'
import CheckSchedule from '../../Contents/CheckSchedule/';
import CheckBudget from '../../Contents/CheckBudget/';

import WrapperComp from '../../../components/Wrapper'
import Indicator from '../../../components/indicator/'

import {  _getFetch, getCookie } from '../../../common/utils';
import { URLS } from '../../../common/settings';
import store from '../../../common/store'

Style.StyledTabList.tabsRole = 'TabList'
Style.StyledTab.tabsRole = 'Tab';

class CheckListContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded : false,
            checkListBudget : [],
            checkListSchedule : []
        }
    }

    componentDidMount(){
        this.authFetch();
    }

    async authFetch() {
        const no_user = getCookie("no_user");
        if(no_user === null) {
            return false;
        } else {
            const res = await _getFetch(URLS.API.GetUserInfo + no_user);
            const token = getCookie("token");
            store.setUserInfo(res)
            this.FetchcheckList()
        }
    }

    async FetchcheckList() {
        var schArr = [];
        var budArr = [];
        const token = getCookie("token")
        if(!token){
          alert("로그인해주세요.")
          this.props.history.push('/');
          return;
        }
        const Urls = URLS.API.SelectAll +"?model=checkitem&&token="+token
        const response = await _getFetch(Urls);
        console.log(response);
        response.map((item, index) => {

            if(item.ctg_type/1000 < 1){
                schArr.push({
                    id: item.no_chk_item,
                    type: item.ctg_type,
                    name: item.item_name,
                    cost:item.cost,
                })
            }else{
                budArr.push({
                    id: item.no_chk_item,
                    type: item.ctg_type-1000,
                    name: item.item_name,
                })
            }
            if(item.ctg_type === 1){
                    return true;
            } else {
                    return false;
            }
        })

        this.setState({
            isLoaded : true,
            checkListBudget : schArr,
            checkListSchedule : budArr
        })
    }


    render(){
        return(
            <div>
            <Header/>
            {this.state.isLoaded ?
                <WrapperComp>
                    <Tabs>
                        <Style.StyledTabList>
                            <Style.StyledTab selectedClassName="active">일정체크</Style.StyledTab>
                            <Style.StyledTab selectedClassName="active">예산체크</Style.StyledTab>
                        </Style.StyledTabList>

                        <TabPanel>
                            <Style.CardWrapper>
                                <CheckSchedule ScheduleData = {this.state.checkListSchedule}/>
                            </Style.CardWrapper>
                        </TabPanel>
                        <TabPanel>
                            <Style.CardWrapper>
                                <CheckBudget BudgetData = {this.state.checkListBudget}/>
                            </Style.CardWrapper>
                        </TabPanel>
                    </Tabs>
                </WrapperComp>:<Indicator/>
            }
            <Footer/>
            </div>
        )
    }
}

export default withRouter(CheckListContent)
