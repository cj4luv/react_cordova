import React, { Component } from 'react';
import * as Style from './style'
import SmartList from './SmartList'
import {withRouter} from 'react-router-dom'
import { URLS } from '../../../common/settings';
import { _getFetch, getCookie } from '../../../common/utils'
import store from '../../../common/store'
import Indicator from '../../../components/indicator/'
import Header from '../../Header/'
import Footer from '../../Footer/'

const CTR_MENU = ['웨딩홀', '스튜디오', '드레스', '헤어/메이크업', '신혼여행', '한복', '청접장', '부케', '뷰티케어', '예단', '예물', '예복'];

class SmatContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            ctg_evt : 1,
            data: '',
            isLoaded: false,
        }
        this.changeCtg = this.changeCtg.bind(this);
    }

    componentDidMount(){
        this.authFetch()
    }

    async authFetch() {
        const no_user = getCookie("no_user");
        if(no_user === null) {
            return false;
        } else {
            const res = await _getFetch(URLS.API.GetUserInfo + no_user);
            const token = getCookie("token");
            console.log(res);
            store.setUserInfo(res)
            this.fetchEvt()
        }
    }

    fetchEvt(){
        const { UserInfo } = store;
        if(!UserInfo){
            alert("로그인이 필요합니다.")
            this.props.history.push("/");
            return false;
        }
        const Urls = URLS.API.GetStoreEvent + UserInfo.userPf.no_gr +"/?ctg=" +this.state.ctg_evt;
        let arr =[];
        _getFetch(Urls)
        .then(res => {
            res.map((item,index)=>{
                let Urls = URLS.API.GetEventDetail + item.no_evt;
                _getFetch(Urls)
                .then(res => {
                    let result = JSON.parse(res);
                    arr.push(result)
                    this.setState({
                        data:arr
                    })
                })
                return true;
            })
            return true
        })
        .then(()=>{
            this.setState({
                isLoaded:true
            })
        })
    }

    changeCtg(ctg) {
        this.setState({
            ctg_evt :ctg,
        }, () => {
            this.fetchEvt()
        })
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
            <Style.Wrapper>
              <Header/>
                {this.renderTabMenu()}
                { this.state.isLoaded ?
                    <Style.CardWrapper>
                        <SmartList lists ={this.state.data}/>
                    </Style.CardWrapper>:<Indicator/>
                }
                <Footer/>
            </Style.Wrapper>
        )
    }
}

export default withRouter(SmatContent);
