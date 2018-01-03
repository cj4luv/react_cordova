import styled from 'styled-components';
import {gradientBg} from '../../../common/styles';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  z-index:15;
  left:0;
  top:0;
  box-sizing:border-box;
  background-color: #fff;
`;

export const Header = styled.div`
  width:100%;
  position:relative;
`;

export const Title = styled.div`
  padding-top:100px;
  text-align:center;
  font-size:1.1em;
`;

export const Body = styled.div`
  box-sizing:border-box;
  padding:40px;
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

export const Button = styled.button`
  appearance:none;
  margin-top:175px;
  width:100%;
  height:50px;
  & a {
          display:block;
          text-decoration:none;
          width:100%;
          height:50px;
          box-sizing:border-box;
          padding:20px;
          text-align:center;
          color:#f1f1f1;
          background-color:${props => props.disabled? "#c6c4c4": "red"  };
          background-image: ${props => props.disabled?  "none":  gradientBg};
          border-radius:50px;
  }
`;

export const DidURecieveCode = styled.p`
  color:#c1c1c1;
  font-size:0.8em;
  padding-top:20px;
  text-align:center;
  & span {
    color:red;
  }
`;

export const ModalWrapper = styled.div`
  width:100%;
  text-align:center;
  & h2 {
    box-sizing:border-box;
    font-size:1.1em;
    padding:20px;
  }
  & p {
    box-sizing:border-box;
    line-height:20px;
    padding:0 20px 20px;
    color:#333;
  }
`;

export const ModalButtons = styled.div`
  & button {
    appearance:none;
    border:none;
    border-radius:0;
    width:${props => props.confirm? "50%" : "100%"};
    background-image: radial-gradient(circle at -10% -4%, #eb479e, #ff7387);
    height: 39px;
    box-sizing: border-box;
    padding: 13px;
    text-align:center;
    color:#fff;
  }
`;
