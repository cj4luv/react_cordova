import React, { Component } from 'react';
import * as Style from './style';

import {HOST, URLS } from '../../../common/settings'
import {_postFetch } from '../../../common/utils'

class EventCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            likey : false
        }
        this.likey = this.likey.bind(this);
    }

    likey(){
        if(this.state.likey === false ){
            // const data = {
            //     store_event : {
            //         no_gr : UserInfo.userPf.no_gr,
            //         no_pst :this.props.event.no_evt,
            //         ctg : this.props.event.ctg_evt
            //     }
            // }
            // store.addEvent(data.store_event);
            // const Urls = HOST + URLS.API.StoreEvent;
            // _postFetch(Urls, data)
            // .then(res => {
                this.setState((prevState) => {
                    return {likey: !prevState.likey};
                });
            // })
        } else {
            alert("찜한 이벤트 페이지에서 삭제 바랍니다.")
        }
    }

    render(){
        return(
            <Style.Event>
                <Style.Img>
                    <img src={this.props.event.thumb_uri} alt="Suzy" />
                </Style.Img>
                <Style.Title
                    onClick={()=>{console.log("상세이벤트 정보로 넘어가기");}}>
                    <h3>{this.props.event.com_name}</h3>
                </Style.Title>
                <p>{this.props.event.com_loc}</p>
                <p>{this.props.event.summary}</p>
                <Style.PriceBar>
                    <span className="salePrice">{this.props.event.real_csst}</span>
                    <span className="originPrice">{this.props.event.dc_cost}</span>
                </Style.PriceBar>
                <Style.Likey
                    onClick={this.likey}
                    likey={this.state.likey}
                >
                    <img src="/images/heart_b.png" alt="likey" className="likey"/>
                    <img src="/images/heart_pink.png" alt="likey" className="unlikey"/>
                </Style.Likey>
            </Style.Event>
        )
    }
}

export default EventCard
