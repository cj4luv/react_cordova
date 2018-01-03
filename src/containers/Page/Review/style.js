import styled from 'styled-components';
import {redColor} from '../../../common/styles'

export const Wrapper = styled.div`
  width:100%;
  background-color:${props => props.gray? '#f8fafa' : '#fff'}
`;

export const ListWrapper = styled.ul`
  width:100%;
  background-color:#f5f5f5;
  padding-bottom:52px;
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

export const FormWrapper = styled.div`
  width : 100%;
  height: 57px;
  padding: 10px 16px;
  background-color:${props => props.white?"#fff":"transparent"};
  margin-bottom:3px;
  text-align:${props => props.right? "right":"left"};
  & select {
    padding: 10px;
    background-color: #fff;
    text-align: center;
    -webkit-appearance: none;
    border-radius: 5px;
    border: 1px solid #f5f5f5;
  }
  & a {
      text-decoration:none;
      display: inline-block;
      padding: 6px 9px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: top;
      cursor: pointer;
      user-select: none;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 2px;
      box-sizing:border-box;
      color:#f9f9f9;
      background-color: ${redColor};
  }
`;

export const Form = styled.div`
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


export const StyledTabList = styled.div`
padding:10px 0;
background-color:#fff;
overflow-x:auto;
`;

export const StyledTab = styled.div`
  display:inline;
  padding:5px 15px;
  white-space:nowrap;
  &.active{
    border-bottom: solid 3px ${redColor};
  }
`
