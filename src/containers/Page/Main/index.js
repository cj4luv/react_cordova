import React, { Component } from 'react';
import * as Style from './style';
import {Link} from 'react-router-dom'
import store from '../../../common/store';
import Header from '../../Header/'
import Footer from '../../Footer/'

import {
    _postFetch,
    _deleteFetch,
    _getFetch,
    getCookie,
} from '../../../common/utils'
import { URLS, HOST } from '../../../common/settings'

import Indicator from '../../../components/indicator/'

class ReviewBox extends Component {
    constructor(props){
        super(props);
        this.getDetail = this.getDetail.bind(this)
    }
    getDetail(){
        console.log("디테일정보 보러가기");
    }
    render(){
        return(
            <Style.Review onClick={this.getDetail}>
                <Style.rvImg>
                    <img src={this.props.review.image_url1 === 0 ? "/images/id_img1.png" : this.props.review.image_url1 } alt="review" />
                </Style.rvImg>
                <span>{this.props.review.com_name}</span>
            </Style.Review>
        )
    }
}

class EventCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLike : this.props.isLike
        }
        this.isLike = this.isLike.bind(this);
        this.getEventDetail = this.getEventDetail.bind(this)
    }

    getEventDetail(){
        console.log("이벤트 디테일");
    }

    isLike(){
        if(this.state.isLike === false ){
            const data = {
                store_event : {
                    no_gr : 68,
                    no_pst :this.props.event.no_evt,
                    ctg : this.props.event.ctg_evt
                }
            }
            const Urls = URLS.API.StoreEvent;
            _postFetch(Urls, data)
            .then(res => {
                this.setState((prevState) => {
                    return {isLike: !prevState.isLike};
                });
            })
            .catch(err => {console.log(err)})
        } else {
            this.setState((prevState) => {
                return {isLike: !prevState.isLike};
            });
        }
    }


    render(){
        return(
            <Style.Event>
                <Style.Img>
                    <img src= {this.props.event.thumb_uri ==="avatar" ? "/images/event_img1.png" : this.props.event.thumb_uri} alt="event" />
                </Style.Img>
                <Style.SmallTitle onClick={this.getEventDetail}>
                    <h3>{this.props.event.title}</h3>
                </Style.SmallTitle>
                <p>{this.props.event.com_name}({this.props.event.com_loc})</p>
                <p>{this.props.event.summary}</p>
                <Style.PriceBar>
                    <span className="salePrice">{this.props.event.real_csst}</span>
                    <span className="originPrice">{this.props.event.dc_cost}</span>
                </Style.PriceBar>
                <Style.Likey
                    onClick={this.isLike}
                    likey={this.state.isLike}
                >
                    <img src="/images/heart_b.png" alt="Like" className="likey"/>
                    <img src="/images/heart_pink.png" alt="Like" className="unlikey"/>
                </Style.Likey>
            </Style.Event>
        )
    }
}


const HotReviews = (props) => {
    const HotReviews = props.content.map( (review, index) => {
        return(
        <ReviewBox review={review} key={index}/>
    )});

    return (
        <Style.ComponentWrapper>
            <Style.Title>
                <h3>인기 후기</h3>
                <Link to ="/hotreview">
                    모두보기
                </Link>
            </Style.Title>
            <Style.ListWrapper>
                {HotReviews}
            </Style.ListWrapper>
        </Style.ComponentWrapper>
    )
}


const HotEvents = (props) =>  {
    const HotEvents = props.content.map( (event, index) => {
        return(
            <EventCard
                event = {event}
                key={index}
            />
        )
    });
    return (
        <Style.ComponentWrapper>
            <Style.Title>
                <h3>인기 이벤트</h3>
                <Link to ="/hotevent">
                    모두보기
                </Link>
            </Style.Title>
            <Style.ListWrapper>
                {HotEvents}
            </Style.ListWrapper>
        </Style.ComponentWrapper>
    )
}


export default class MainContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            isLoaded : false,
            reviewList :[],
            eventList:[],
            eventLike: [],
        };
    }

    componentWillMount() {
        this.authFetch();
        this.fetchBest();
    }

    async authFetch() {
        const no_user = getCookie("no_user");
        if(no_user === null) {
            return false;
        } else {
            const res = await _getFetch(HOST + URLS.API.GetUserInfo + no_user);
            const token = getCookie("token");
            console.log(res);
            store.setUserInfo(res)
            this.getLikeLog();
        }
    }

    async getLikeLog(){
        const no_user = getCookie("no_user");
        if(no_user === null){
            const res = await _getFetch(HOST + URLS.API.GetUserLike + no_user);
            let list_rev = [],
                list_cmt = [],
                list_rep= [],
                list_evt = [];
            res.map(item => {
                if(item.ctg_like ===1){
                    list_rev.push(item.no_pst)
                    return true;
                } else if(item.ctg_like===2){
                    list_cmt.push(item.no_pst)
                    return true;
                } else if(item.ctg_like ===3){
                    list_rep.push(item.no_pst)
                    return true;
                } else if(item.ctg_like ===4){
                    list_evt.push(item.no_pst)
                    return true;
                }
                return false;
            })
            this.setState({
                eventLike : list_evt
            })
        }
    }

    async fetchBest(){
        const getEvent = await _getFetch(HOST + URLS.API.GetBestEvent)
        const getReview = await _getFetch(HOST + URLS.API.GetBestReview)
        await this.setState({
            reviewList : getReview.slice(0,6),
            eventList : getEvent.slice(0,3),
            isLoaded: true
        })
    }

    render(){
        return(
            <div>
              {this.state.isLoaded?
                <div>
                  <Header />
                  <Style.AdsWrapper>바른결혼 캠페인 프로젝트</Style.AdsWrapper>
                      <div>
                          <HotReviews
                              content={ this.state.reviewList }
                          />
                          <HotEvents
                              content={this.state.eventList}
                              eventLike ={ this.state.eventLike}
                          />
                      </div>
                  <Footer/>
                </div>
                : <Indicator/>
              }
            </div>
        )
    }
}
