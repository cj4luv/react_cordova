import styled from 'styled-components';
import {redColor} from '../../common/styles'

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


export const Card = styled.li`
  width:84%;
  margin:20px auto;
  box-sizing:border-box;
  text-align:left;
  box-shadow: 0 0 5px rgba(200,200,200,0.3);
`;

export const Header = styled.div`
	width: 100%;
	height: 145px;
  margin:auto;
	background-color: #ececec;
  overflow:hidden;
  & img{
    width:100%;
  }
`;

export const Body = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:10px;
  & h3 {
    font-size:1.1em;
    padding:10px 0;
  }
`;

export const Footer = styled.div`
    width: 100%;
    height: 48px;
    padding:15px;
    text-align:center;
    box-sizing:border-box;
    border-radius: 2px;
    background-color: ${redColor};
    color:#fff;
    & a {
        text-decoration:none;
        color:#292929;
    }
`;

export const Empty = styled.div`
  width:100%;
  padding:65px 0;
  text-align:center;
  font-size:20px;
  color:#d5d5d5;
  box-sizing:border-box;
`;
