import styled from 'styled-components';
import {gradientBg} from '../../../common/styles';
export const Header = styled.div`
  width:100%;
  padding-top:50px;
  padding-left:30px;
  position:relative;

`;

export const Body = styled.div`
  box-sizing:border-box;
  padding:40px;
  & a{
      display:block;
      margin-top:100px;
      width:100%;
      height:50px;
      box-sizing:border-box;
      padding:20px;
      text-align:center;
      color:#f1f1f1;
      background-color:${props => props.disable?  "#c6c4c4" : "red" };
      background-image: ${props => props.disable? "none" : gradientBg };
      border-radius:50px;
  }
`;

export const InputWrapper = styled.label`
  display:block;
  padding-top:20px;
  & p {
    color:#c1c1c1;
  }
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

export const Button = styled.button`
  appearance:none;
`;
