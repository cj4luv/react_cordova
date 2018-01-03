import React, { Component } from 'react';
import * as Style from './style';
import Modal from 'react-modal';
import { ModalStyle } from '../../common/styles';

export default class Frame extends Component {
    constructor(props){
        super(props);
        this.state= {
            modalIsOpen: false,
            pic:""
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(e) {
        const target = e.target;
        const picture = target.src
        this.setState({
            modalIsOpen: true,
            pic : picture
        });
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        if(this.props.frame.cnt_image === 1){
            return(
                <div>
                    <img src={this.props.frame.image_url1} alt="slide"  onClick={this.openModal}/>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={ModalStyle}
                        onRequestClose={this.closeModal}
                        contentLabel="Review_Image Modal"
                    >
                    <Style.ModalWrapper>
                        <div><img src={this.state.pic} alt="slide" /></div>
                    </Style.ModalWrapper>
                    </Modal>
                </div>
            )
        }

        if(this.props.frame.cnt_image === 2){
            return(
                <Style.ClearBox>
                    <Style.Half>
                        <img src={this.props.frame.image_url1} alt="slide"  onClick={this.openModal}/>
                    </Style.Half>
                    <Style.Half>
                        <img src={this.props.frame.image_url2}  alt="slide"  onClick={this.openModal}/>
                    </Style.Half>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={ModalStyle}
                        onRequestClose={this.closeModal}
                        contentLabel="Review_Image Modal"
                    >
                        <Style.ModalWrapper>
                            <div><img src={this.state.pic} alt="slide" /></div>
                        </Style.ModalWrapper>
                    </Modal>
                </Style.ClearBox>
            )
        }

        if(this.props.frame.cnt_image === 3){
            return(
                <Style.ClearBox>
                    <div>
                        <img src={this.props.frame.image_url1}  alt="slide"  onClick={this.openModal}/>
                    </div>
                    <Style.ClearBox>
                        <Style.Half>
                            <img src={this.props.frame.image_url2} alt="slide"  onClick={this.openModal}/>
                        </Style.Half>
                        <Style.Half>
                            <img src={this.props.frame.image_url3} alt="slide"  onClick={this.openModal}/>
                        </Style.Half>
                    </Style.ClearBox>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={ModalStyle}
                        onRequestClose={this.closeModal}
                        contentLabel="Review_Image Modal"
                    >
                        <Style.ModalWrapper>
                            <div><img src={this.state.pic} alt="slide" /></div>
                        </Style.ModalWrapper>
                    </Modal>
                </Style.ClearBox>
            )
        }

        if(this.props.frame.cnt_image === 4){
            return(
                <Style.ClearBox>
                    <div>
                        <img src={this.props.frame.image_url1} alt="slide"  onClick={this.openModal}/>
                    </div>
                    <Style.ClearBox>
                        <Style.OneThird>
                            <img src={this.props.frame.image_url2} alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                        <Style.OneThird className="center">
                            <img src={this.props.frame.image_url3} alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                        <Style.OneThird>
                            <img src={this.props.frame.image_url4} alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                    </Style.ClearBox>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={ModalStyle}
                        onRequestClose={this.closeModal}
                        contentLabel="Review_Image Modal"
                    >
                        <Style.ModalWrapper>
                            <div><img src={this.state.pic} alt="slide" /></div>
                        </Style.ModalWrapper>
                    </Modal>
                </Style.ClearBox>
            )
        }

        if(this.props.frame.cnt_image === 5){
            return(
                <Style.ClearBox>
                    <Style.ClearBox>
                        <Style.Half>
                            <img src={this.props.frame.image_url1}  alt="slide"  onClick={this.openModal}/>
                        </Style.Half>
                        <Style.Half>
                            <img src={this.props.frame.image_url2}  alt="slide"  onClick={this.openModal}/>
                        </Style.Half>
                    </Style.ClearBox>
                    <Style.ClearBox>
                        <Style.OneThird>
                            <img src={this.props.frame.image_url3}  alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                        <Style.OneThird className="center">
                            <img src={this.props.frame.image_url4} alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                        <Style.OneThird>
                            <img src={this.props.frame.image_url5} alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                    </Style.ClearBox>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={ModalStyle}
                        onRequestClose={this.closeModal}
                        contentLabel="Review_Image Modal"
                    >
                        <Style.ModalWrapper>
                            <div><img src={this.state.pic} alt="slide" /></div>
                        </Style.ModalWrapper>
                    </Modal>
                </Style.ClearBox>
            )
        }

        if(this.props.frame.cnt_image === 6){
            return(
                <Style.ClearBox>
                    <Style.ClearBox>
                        <Style.TwoThird>
                            <img src={this.props.frame.image_url1}  alt="slide"  onClick={this.openModal}/>
                        </Style.TwoThird>
                        <Style.OneThirdLast>
                            <img src={this.props.frame.image_url2}  alt="slide"  onClick={this.openModal}/><br/>
                            <img src={this.props.frame.image_url3}  alt="slide"  onClick={this.openModal}/>
                        </Style.OneThirdLast>
                    </Style.ClearBox>
                    <Style.ClearBox>
                        <Style.OneThird>
                            <img src={this.props.frame.image_url4}  alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                        <Style.OneThird className="center">
                            <img src={this.props.frame.image_url5}  alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                        <Style.OneThird>
                            <img src={this.props.frame.image_url6}  alt="slide"  onClick={this.openModal}/>
                        </Style.OneThird>
                    </Style.ClearBox>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        style={ModalStyle}
                        onRequestClose={this.closeModal}
                        contentLabel="Review_Image Modal"
                    >
                        <Style.ModalWrapper>
                            <div><img src={this.state.pic} alt="slide" /></div>
                        </Style.ModalWrapper>
                    </Modal>
                </Style.ClearBox>
            )
        }
    }
}
