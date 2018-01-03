import React, { Component } from 'react';
import * as Style from './style';
import ReviewCard from '../../Contents/ReviewCard/'
import Header from '../../Header/'
import Footer from '../../Footer/'

import {
    _getFetch
} from '../../../common/utils'
import { URLS } from '../../../common/settings'

import Indicator from '../../../components/indicator/'

const ReviewCardList = (props) => {
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

export default class HotReviewContent extends Component{
    constructor(props){
        super(props);
        this.state= {
            isLoaded:false,
            reviewData : []
        }
    }

    componentDidMount(){
        this.fetchReview();
    }

    async fetchReview(){
        _getFetch(URLS.API.GetBestReview)
        .then(res => {
            const result = res
            this.setState({
                reviewData : result,
                isLoaded : true
            })
        })
    }

    render(){
        return(
            <Style.Wrapper>
              <Header/>
                {this.state.isLoaded?
                    <ReviewCardList reviews={this.state.reviewData}/>
                    : <Indicator/>
                }
              <Footer/>
            </Style.Wrapper>
        )
    }
}
