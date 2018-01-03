import styled from 'styled-components';
import { Tab,  TabList } from 'react-tabs';
import {redColor} from '../../../common/styles'

export const CardWrapper = styled.ul`
  width:100%;
  height:100%;
  text-align:center;
  overflow-y:scroll;
  padding-bottom:42px;
  & * {
    text-align:left;
  }
  &::before, &::after {
    content:"";
    display:table;
    clear:both;
  }
`;
export const Block = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  background-color:rgba(250,250,250,0.75);
  & div {
    width:250px;
    height:100px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    background-color:#fff;
    box-shadow:3px 3px 5px rgba(50,50,50,0.5);
    text-align:center;
  }
  & div h4 {
    padding:20px 0;
    font-size:18px;
  }
  & div a {
    position:absolute;
    text-decoration:none;
    left:0;
    bottom:0;
    width:100%;
    height: 36px;
    box-sizing:border-box;
    margin-top:15px;
    padding:10px;
    border-radius: 2px;
    color:#fff;
    background-image: radial-gradient(circle at 12% 8%, #eb479e, #ff7387);
  }
`;
export const StyledTabList = styled(TabList)`
    padding:10px;
    &::before, &::after{
        content:"";
        clear:both;
        display:table;
    }
`

export const StyledTab = styled(Tab)`
    width:50%;
    box-sizing:border-box;
    padding:13px 10px;
    display:block;
    float:left;
    color:#9d9d9d;
    text-align:center;
    border-radius: 3px;
    background-color: #f5f5f5;
    border: solid 0.5px #f5f5f5;
    &.active{
        color:${redColor};
        border-radius: 3px;
        border: solid 0.5px ${redColor};
        background-color:#fff;
    }
`;
