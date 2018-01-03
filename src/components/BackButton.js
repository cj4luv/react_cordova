import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
  position:absolute;
  top:20px;
  ${props => props.cancel?"right": "left"}:20px;
  width:18px;
  height:18px;
  border-left : ${props => props.cancel?"none": "2px solid #c1c1c1"};
  border-bottom : ${props => props.cancel?"none": "2px solid #c1c1c1"};
  transform : ${props => props.cancel?"none": "rotateZ(45deg)"};
  &::before, &::after {
    content:"";
    display:${props => props.cancel?"block": "none"};
    width:14px;
    height:1px;
    border-bottom:1px solid #292929;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-7px;
    transform:rotateZ(-45deg);
  }
  &::after {
    transform:rotateZ(45deg);
  }
`;

const BackButton = (props) => {
    return(
        <Button onClick={props.handleClick} cancel = {props.cancel}></Button>
    )
}

export default BackButton;
