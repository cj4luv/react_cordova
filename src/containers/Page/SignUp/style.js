import styled from 'styled-components';
import {redColor, gradientBg} from '../../../common/styles'

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  overflow:scroll;
  z-index:15;
  left:0;
  top:0;
  box-sizing:border-box;
  background-color: #fff;
`;

export const Header = styled.div`
  box-sizing:border-box;
  padding:23px 40px;
  color : #c1c1c1;
  position:relative;
  text-align:center;
`;

export const Body = styled.div`
box-sizing:border-box;
padding:40px;
`;

export const InputWrapper = styled.label`
  display:block;
  padding-top:20px;
  position:relative;
  & p {
    color:#c1c1c1;
  }
  & input {
    border-bottom:
  }
`;

export const checkWrapper = styled.div`
  display:block;
  padding-top:20px;
`;
export const Button = styled.button`
  appearance:none;
  margin-top:30px;
  width:100%;
  height:50px;
  box-sizing:border-box;
  padding:20px;
  text-align:center;
  color:#f1f1f1;
  background-color:${props => props.disabled?  "#c6c4c4" : "red" };
  background-image: ${props => props.disabled? "none" : gradientBg };
  border-radius:50px;
`;


export const checkPolicy = styled.div`
  & label {
    display:inline;
  }
  & span {
    float:right;
    padding-top:2.5px;
    color:#d5d5d5;
  }
`;

export const policy = styled.div`
  width:100%;
  background-color:#f8f8f8;
  box-sizing:border-box;
  margin-top:15px;
  padding:${props => props.toggle? "20px 10px" : "0"}};
  height:${props => props.toggle? "190px" : "0"}};
  overflow:scroll;

`;


export const CheckBox = styled.input.attrs({
  type:"checkbox"
})`
  display:inline-block;
  width:19px;
  height:19px;
  vertical-align:middle;
  background-color:#fff;
  position:relative;
  appearance:none;
  border:1px solid #d9d9d9;
  &:checked {
    background-color: ${redColor};
  }
  &:checked::before {
    content : "";
    display:block;
    width:10px;
    height:8px;
    border-left:1px solid #fff;
    border-bottom:1px solid #fff;
    transform:rotateZ(-45deg);
    position:absolute;
    top:2px;
    left:3px;
  }
`;

export const RadioButton = styled.input.attrs({
  type : "radio"
})`
  display:inline-block;
  width:19px;
  height:19px;
  border-radius:19px;
  vertical-align:middle;
  background-color:#fff;
  position:relative;
  &:checked::before {
    content : "";
    display:block;
    width:8px;
    heihgt:10px;
    border-left:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    transform:rotateZ(-45deg);
    position:absolute;
    top:3px;
    left:3px;
  }
`;


export const PassWord = styled.input.attrs({
  type : "password"
})`
  display:inline-block;
  width:100%;
  height:36px;
  box-sizing:border-box;
  padding:10px;
  background-color:#fff;
  border:none;
  border-bottom:1px solid #d9d9d9;

`;

export const Text = styled.input.attrs({
  type : "text"
})`
  display:inline-block;
  width:100%;
  height:36px;
  box-sizing:border-box;
  padding:10px;
  background-color:#fff;
  border:none;
  border-bottom:1px solid #d9d9d9;
`;


export const Phone = styled.input.attrs({
  type : "tel"
})`
  display:inline-block;
  width:100%;
  height:36px;
  box-sizing:border-box;
  padding:10px;
  background-color:#fff;
  border:none;
  border-bottom:1px solid #d9d9d9;
`;

export const Select = styled.select`
  width:150px;
  border:1px solid #e9e9e9;
  padding:8px ;
  text-align:center;
`;

export const WedDate = styled.label`
  display:inline-block;
  width:75px;
  & input {
    width:60px;
    border:none;
    border-bottom:1px solid #d9d9d9;
  }
`;
export const CheckPhone = styled.button`
  appearance : none;
  padding:7px 13px;
  background-color:#e9e9e9;
  border-radius:3px;
  border:none;
  position:absolute;
  right:0;
  bottom:3px;
`;
