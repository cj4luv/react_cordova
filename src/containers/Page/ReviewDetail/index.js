import React, { Component } from 'react';
import * as Style from './style'
import ReviewDetailCard from '../../Contents/ReviewDetailCard'
import BackButton from '../../../components/BackButton'
import Indicator from '../../../components/indicator/'
import {_getFetch} from "../../../common/utils"
import {URLS} from '../../../common/settings'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class ReviewDetail extends Component{
    constructor(props){
        super(props);
        this.state= {
            commentData : [],
            isLoaded :false,
            reviewData :[],
        }
        this.fetchReview = this.fetchReview.bind(this)
    }

    componentDidMount(){
        this.fetchReview()
    }

    fetchReview(){
        const Urls = URLS.API.GetReview +this.props.id
        _getFetch(Urls)
        .then(res => {
          this.setState({
            reviewData:res,
            isLoaded : true
          })
        })
    }

    render(){
        return(
            <Style.FloatingWrapper>
                <Style.Header>
                    <BackButton handleClick={history.goBack}/>
                    <h3>상세후기</h3>
                </Style.Header>
                {
                  this.state.isLoaded?
                  <div>
                    <ReviewDetailCard review={this.state.reviewData}  />
                  </div>                  
                   : <Indicator/>
                }
            </Style.FloatingWrapper>
        )
    }
}

const Detail = ({match}) => {
    return <ReviewDetail id={match.params.id} />
}

export default Detail;
