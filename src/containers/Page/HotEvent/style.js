import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;
height:570px;
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
export const Event = styled.li`
width:100%;
height:100px;
box-sizing:border-box;
padding: 0 0 10px 100px;
position:relative;
text-align:left;
&::before{
  content:"";
  display:block;
  width:82px;
  height:82px;
  position:absolute;
  top:7px;
  left:10px;
  background-color:pink;
}
& p{
  font-size:12px;
  padding-bottom:7px;
  color:#757575;
  text-indent:5px;
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