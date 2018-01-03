import React, { Component } from 'react';
import * as Style from './style';

import BackButtonComp from '../../../components/BackButton'
import WrapperComp from '../../../components/Wrapper'
import ListComp from '../../../components/List'
import HeaderComp from '../../../components/Header'
import Indicator from '../../../components/indicator/'

import {_getFetch, getObjectDate} from '../../../common/utils';
import {URLS} from '../../../common/settings'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

const AlarmDetail= (props) => {
  const List = props.alarms.map((alarm, index) => {
    return(
      <Style.List key ={index}>
        <Style.Avatar>{alarm.user}</Style.Avatar>
        <p>{alarm.title}</p>
        <span>{alarm.dateStr}</span>
      </Style.List>
    )
  })
  return(
    <ul>
      {List}
    </ul>
  )
}

const AlarmList = (props) => {
  if(props.alarmDate.length===0) {
    return(
      <Style.NoAlarm>
        알람 내역이 없습니다.
      </Style.NoAlarm>
    )
  }
  const AlarmDate = props.alarmDate.map( (alarm, index) => {
    if(alarm.length === 0 ){
      return ;
    }
    return(
      <ListComp key={index}>
        <Style.AlarmDay>{alarm[0].dateStr}</Style.AlarmDay>
        <AlarmDetail alarms={alarm}/>
      </ListComp>
    )
  })
  return (
    <ul>
      {AlarmDate}
    </ul>
  )
}

class AlarmContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            isLoaded : false
        }
    }
    componentWillMount(){
        this.fetchAlarm()
    }

    async fetchAlarm(){
        const Urls = URLS.API.SelectAll + "?model=notice";
        const response = await _getFetch(Urls)
        this.setState({
            data : response,
        })
        this.dateSorting()
    }

    dateSorting(){
      var arr = [[],[],[],[],[],[],[],[]];

      this.state.data.map((item) => {
        var date = getObjectDate(item.date_creation)
        var result = {...item, ...date}
        switch(date.dateStr){
          case "오늘" :
            arr[0].push(result)
          break;
          case "2일 전" :
            arr[1].push(result)
          break;
          case "3일 전" :
            arr[2].push(result)
          break;
          case "4일 전" :
            arr[3].push(result)
          break;
          case "5일 전" :
            arr[4].push(result)
          break;
          case "6일 전" :
            arr[5].push(result)
          break;
          case "7일 전" :
            arr[6].push(result)
          break;
          default :
            arr[7].push(result)
        }
      })

      this.setState({
        data : arr,
        isLoaded:true
      })
    }


    render(){
        return(
            <WrapperComp floating>
              {this.state.isLoaded?
                <div>
                  <HeaderComp>
                      <h3>알림</h3>
                      <BackButtonComp handleClick={history.goBack}/>
                  </HeaderComp>
                  <AlarmList alarmDate={this.state.data}/>
                </div>:<Indicator/>
              }
            </WrapperComp>
        )
    }
}

export default AlarmContent
