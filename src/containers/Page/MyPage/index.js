import React, { Component } from 'react';
import * as Style from './style';
import { _putFetch  } from '../../../common/utils'
import { URLS } from '../../../common/settings'
import BackButton from '../../../components/BackButton';

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class MyPageContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickName : "",
            files : [],
            imagePreviewUrls :"",
            uri : "",
            id :""
        }
        this.handleInputChange= this.handleInputChange.bind(this);
        this.getImg = this.getImg.bind(this)
        this.ChangeInfo = this.ChangeInfo.bind(this)
    }

    ChangeInfo(){
        // const Urls = URLS.API.UpdateUserGr + UserInfo.user.no_user;
        // let userData = {
        //     user : {
        //         user_name : this.state.nickName
        //     }
        // }
        // if(this.state.nickName === ""){
        //     userData.user.user_name = UserInfo.user.user_name;
        // }
        // _putFetch(Urls, userData)
        // .then(res => {
            history.push('/')
        // })
    }

        handleInputChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }

        getImg(e){
            e.preventDefault();
            let file       = e.target.files[0];
            let data     = new FormData();
            let reader  = new FileReader();

            reader.onload = () =>  {
                this.setState({imagePreviewUrls : reader.result})
            };;
            reader.readAsDataURL(file)

            data.append("file" + file, file)
            fetch('http://maymed.roompackers.com/api/media',{
                method:'POST', body:data
            })
            // .then(resData => {
            //     const Urls = URLS.API.UpdateUserGr + UserInfo.user.no_user;
            //     const userData = {
            //         user : {
            //             user_uri : resData.results[0].uri
            //         },
            //         user_pf : {
            //             no_photo : resData.results[0].id
            //         }
            //     }
            //     _putFetch(Urls, userData)
            // })
        }

    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <BackButton handleClick={history.goBack}/>
                    <h3>나의 정보</h3>
                </Style.Header>
                <Style.Body>
                    <Style.ProfileImage>
                        <input type="file" onChange={this.getImg} />
                        <Style.Image
                            src={this.state.imagePreviewUrls===""? "/images/round-man.png" :this.state.imagePreviewUrls}
                            height="100"
                            alt="이미지 미리보기..."
                        />
                    </Style.ProfileImage>
                    <Style.ProfileInputBar>
                        <b>닉네임</b>
                        <input
                            type="text"
                            name="nickName"
                            value={this.state.nickName}
                            onChange={this.handleInputChange}
                        />
                        <span>수정</span>
                    </Style.ProfileInputBar>
                </Style.Body>
                <Style.Footer>
                    <Style.Button onClick={this.ChangeInfo} gradient>변경하기</Style.Button>
                </Style.Footer>
            </Style.Wrapper>
        )
    }
}

export default MyPageContent
