import React, { Component } from 'react';
import * as Style from './style';
import EventCard from '../../Contents/EventCard/'
import Header from '../../Header/'
import Footer from '../../Footer/'
import {
    _getFetch,
    getCookie,
} from '../../../common/utils'
import { URLS } from '../../../common/settings'

import Indicator from '../../../components/indicator/'

const EventLists = (props) =>  {
    const lists = props.events.map((item, index) =>(
        <EventCard event = {item} key={index}/>
    ))

    return (
        <div>
            <ul>
                { lists }
            </ul>
        </div>
    )
}

export default class HotEventContent extends Component{
    constructor(props){
        super(props);
        this.state= {
            isLoaded:false,
            eventData : []
        }
    }

    componentDidMount(){
        this.fetchEvent();
    }

    async fetchEvent(){
        _getFetch(URLS.API.GetBestEvent)
        .then(res => {
            this.setState({
                eventData : res,
                isLoaded : true
            })
        })
    }

    render(){
        return(
        <Style.Wrapper>
          <Header />
            {this.state.isLoaded?
                <EventLists events={this.state.eventData}/>
                : <Indicator/>
            }
            <Footer/>
        </Style.Wrapper>
        )
    }
}
