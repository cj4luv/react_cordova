import styled from 'styled-components';

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
  margin-bottom:24px;
  position:relative;
  text-align:left;
  & p{
    font-size:12px;
    padding-bottom:7px;
    color:#979797;
    text-indent:5px;
  }
`;

export const Img = styled.span`
  display:block;
  width:82px;
  height:82px;
  overflow:hidden;
  position:absolute;
  top:7px;
  left:10px;
  & img {
    width:100%;
  }
`;

export const Title = styled.div`
  padding:10px 5px;
  position:relative;
  & h3, h4{
    display:inline;
    font-size:18px;
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

export const Likey = styled.span`
  position:absolute;
  right:15px;
  top:10px;
  & .likey{
    display:${props => props.likey? "none" : "inline"};
    color:red;
  }
  & .unlikey{
    display:${props => props.likey? "inline" : "none"};
    color:red;
  }
`;

export const PriceBar = styled.p`
padding-top:10px;
& .salePrice {
  font-size:20px;
  font-weight:400;
  color:#887ffe;
  padding-right:10px;
}
& .originPrice {
  font-weight:400;
  font-size:16px;
  color:#adadad;
  text-decoration:line-through;
}
`;
