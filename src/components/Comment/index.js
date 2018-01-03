import React, { Component } from 'react';
import Modal from 'react-modal';
import * as Style from './style';
import { ReplyStyle } from '../../common/styles';
import store from '../../common/store';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            comment:""
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = "comment"
    }

    render(){
        return(
        <div>
            <div>
                <Style.DummyInput
                    onClick={this.openModal}
                >
                </Style.DummyInput>
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                style={ReplyStyle}
                onRequestClose={this.closeModal}
                contentLabel="Comment Modal"
            >
                <div>
                <Style.TextArea
                    name="comment"
                    value={this.state.comment}
                    onChange = {this.handleInputChange}
                    autoFocus
                />
                    <Style.ButtonArea>
                        <span onClick={this.props.handleClick}>등록</span>
                    </Style.ButtonArea>
                </div>
            </Modal>
        </div>
        )
    }
}

export default Comment;
