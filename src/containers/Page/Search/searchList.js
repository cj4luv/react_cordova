import React, { Component } from 'react';
import * as Style from './style_list';
import EventCard from '../../Contents/EventCard/'
import ReviewCard from '../../Contents/ReviewCard/'

const ReviewThumbnail = (props) => {
    const Lists = props.reviewResult.map((rev,index) => (
        <ReviewCard review={rev} />
    ))
    return(
        <Style.ReviewListWrapper>
            {Lists}
        </Style.ReviewListWrapper>
    )
}

export default class SearchList extends Component{
    render(){
        if(this.props.event.length === 0 && this.props.review.length === 0){
            return(
                <Style.Wrapper>
                    <Style.NoSearch>
                        <img src="/images/serch-no.png" alt="search-no"/><br/>
                        검색된 결과가 없습니다.
                    </Style.NoSearch>
                </Style.Wrapper>
            )
            }
        else if(this.props.event.length === 0 && this.props.review.length > 0){
            return(
                <Style.Wrapper>
                    <Style.Header>
                        리뷰
                    </Style.Header>
                    <Style.Body>
                        <ReviewThumbnail reviewResult={this.props.review} />
                    </Style.Body>
                </Style.Wrapper>
            )
            }
        else if(this.props.event.length > 0 && this.props.review.length === 0) {
            return(
                <Style.Wrapper>
                    <Style.Header>
                        이벤트
                    </Style.Header>
                    <Style.Body>
                        <EventCard events = {this.props.event}/>
                    </Style.Body>
                </Style.Wrapper>
            )
        } else {
            return(
                <Style.Wrapper>
                    <Style.Header>
                        리뷰
                    </Style.Header>
                    <Style.Body>
                        <ReviewThumbnail reviewResult={this.props.review} />
                    </Style.Body>
                        <hr/>
                    <Style.Header>
                        이벤트
                    </Style.Header>
                    <Style.Body>
                        <EventCard event = {this.props.event}/>
                    </Style.Body>
                </Style.Wrapper>
            )
        }
    }
}
