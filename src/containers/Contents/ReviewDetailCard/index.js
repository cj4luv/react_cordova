import React, { Component } from 'react';
import * as Style from './style'
import {Link, withRouter } from 'react-router-dom'
import Modal from 'react-modal';

import Frame from '../../../components/Frame/';
import Comment from '../../../components/Comment/'

import CommentList from '../CommentList/';
import store from '../../../common/store'
import { ModalStyle } from '../../../common/styles';
import { _getFetch, _postFetch, _deleteFetch  } from '../../../common/utils'
import { HOST, URLS } from '../../../common/settings'


class ReviewCardBtns extends Component{
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      likey : false,
      pinned:false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.storeEstimate = this.storeEstimate.bind(this)
  }

  storeEstimate(){
    const {UserInfo} = store
    if(this.state.pinned === false){
      const data = {
        store_estim : {
          no_gr : UserInfo.userPf.no_gr,
          no_pst : this.props.content.no_review,
        }
      }
      store.addEstimate(data.store_estim)
      const Urls = HOST + URLS.API.StoreEstimate
      fetch(Urls, {
        method:'POST',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
      .then(res => {
        this.setState((prevState) => {
          return {pinned: !prevState.pinned};
        }, this.openModal());
      })
    } else {
        this.setState((prevState) => {
          return {pinned: !prevState.pinned};
        }, this.openModal());
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <div>
        <Style.ButtonWrapper>
        <Style.Likey
          onClick={this.props.handleLike}
          likey={this.props.like_sign}
        >
          <img src="/images/heart_b.png" alt="likey" className="likey"/>
          <img src="/images/heart_pink.png" alt="likey" className="unlikey"/>
          좋아요
        </Style.Likey>
          <button onClick={this.storeEstimate}>
          <img src="/images/price_bline.png" alt="bline" /> 견적받기
          </button>
        </Style.ButtonWrapper>
        <Comment handleClick={this.props.handleClick} />
        <Modal
          isOpen={this.state.modalIsOpen}
          style={ModalStyle}
          onRequestClose={this.closeModal}
          contentLabel="Archive Modal"
        >
          <Style.ModalWrapper>
            <h2 ref={subtitle => this.subtitle = subtitle}>견적정보</h2>
            <p>My menu견적함으로 정보가 전달되었습니다</p>
            <Style.ModalButtons confirm>
              <a onClick={this.closeModal}>다음에 확인</a>
              <Link to="/estimate">지금 확인</Link>
            </Style.ModalButtons>
        </Style.ModalWrapper>
        </Modal>
      </div>
    )
  }
}

class ReviewImage extends Component{
    constructor(props){
        super(props);
        this.state= {
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
      console.log(this.props.image);
        return(
            <div>
                <Style.ReviewCardImg onClick={this.openModal}>
                  <Frame frame={this.props.image} />
                </Style.ReviewCardImg>
            </div>
        )
    }
}

class ReviewDetailCard extends Component{
    constructor(props){
        super(props);
        this.state= {
            modalIsOpen: false,
            toggle : false,
            pinned : false,
            commentData :[],
            replyData :[],
            isLoaded : false,
            isLike : this.props.isLike
        }

        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.Comment = this.Comment.bind(this)
        this.Reply = this.Reply.bind(this);
        this.handleLikey  = this.handleLikey.bind(this)
        this.storeReview = this.storeReview.bind(this)
    }

    componentDidMount(){
        this.getComment();
    }

    async getComment(){
      console.log(this.props.review);
        const Urls = URLS.API.GetComment + this.props.review.no_review;
        await _getFetch(Urls)
        .then((res)=>{
            this.setState({
                commentData : res.cmt,
                replyData: res.rep
            })
        })
    }

    handleClick() {
        this.setState((prevState) => {
            return {toggle: !prevState.toggle};
        });
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    Comment(){
      const { UserInfo, Comment} = store;
        if(!UserInfo){
            alert("로그인이 필요합니다.")
            this.props.history.go(-1)
            return false;
        }
        const Body = {
            review_cmt : {
                no_review : this.props.review.no_review,
                no_user : UserInfo.user.no_user,
                user_name : UserInfo.user.user_name,
                user_uri : UserInfo.user.user_uri,
                comment : Comment,
            }
        }
        const Urls = HOST + URLS.API.AddComment
        _postFetch(Urls, Body)
        .then(res => {
            this.getComment()
        })
    }

    Reply(){
        const {UserInfo, Reply, Cmt_Id} = store;
        const Body = {
            review_rep : {
                no_rv_cmt : Cmt_Id,
                no_review : this.props.review.no_review,
                no_user : UserInfo.user.no_user,
                user_name : UserInfo.user.user_name,
                user_uri :  UserInfo.user.user_uri,
                reply : Reply,
            }
        }
        const Urls = URLS.API.AddReply
        _postFetch(Urls,Body)
        .then(res => {
            this.getComment()
        })
    }

    handleLikey(){
        const {UserInfo } = store;
        if(this.state.isLike === false){
            this.setState((prevState) => {
                return {likey: !prevState.likey};
            });
            const Body = {
                like_log : {
                    no_user : UserInfo.user.no_user,
                    ctg_like : 1,
                    no_pst : this.props.review.no_review
                }
            }
            const Urls = HOST + URLS.API.LIke
            _postFetch(Urls, Body)
            .then(res =>{
                this.setState((prevState)=>{
                    return {
                        cnt_likey : prevState.cnt_likey + 1,
                        isLike : !prevState.isLike
                    }
                })
            })
        } else {
          this.setState((prevState) => {
            return {
              isLike: !prevState.isLike,
              cnt_likey : prevState.cnt_likey -1
            }
          });
          const Urls = URLS.API.SelectAll + "?model=like";
          _getFetch(Urls)
          .then(res =>{
            var target = "";
            res.map(item => {
              if(item.no_user === UserInfo.user.no_user && item.no_pst === this.props.review.no_review){
                target = item
              } else {
                return false;
              }
            })
            console.log(target);
            const urls = URLS.API.TrueDelete + "?model=like&&pst_id="+target.no_lk_log;
            _deleteFetch(urls)
            .then(res =>console.log(res))
            .catch(err =>console.log(err))
          })
        }
    }



    storeReview() {
      const {UserInfo} = store;
        const data = {
            store_review : {
                no_gr : UserInfo.userPf.no_gr,
                no_pst :this.props.review.no_review,
                ctg : this.props.review.ctg_evt
            }
        }
        store.addReview(data.store_review)
        const Urls = URLS.API.StoreReview;
        _postFetch(Urls, data)
        .then(res => {
            this.setState((prevState) => {
                return {pinned: !prevState.pinned};
            });
        })
    }

    render(){
        return(
        <Style.ReviewCard>
            <Style.ReviewCardHeader>
                <p>{this.props.review.review.user_name}</p>
                <Style.PinButton onClick={this.storeReview} pin={this.state.pinned}>
                    <img src="/images/Bookmark_p.png" alt="pin" className="pinned" />
                    <img src="/images/Bookmark_line.png" alt="unPin" className="unpinned"/>
                </Style.PinButton>
                <Style.Btn onClick={this.handleClick}> : </Style.Btn>
                <Style.ToggleMenu toggle ={this.state.toggle}>
                    <div onClick={this.openModal}>신고하기</div>
                    <div>
                        <Link to="/modifyreview">
                            수정하기
                        </Link>
                    </div>
                </Style.ToggleMenu>
            </Style.ReviewCardHeader>
            <ReviewImage image={this.props.review.review}/>
            <Style.ReviewCardDesc>
                <h4>{this.props.review.com_name}</h4>
                <p>{this.props.review.review_dt.review}</p>
            </Style.ReviewCardDesc>
            <Style.ReviewCardFooter>
                <div>
                    <span>{this.props.review.review.cnt_view}명 읽음</span>
                </div>
                <Style.Right>
                    <span>
                        <img src="/images/heart_line.png" alt="heart" />
                        {this.props.review.review.cnt_like}
                    </span>
                    <span>
                        <img src="/images/talk_shape.png" alt="reply" />
                        {this.props.review.review.cnt_cmt}
                    </span>
                </Style.Right>
            </Style.ReviewCardFooter>
            <ReviewCardBtns
                content={this.props.review}
                handleClick={this.Comment}
                handleLike={this.handleLikey}
                like_sign={this.state.like_sign}
            />
            {
            this.state.isLoaded ?
                <div>
                    <CommentList comments={this.state.commentData} reply ={this.state.replyData} handleClick ={this.Reply} />
                </div>
            :
                <div>로딩중</div>
            }
            <Modal
                isOpen={this.state.modalIsOpen}
                style={ModalStyle}
                onRequestClose={this.closeModal}
                contentLabel="Archive Modal"
            >
                <Style.ModalWrapper>
                    <h2 ref={subtitle => this.subtitle = subtitle}>신고하기</h2>
                    <Style.ModalButtons confirm>
                        <a onClick={this.closeModal}>취소</a>
                        <a onClick={this.closeModal}>확인</a>
                    </Style.ModalButtons>
                </Style.ModalWrapper>
            </Modal>
        </Style.ReviewCard>
        )
    }
}

export default withRouter(ReviewDetailCard);
