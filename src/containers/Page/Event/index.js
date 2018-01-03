import React, { Component } from 'react';
import * as Style from './style';
import EventCard from '../../Contents/EventCard/'
import Header from '../../Header/'
import Footer from '../../Footer/'
import { URLS } from '../../../common/settings';
import { _getFetch } from '../../../common/utils';
import Indicator from '../../../components/indicator/'
const EventLists = (props) =>  {
    const CardList = props.events.map( (event, index) => (
      <EventCard key={index} event ={event}/>
    ));

  return (
    <div>
      <Style.ListWrapper>{CardList}</Style.ListWrapper>
    </div>
  )
}

const CTR_MENU = ['웨딩홀', '스튜디오', '드레스', '헤어/메이크업', '신혼여행', '한복', '청접장', '부케', '뷰티케어', '예단', '예물', '예복'];

export default class EventContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      ctg_evt : 1,
      data: '',
      isLoaded: false,
    }
    this.changeCtg = this.changeCtg.bind(this);
  }

  componentWillMount() {
    this.fetchEvt()
  }

  async fetchEvt() {
    const Urls = URLS.API.EventCtgList + this.state.ctg_evt + "?seq=" + 0;
    const res = await _getFetch(Urls);
    this.setState({
      data: res,
      isLoaded: true
    })

    return res;
  }

  changeCtg(ctg) {
    this.setState({
      ctg_evt :ctg,
    }, () => {
      this.fetchEvt()
    })
  }

  renderTabMenu() {
    let arr = [];
    CTR_MENU.map((item, i) => {
      arr.push(
        <Style.StyledTab
          key={i + 'evt'}
          style={{
            backgroundColor: (i + 1) === this.state.ctg_evt ? '#e9e9ea':'#ffffff'
          }}
          onClick={() => this.changeCtg(i + 1)}>
          {item}
        </Style.StyledTab>
      )
      return true;
    });

    return <Style.StyledTabList>{arr}</Style.StyledTabList>;
  }

  render(){

    return(
      <Style.Wrapper>
        <Header />
        {this.renderTabMenu()}

        { this.state.isLoaded ?
          <EventLists events={this.state.data} category={this.state.ctg_evt} />
          :<Indicator/>
        }
        {/* <EventLists events={eventsDummy} category={this.state.ctg_evt} /> */}
        <Footer/>
      </Style.Wrapper>
    )
  }
}
