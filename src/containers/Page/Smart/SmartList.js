import React, { Component } from 'react';
import * as Style from './style';
import {withRouter} from 'react-router-dom';
import store from '../../../common/store';

class AddEvent extends Component{
  constructor(props){
    super(props);
    this.goEvent = this.goEvent.bind(this);
  }
  goEvent(){
    this.props.history.push("/event")
  }

  render(){
    return(
      <Style.SmartCard>
        <Style.AddButton onClick={this.goEvent} className="add">
          <span>+</span><br/><br/>
          비교하고 싶은<br/>
          이벤트를 추가하세요
        </Style.AddButton>
      </Style.SmartCard>
    )
  }
}

const AddEventComponent = withRouter(AddEvent)

const SmartList = (props) => {
    if(props.lists.length === 0 ){
      return(
          <ul>
            <AddEventComponent/>
          </ul>
      )
    } else {
      const Lists = props.lists.map((list, index) => {
        if(list.evtInfo.option_name === null){
          return(
            <AddEventComponent/>
          )
        } else {
          let option_name = list.evtInfo.option_name;
          let option_text = list.evtInfo.option_text;
          let items = option_name.split('||');
          let datas = option_text.split('||');
          const CardCtgs = items.map((item,index) => (
            <div><Style.Prop>{item}</Style.Prop> <Style.Desc>{datas[index]}</Style.Desc></div>
          ))
          return  (
              <Style.SmartCard key={index}>
                <Style.ImageWrapper>
                  <img src="assets/img/event_img2.png" alt={list.location}/>
                  <span>{list.company}</span>
                </Style.ImageWrapper>
                {CardCtgs}
              </Style.SmartCard>
            )
        }
      })

      return(
        <ul>
          <AddEvent/>
          {Lists}
        </ul>
      )
    }
}

export default SmartList;
