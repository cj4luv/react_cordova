import React, { Component } from 'react';
import * as Style from './style';
import Modal from 'react-modal';
import store from '../../../common/store'
import { _postFetch, _deleteFetch} from '../../../common/utils';
import { URLS } from '../../../common/settings'
import { ReplyStyle } from '../../../common/styles';

class ReplyComponent extends Component {
    render(){
        if(this.props.reply.cnt_rep === 0 ){
            return(<div></div>)
        } else {
            return(
                <div>
                    <Style.ReplyList gray toggle={this.props.toggle}>
                        <Style.Avatar>{this.props.reply.user_uri}</Style.Avatar>
                        <Style.Top>
                            <h4>{this.props.reply.no_user}</h4>
                        </Style.Top>
                        <Style.Middle>
                            {this.props.reply.reply}
                        </Style.Middle>
                    </Style.ReplyList>
                </div>
            )
        }
    }
}

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            likey : this.props.isLike,
            toggle : true,
            modalIsOpen: false
        }

        this.handleLikey = this.handleLikey.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(){
        this.setState((prevState) => {
            return {toggle: !prevState.toggle};
        });
    }

    handleLikey(){
      const {UserInfo} = store;
        if(this.state.likey === false){
            this.setState((prevState) => {
                return {likey: !prevState.likey};
            });
            const Body = {
                like_log : {
                    no_user : UserInfo.user.no_user,
                    ctg_like : 2,
                    no_pst : this.props.comment.no_rv_cmt
                }
            }
            const Urls = URLS.API.LIke
            _postFetch(Urls, Body)
            .then(res =>{
                this.setState((prevState)=>{
                    return {isLike : !prevState.isLike}
                })
            })
        } else {
            this.setState((prevState) => {
                return {likey: !prevState.likey};
            });
            const Urls = URLS.API.UnLike + "?usr_id=" + UserInfo.user.no_user + "&&pst_id=" + this.props.comment.no_rv_cmt;
            _deleteFetch(Urls)
            .then(res =>{
                this.setState((prevState)=>{
                    return {
                        cnt_likey : prevState.cnt_likey + 1,
                        isLike : !prevState.isLike
                    }
                })
            })
        }
    }

    handleInputChange (e){
        const target = e.target;
        const value = target.value;
    }

    openModal() {
      store.setCmtId(this.props.comment.no_rv_cmt)
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render(){
        return(
            <li>
                <Style.ReplyList>
                    <Style.Avatar>{this.props.comment.user_uri}</Style.Avatar>
                    <Style.Top>
                        <h4>{this.props.comment.no_user}</h4>
                        <span>{this.props.comment.date_creation}</span>
                    </Style.Top>
                    <Style.Middle>
                        {this.props.comment.comment}
                    </Style.Middle>
                    <Style.Bottom>
                        <Style.Likey
                            onClick={this.handleLikey}
                            likey={this.state.likey}
                        >
                            <img src="/assets/img/heart_b.png" alt="likey" className="likey"/>
                            <img src="/assets/img/heart_pink.png" alt="likey" className="unlikey"/>
                            좋아요
                        </Style.Likey>
                        <Style.Reply onClick={this.handleToggle}>
                            답글 {this.props.comment.cnt_rep} 개
                        </Style.Reply>
                        <span onClick={this.openModal}>답글달기</span>
                    </Style.Bottom>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    style={ReplyStyle}
                    onRequestClose={this.closeModal}
                    contentLabel="Reply Modal"
                >
                    <div>
                        <Style.TextArea
                            name="reply"
                            value={this.state.reply}
                            onChange = {this.handleInputChange}
                            autoFocus
                        />
                        <Style.ButtonArea>
                            <span onClick={this.props.handleClick}>등록</span>
                        </Style.ButtonArea>
                    </div>
                </Modal>
                </Style.ReplyList>
                {
                    this.props.reply.filter((item)=>{
                        if(item.no_rv_cmt === this.props.comment.no_rv_cmt) {
                            return true;
                        }}).map((item ) => {
                            return(<ReplyComponent reply={item} toggle={this.state.toggle}/>)
                    })
                }
            </li>
        )
    }
}

const CommentList = (props) => {
    const Lists = props.comments.map((comment, index) => {
        return(
            <Comment comment={comment} reply={props.reply} key={index} handleClick={props.handleClick}/>
        )
    })
    return(
        <Style.ReplyListWrapper >
            {Lists}
        </Style.ReplyListWrapper>
    )
}

export default CommentList;
