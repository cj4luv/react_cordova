import styled from 'styled-components';
import {redColor} from '../../../common/styles'

export const Badge = styled.div`
  width : 45px;
  height : 45px;
  border-radius : 100%;
  box-shadow : 0 2px 5px rgba(50,50,50,0.3);
  box-sizing : border-box;
  padding:16px 0;
  text-align:center;
  color:${redColor};
  position:absolute;
  top:50%;
  left:10px;
  transform : translateY(-50%);
  &.first::before{
    content:"";
    display:block;
    width:2px;
    height:500px;
    background-color:#d9d9d9;
    position:absolute;
    left:20px;
    top:40px;
    z-index:-1;
  }
`;

export const ListWrapper = styled.ul`
  width:100%;
  padding:10px;
  padding-bottom:20px;
  box-sizing:border-box;
  position:relative;
`;

export const List = styled.li`
  position:relative;
  min-height:60px;
  width : 100%;
  border-bottom:1px solid #d9d9d9;
`;

export const ChildrenListWrapper = styled.ul`
  padding-left:70px;
`;

export const ChildrenList = styled.li`
  padding:10px 0;
`;

export const InputWrapper = styled.div`
  box-sizing:border-box;
  position:relative;
  top:10px;
  &::before, &::after{
    content:"";
    display:table;
    clear:both;
  }
`;


export const CheckBox = styled.input.attrs({
  type:"checkbox"
})`
  display:inline-block;
  width:19px;
  height:19px;
  float:right;
  vertical-align:middle;
  background-color:#fff;
  position:relative;
  top:-5px;
  appearance:none;
  border:1px solid #d9d9d9;
  &:checked {
    background-color:${redColor};
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
