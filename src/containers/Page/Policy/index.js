import React, { Component } from 'react';
import * as Style from './style';
import { Tabs } from 'react-tabs';
import { PrivacyPolicy, ServicePolicy } from './PolicyContent';
import BackButton from '../../../components/BackButton'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

Style.StyledTabList.tabsRole = 'TabList'
Style.StyledTab.tabsRole = 'Tab';
Style.StyledTabPanel.tabsRole = 'TabPanel';
class PolicyContent extends Component{
  render(){
    return(
        <Style.Wrapper>
            <Style.Header>
                <BackButton handleClick={history.goBack}/>
                <h3>약관 & 개인정보 취급 방침</h3>
            </Style.Header>
            <Tabs>
                <Style.StyledTabList>
                    <Style.StyledTab selectedClassName="active">약관</Style.StyledTab>
                    <Style.StyledTab selectedClassName="active">개인정보 취급 방침</Style.StyledTab>
                </Style.StyledTabList>

                <Style.StyledTabPanel>
                    <Style.Panel>
                        <ServicePolicy/>
                    </Style.Panel>
                </Style.StyledTabPanel>
                <Style.StyledTabPanel>
                    <Style.Panel>
                        <PrivacyPolicy/>
                    </Style.Panel>
                </Style.StyledTabPanel>
            </Tabs>
        </Style.Wrapper>
    )
  }
}

export default PolicyContent
