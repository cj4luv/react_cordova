import React, { Component } from 'react';
import * as Style from './style'

import ReviewCard from '../../Contents/ReviewCard/';
import Header from '../../Header/'
import Footer from '../../Footer/'

import { Link } from 'react-router-dom';
import { URLS } from '../../../common/settings';
import { _getFetch ,getCookie} from '../../../common/utils';
import { CTR_MENU } from '../../../common/Constants'

import Indicator from '../../../components/indicator/'

class ToolBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            search:"",
            sort :1
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.backButton = this.backButton.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    backButton(){
        console.log("backbutton");
    }

    render(){
        return(
            <div>
                <Style.FormWrapper>
                    <Style.Form>
                        <input
                            name="search"
                            value={this.state.search}
                            onChange={this.handleInputChange}
                        />
                        <button>검색</button>
                    </Style.Form>
                    <Link to="/create">
                        후기작성
                    </Link>
                </Style.FormWrapper>
            </div>
        )
    }
}

const ReviewCardList = (props) => {
  console.log(props.likeLog);
    const CardList = props.reviews.map( (review, index) => {
        return (
            <ReviewCard
                key={index}
                review ={review}
            />
        )
    });

    return (
        <div>
            <Style.ListWrapper>{CardList}</Style.ListWrapper>
        </div>
    )
}

export default class ReviewContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            ctg_evt : 1,
            data :'',
            reviewLike: "",
            isLoaded : false
        }
        this.changeCtg = this.changeCtg.bind(this);
    }

    componentDidMount(){
        this.fetchReview();
    }

    async fetchReview(){
        const no_user = getCookie("no_user");
        const res = await _getFetch(URLS.API.ReviewCtgList + this.state.ctg_evt);
        this.setState({
            data: res
        })
        this.getLikeLog();
    }

    changeCtg(ctg) {
        this.setState({
            ctg_evt :ctg,
        }, () => {
            this.fetchReview()
        })
    }

    async getLikeLog(){
        const no_user = getCookie("no_user");

        if(no_user === null){
            this.setState({
                isLoaded : true
            })
        } else {
          const Urls =URLS.API.SelectAll + "?model=like&&uesr_id="+ no_user
          const res = await _getFetch(Urls);
          let list_rev = [];
          res.map(item => {
              if(item.ctg_like ===1){
                list_rev.push(item.no_pst)
                return true;
              } else {
                return false;
              }
          })
          this.setState({
              reviewLike : list_rev,
              isLoaded : true
          })
        }
    }

    renderTabMenu() {
        let arr = [];
        CTR_MENU.map((item, i) => {
            arr.push(
                <Style.StyledTab
                    key={i + 'evt'}
                    style={{backgroundColor: (i + 1) === this.state.ctg_evt ? '#e9e9ea':'#ffffff'}}
                    onClick={() => this.changeCtg(i + 1)}
                >
                {item}
                </Style.StyledTab>
            )
            return true;
        });
        return <Style.StyledTabList>{arr}</Style.StyledTabList>;
    }

    render(){
        return(
            <Style.Wrapper gray>
                <Header/>
                {this.renderTabMenu()}
                <ToolBar/>
                { this.state.isLoaded ?
                    <ReviewCardList reviews={this.state.data} category={this.state.ctg_evt} likeLog={this.state.reviewLike}/>
                    :<Indicator/>
                }
                <Footer/>
            </Style.Wrapper>
        )
    }
}
