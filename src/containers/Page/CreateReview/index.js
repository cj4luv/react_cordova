import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as Style from './style'
import store from '../../../common/store';
import { _postFetch, _postImgFetch  } from '../../../common/utils';
import { URLS } from '../../../common/settings';
import BackButton from '../../../components/BackButton';

const PreviewImage =(props) =>{
    const Lists = props.images.map((img, index) =>(
        <Style.Image key={index}>
            <img src={img} alt="preview" />
        </Style.Image>
    ))
    return(
        <ul>
            {Lists}
        </ul>
    )
}

class CreateReview extends Component{
    constructor(props){
        super(props);
        this.state ={
            files : [],
            imagePreviewUrls : [],
            ctg_evt : 1,
            com_name :"",
            review_sum : "",
            b_join : 0,
            images : []
        }
        this.fileUpload = this.fileUpload.bind(this)
        this.CreateRev = this.CreateRev.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    handleSelectChange(e){
        this.setState({
            ctg_evt : e.target.value
        })
    }

    fileUpload(e){
        e.preventDefault();
        let data = new FormData();
        let imagePreviewUrls = this.state.imagePreviewUrls;
        let file = e.target.files;
        for (let key =0; key < file.length; key++) {
            let url = URL.createObjectURL(file[key]);
            imagePreviewUrls.push(url);
        }
        for (var key in file) {
            data.append('file'+key, file[key])
        }
        this.setState({
            imagePreviewUrls : imagePreviewUrls,
        });

        fetch('http://maymed.roompackers.com/api/media/', {
            method: 'POST',
            body: data,
        })
        .then((res) => {
            return res.json();
        })
        .then((resData)=>{
            this.setState({
                images : resData.results
            })
        });
    }

    CreateRev(){
      const {UserInfo} = store;
        let Body ={
            review : {
                no_user : UserInfo.user.no_user,
                no_com : 1,
                ctg_evt : this.state.ctg_evt,
                user_name : UserInfo.user.user_name,
                com_name : this.state.com_name,
                review_sum : this.state.review_sum,
                info_url : "www.naver.com",
                cnt_image : this.state.images.length
            },
            review_ext : {
                b_join : 1
            },
            review_dt : {
                review : this.state.review_sum
            }
        }
        switch (this.state.images.length) {
          case 6:
            Body.review.image_url6 = this.state.images[5].uri;
            Body.review_ext.no_photo6 = this.state.images[5].id;
          case 5:
            Body.review_ext.no_photo5 = this.state.images[4].id;
            Body.review.image_url5 = this.state.images[4].uri;
          case 4:
            Body.review_ext.no_photo4 = this.state.images[3].id;
            Body.review.image_url4 = this.state.images[3].uri;
          case 3:
            Body.review_ext.no_photo3 = this.state.images[2].id;
            Body.review.image_url3 = this.state.images[2].uri;
          case 2:
            Body.review.image_url2 = this.state.images[1].uri;
            Body.review_ext.no_photo2 = this.state.images[1].id;
          case 1:
            Body.review.image_url1 = this.state.images[0].uri;
            Body.review_ext.no_photo1 = this.state.images[0].id;
            break;
          case 0:
            alert("사진을 첨부해주세요.")
            break;
          default:
            console.log("default");
        }
        console.log(Body);
        const Urls = URLS.API.CreateReview;
        _postFetch(Urls, Body)
        .then(res => {
            this.props.history.goBack()
        })
        .catch(err => console.log(err))
    }

render(){
    return(
        <Style.FloatingWrapper gray>
            <Style.Wrapper>
                <Style.Header>
                    <h3>리뷰 제작</h3>
                    <BackButton
                        cancel
                        handleClick={this.props.history.goBack}
                     />
                </Style.Header>
                <Style.Body>
                    <Style.SmallTitle>카테고리</Style.SmallTitle>
                    <Style.SelectWrapper value ={this.state.ctg_evt} onChange={this.handleSelectChange}>
                        <option value="1">웨딩홀</option>
                        <option value="2">스튜디오</option>
                        <option value="3">드레스</option>
                        <option value="4">헤어메이크업</option>
                        <option value="5">신혼여행</option>
                        <option value="6">허니문스냅</option>
                        <option value="7">한복</option>
                        <option value="8">청첩장</option>
                        <option value="9">부케</option>
                        <option value="10">뷰티캐어</option>
                        <option value="11">예단</option>
                        <option value="12">예물</option>
                        <option value="13">예복</option>
                    </Style.SelectWrapper>
                    <Style.SmallTitle>업체명</Style.SmallTitle>
                    <Style.SmallTitle>
                        <Style.Text type="text" placeholder="업체명" name="com_name" value={this.state.com_name} onChange={this.handleInputChange}/>
                    </Style.SmallTitle>
                        <Style.SmallTitle>해당업체에 참여한 이벤트가 있나요?</Style.SmallTitle>
                    <Style.SmallTitle>
                        <Style.InputLabel>
                            <Style.Radio type="radio" name="b_join" value={1} onChange={this.handleInputChange}/>
                            예
                        </Style.InputLabel>
                        <Style.InputLabel>
                            <Style.Radio type="radio" name="b_join" value={0} onChange={this.handleInputChange}/>
                            아니오
                            </Style.InputLabel>
                    </Style.SmallTitle>
                    <Style.SmallTitle>후기작성 <input type="file" accept="image/*" onChange={this.fileUpload} multiple/></Style.SmallTitle>
                    <Style.TextArea placeholder="내용을 입력해주세요"
                        name="review_sum"
                        value={this.state.review_sum}
                        onChange={this.handleInputChange}
                    />
                    <Style.SmallTitle>견적입력</Style.SmallTitle>
                    <Style.TextArea placeholder="계약한 상품 및 계약 조건(할인, 식사비 등)을 적어주세요"/>
                    <PreviewImage images = {this.state.imagePreviewUrls}/>
                </Style.Body>
                <Style.Footer>
                    <span onClick={this.CreateRev}>등록하기</span>
                </Style.Footer>
            </Style.Wrapper>
        </Style.FloatingWrapper>
    )
}
}
export default withRouter(CreateReview)
