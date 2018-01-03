import React, { Component } from 'react';
import * as Style from './style'
import { withRouter } from 'react-router-dom'
import Header from '../../Header/'
import Footer from '../../Footer/'
import store from '../../../common/store';
import {URLS} from '../../../common/settings';
import {_getFetch} from '../../../common/utils';

import Indicator from '../../../components/indicator/'
import EstimateCard from '../../../components/EstimateCard/'

class EstimateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      estimData : [],
      isLoaded : false
    }
  }
  componentDidMount(){
    this.fetchEstim()
  }

  async fetchEstim(){
    const { UserInfo } = store;
    if(!UserInfo){
      alert("로그인이 필요합니다.")
      this.props.history.push("/");
      return false;
    }
    const Urls = URLS.API.GetStoreEstimate + UserInfo.userPf.no_gr
    const res = await _getFetch(Urls)

    this.setState({
        estimData : res,
        isLoaded : true
    })
  }

  render(){
    return(
      <Style.Wrapper gray>
        <Header/>
          {this.state.isLoaded ?
            <EstimateCard sheets = {this.state.estimData}/>
            :<Indicator/>
          }
          <Footer/>
      </Style.Wrapper>
    )
  }
}
export default withRouter(EstimateContent);
