import styled from 'styled-components';
import {redColor} from '../../../common/styles'

export const Badge = styled.div`
  width : 45px;
  height : 45px;
  border-radius : 100%;
  box-shadow : 0 2px 5px rgba(50,50,50,0.3);
  box-sizing : border-box;
  padding:15px 0;
  text-align:center;
  color:red;
  position:absolute;
  top:50%;
  left:10px;
  transform : translateY(-50%);
`;

export const ListWrapper = styled.ul`
  width:100%;
  padding:10px;
  box-sizing:border-box;
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
  &::before, &::after{
    content:"";
    display:table;
    clear:both;
  }
`;

export const FloatDiv = styled.div`
  width:${props => 100/props.col }%;
  float:left;
  position:relative;
  & span {
    position:${props => props.won? "absolute" : "static"};
    right: 0;
    top: 0;
    background-color: #fff;
    padding-bottom: 5px;
    padding-right:5px;
  }
  & input[type="number"]{
    border: none;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
  }
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
  top:-5px;
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
