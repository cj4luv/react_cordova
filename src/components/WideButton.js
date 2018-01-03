import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display:block;
  box-sizing:border-box;
  text-align:center;
  padding:13px 0 16px;
  font-size:1.1em;
  width:100%;
  height:50px;
  border-radius:50px;
  background-color:${props => props.disabled? "transparent" : "#fff"};
  color:${props => props.disabled? "#fff" : "#ff7387"};
  margin-bottom:20px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

class WideButtonComp extends Component {
    render(){
        return(
            <Button
                onClick={this.props.handleClick}
                disabled={this.props.disabled}
            >
                로그인
            </Button>
        )
    }
}

export default WideButtonComp;
