import React, { Component }  from 'react';
import * as Style from './style'
import { Link } from 'react-router-dom'

class FooterButton extends Component {
    render() {
        return(
            <Style.Button>
                <Link to={this.props.url}>
                  <img src={this.props.src} alt={this.props.title} />
                </Link>
            </Style.Button>
        )
    }
}

export default class MainFooter extends Component {
    render() {
        return (
        <Style.Footer>
            <Style.FooterTab>
                <FooterButton
                    src='/images/bottom_icon1.png'
                    title="HOME"
                    url = "/"
                />
                <FooterButton
                    src='/images/bottom_icon2.png'
                    title="체크리스트"
                    url ="/checklist"
                />
                <FooterButton
                    src='/images/bottom_icon3.png'
                    title="후기"
                    url ="/review"
                />
                <FooterButton
                    src='/images/bottom_icon4.png'
                    title="이벤트리스트"
                    url="/event"
                />
                <FooterButton
                    src='/images/bottom_icon5.png'
                    title="스마트비교"
                    url ="/smart"
                />
            </Style.FooterTab>
        </Style.Footer>
        )
    }
};
