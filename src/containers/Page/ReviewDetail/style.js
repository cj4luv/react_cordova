import styled from 'styled-components';

export const FloatingWrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  z-index:15;
  overflow-y:scroll;
  left:0;
  top:0;
  background-color:${props => props.gray? '#f8fafa' : '#fff'}
`;

export const Header = styled.div`
width:100%;
height:75px;
position:relative;
& h3{
  padding:20px;
  text-align:center;
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
