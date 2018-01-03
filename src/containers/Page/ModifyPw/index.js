import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as Style from './style';
import BackButton from '../../../components/BackButton'

class ModifyPassWord extends Component{
    constructor(props){
        super(props);
        this.state={
            curPW : "",
            newPW : "",
            confirmPW : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <Style.Wrapper>
                <Style.Header>
                    <BackButton handleClick={()=>{this.props.history.go(-1)}}/>
                    <h3>비밀번호 변경</h3>
                </Style.Header>
                <Style.Body>
                    <label>현재 비밀번호</label>
                    <Style.Input
                        type="password"
                        name="curPW"
                        value={this.state.curPW}
                        onChange={this.handleInputChange}
                    />
                    <label>새 비밀번호</label>
                    <Style.Input
                        type="password"
                        name="newPW"
                        value={this.state.newPW}
                        onChange={this.handleInputChange}
                    />
                    <label>비밀번호 확인</label>
                    <Style.Input
                        type="password"
                        name="confirmPW"
                        value={this.state.confirmPW}
                        onChange={this.handleInputChange}
                    />
                </Style.Body>
                <Style.Footer>
                    <button>변경하기</button>
                </Style.Footer>
            </Style.Wrapper>
        )
    }
}

export default withRouter(ModifyPassWord);
