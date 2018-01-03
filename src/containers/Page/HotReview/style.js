import styled from 'styled-components';
import {redColor} from '../../../common/styles'

export const Wrapper = styled.div`
  width:100%;
  height:570px;
  background-color:${props => props.gray? '#f8fafa' : '#fff'}
`;

export const FloatingWrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  background-color:${props => props.gray? '#f8fafa' : '#fff'}
`;

export const ListWrapper = styled.ul`
  width:100%;
  text-align:center;
  & * {
    text-align:left;
  }
  &::before, &::after {
    content:"";
    display:table;
    clear:both;
  }
`;

export const Title = styled.div`
padding:10px 5px;
position:relative;
& h3, h4{
  display:inline
}
& a {
  cursor:pointer;
  font-size:14px;
  opacity:0.4;
  position:absolute;
  right:10px;
  top:10px;
}
`;
export const FormWrapper = styled.div`
  width : 100%;
  height: 57px;
  padding: 13px 16px;
`;

export const Form = styled.form`
  display:inline-block;
  margin-right:5px;
  & input {
    padding:10px 5px;
    width:200px;
    border:1px solid #e9e9e9;
  }
  & button{
    width:40px;
    height:36px;
    box-sizing:border-box;
    vertical-align:top;
    border:1px solid #d0d0d0;
    border-radius:0;
    background-color:#fff;
  }
`;

export const ReviewCard = styled.li`
  box-sizing:border-box;
  width:100%;
  margin:10px 0;
  padding:15px;
  background-color:#fff;
`;

export const ReviewCardHeader = styled.div`
  width:100%;
  padding:10px 0;
`;

export const ReviewCardImg = styled.div`
  box-sizing:border-box;
  background-color:#c9c9c9;
  width:100%;
  padding:114px;
  text-align:center;
`;

export const ReviewCardDesc = styled.div`
  width:100%;
`;

export const ReviewCardFooter = styled.div`
  width:100%;
  font-size:12px;
  color:#555;
  & > div {
    width:50%;
    float:left;
  }
  &::before, &::after{
    content:"";
    display:table;
    clear:both;
  }
`;

export const Right = styled.div`
  text-align:right;
  box-sizing:border-box;
  padding-right:15px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 9px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: top;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 2px;
  appearance:none;
  -webkit-appearance: button;
  box-sizing:border-box;
  color:#f9f9f9;
  background-color: ${redColor};
`;

export const ToggleMenu = styled.div`
  display:${props => props.toggle? "block" : "none"};
`;

export const Btn = styled.span`
  display: inline-block;
  width:30px;
  height:30px;
  background-color:pink;
  cursor:pointer;
`;
