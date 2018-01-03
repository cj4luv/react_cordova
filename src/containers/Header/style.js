import styled from 'styled-components';

export const Header = styled.div`
  width:100%;
  height:48px;
  position:fixed;
  z-index:10;
  left:0;
  top:0;
  box-sizing:border-box;
  background-color:#fff;
  & > * {
    float:left
  }
`;
export const HeaderMenus = styled.div`
  box-sizing:border-box;
  width:40%;
  height:100%;
  padding-top:14px;
  padding-right:15px;
  & a{
      display:inline-block;
      text-align:right;
      cursor:pointer;
      border:0;
      box-sizing:border-box;
      width:33%;
      overflow:hidden;
      height:100%;
      border-radius:0;
  }
`;

export const Anchor = styled.a`

`;

export const Title = styled.h2`
  box-sizing:border-box;
  width:60%;
  font-size:20px;
  height:100%;
  padding-top:17px;
  padding-left:15px;
`;

export const SlideBarWrapper = styled.div`
  position:fixed;
  height:100%;
  width:85%;
  right:${props => props.toggle? "0" : "-90%" };
  -webkit-transition: right 0.3s;
  -moz-transition: right 0.3s;
  transition: right 0.3s;
  top:0;
  z-index:999;
`;

export const Dimmed = styled.div`
  display:${props => props.toggle? "block" : "none"};
  opacity:${props => props.toggle? "0.5" : "0"};
  background-color:rgb(0,0,0);
  transition:opacity 0.5s 0.1s;
  position:fixed;
  width:100%;
  height:100%;
  left:0;
  top:0;
  z-index:998;
`;
