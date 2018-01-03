import styled from 'styled-components';
import { Tab, TabList, TabPanel } from 'react-tabs';
import {redColor} from '../../../common/styles'

export const Wrapper = styled.div`
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:10;
  background-color:#fff;
  & .react-tabs__tab {
    display:inline;
  }
`;

export const StyledTabList = styled(TabList)`
padding:10px;
&::before, &::after{
  content:"";
  clear:both;
  display:table;
}
`;


export const StyledTab = styled(Tab)`
width:50%;
box-sizing:border-box;
padding:10px;
display:block;
float:left;
text-align:center;
border-radius: 3px;
background-color: #f5f5f5;
border: solid 0.5px #f5f5f5;
&.active{
  border-radius: 3px;
  border: solid 0.5px ${redColor};
  background-color:#fff;
}
`

export const Header = styled.div`
width:100%;
height:75px;
position:relative;
& h3{
  padding:20px;
  text-align:center;
}
`;

export const StyledTabPanel = styled(TabPanel)`
    overflow:hidden;
    left:0;
    position:absolute;
    height:400px;
`;

export const Panel = styled.div`
    margin: 10px 15px;
    padding: 10px;
    background-color: #f9f9f9;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
  & p {
      height:100%;
      overflow-y:scroll
  }
`;
