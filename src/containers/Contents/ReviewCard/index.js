import React, { Component } from 'react';
import * as Style from './style'
import store from '../../../common/store'
import Modal from 'react-modal';
import {Link, matchPath} from 'react-router-dom'
import Frame from '../../../components/Frame/';

import { _postFetch, _deleteFetch, _getFetch  } from '../../../common/utils'
import { URLS } from '../../../common/settings'
import { ModalStyle } from '../../../common/styles';


class ReviewCardBtns extends Component{
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      pinned : false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.goEstimate = this.goEstimate.bind(this)
    this.storeEstimate = this.storeEstimate.bind(this);
  }

  storeEstimate(){
    const {UserInfo } = store;
    if(!UserInfo){
      alert("로그인이 필요합니다.")
      return ;
    }
    if(this.state.pinned === false){
      const data = {
        store_estim : {
          no_gr : UserInfo.userPf.no_gr,
          no_pst : this.props.content.no_review,
        }
      }
      store.addEstimate(data.store_estim)
      _postFetch(URLS.API.StoreEstimate, data)
      .then(res => {
        this.setState((prevState) => {
          return {pinned: !prevState.pinned};
        }, this.openModal());
      })
    } else {
      alert("견적함에서 삭제하세요.")
    }
  }

  goEstimate(){
    this.setState({modalIsOpen: false});
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <Style.ButtonWrapper>
        <Style.Likey
          onClick={this.props.handleLike}
          likey={this.props.isLike}
        >
          <img src="/images/heart_pink.png" alt="likey" className="likey"/>
          <img src="/images/heart_b.png" alt="likey" className="unlikey"/>
          좋아요
        </Style.Likey>
        <button className="center">
            <Link to={`/review/${this.props.content.no_review}`}>
                <img src="/images/talk_shape.png" alt="reply" />댓글
            </Link>
        </button>
        <button onClick={this.storeEstimate}>
         <img src="/images/price_bline.png" alt="bline" />견적받기
        </button>
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
      </Style.ButtonWrapper>
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
    return(
      <div>
        <Style.ReviewCardImg onClick={this.openModal}>
          <Frame frame={this.props.image} />
        </Style.ReviewCardImg>
      </div>
    )
  }
}

class ReviewCard extends Component{
  constructor(props){
    super(props);
    this.state= {
      modalIsOpen: false,
      toggle : false,
      pinned : false,
      isLike : false
    }
    this.storeReview = this.storeReview.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLikey = this.handleLikey.bind(this)
    this.report = this.report.bind(this)
  }

    componentWillMount(){
      console.log(this.props.isLike);
        this.setState({
            cnt_like : this.props.review.cnt_like
        })
    }

    handleLikey(){
      const {UserInfo } = store;
      if(!UserInfo){
        alert("로그인이 필요합니다.")
        return ;
      }
        if(this.state.isLike === false){
            this.setState((prevState) => {
              return {isLike: !prevState.isLike};
            });
            const Body = {
              like_log : {
                no_user : UserInfo.user.no_user,
                ctg_like : 1,
                no_pst : this.props.review.no_review
              }
            }
            const Urls = URLS.API.Like;
            _postFetch(Urls, Body)
            .then(res =>{
              console.log(res);
            })
        } else {
          this.setState((prevState) => {
            return {isLike: !prevState.isLike};
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
      const {UserInfo } = store;
      if(!UserInfo){
        alert("로그인이 필요합니다.")
        return ;
      }
        if(this.state.pinned === false ){
            const data = {
                store_review : {
                    no_gr : UserInfo.userPf.no_gr,
                    no_pst :this.props.review.no_review,
                    ctg : this.props.review.ctg_evt
                }
            }
            const Urls = URLS.API.StoreReview;
            _postFetch(Urls, data)
            .then(res => {
                this.setState((prevState) => {
                    return {pinned: !prevState.pinned};
                });
            })
        } else {
            alert("관심후기에서 삭제하세요.")
        }
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
    report(){
        console.log("신고하기 기능 추가");
        this.closeModal()
    }
    render(){
        const match = matchPath("/review/",{
            path:"/review/:pst_id",
            exact:true,
            strict:false
        })
        return(
            <Style.ReviewCard>
                <Style.ReviewCardHeader>
                    <Style.Avatar>
                        <img src="/images/round-woman.png" alt="avatar" />
                    </Style.Avatar>
                    <p>
                        {this.props.review.user_name}
                    </p>
                    <Style.PinButton onClick={this.storeReview} pin={this.state.pinned}>
                        <img src="/images/Bookmark_p.png" alt="pin" className="pinned" />
                        <img src="/images/Bookmark_line.png" alt="unPin" className="unpinned"/>
                    </Style.PinButton>
                    <Style.Btn onClick={this.handleClick}>
                        <img src="/images/Combined_Shape.png" alt="dots" />
                    </Style.Btn>
                    <Style.ToggleMenu toggle ={this.state.toggle}>
                        <div onClick={this.openModal}>신고하기</div>
                        <div>
                            <Link to={`/modifyreview/${this.props.review.no_review}`}>
                                수정하기
                            </Link>
                        </div>
                    </Style.ToggleMenu>
                </Style.ReviewCardHeader>
                <ReviewImage image={this.props.review}/>
                <Style.ReviewCardDesc>
                    <h4>{this.props.review.com_name}</h4>
                    <p>{this.props.review.review_sum}</p>
                </Style.ReviewCardDesc>
                <Style.ReviewCardFooter>
                    <div>
                        <span>{this.props.review.cnt_view}명 읽음</span>
                    </div>
                    <Style.Right>
                        <span>
                            <img src="/images/heart_line.png" alt="heart" />
                            {this.props.review.cnt_like}
                        </span>
                        <span>
                            <img src="/images/talk_shape.png" alt="reply" />
                            {this.props.review.cnt_cmt}
                        </span>
                    </Style.Right>
                </Style.ReviewCardFooter>
                <ReviewCardBtns content={this.props.review} handleLike={this.handleLikey} isLike={this.state.isLike}/>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={ModalStyle}
                    onRequestClose={this.closeModal}
                    contentLabel="Archive Modal"
                >
                    <Style.ModalWrapper>
                        <h2 ref={subtitle => this.subtitle = subtitle}>신고하기</h2>
                        <p>이 후기를 신고하시겠습니까?</p>
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

export default ReviewCard;
