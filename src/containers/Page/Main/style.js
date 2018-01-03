import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  padding-bottom:50px;
  background-color:${props => props.gray? '#f8fafa' : '#fff'}
`;

export const ComponentWrapper = styled.div`
  padding:10px;
  border-bottom:1px solid #e9e9e9;
`;
export const ListWrapper = styled.ul`
  width:100%;
  text-align:center;
  line-height:0.65;
  & * {
    text-align:left;
  }
  &::before, &::after {
    content:"";
    display:table;
    clear:both;
  }
`;

export const AdsWrapper = styled.div`
width: 100%;
height: 56px;
background-color: #887ffe;
text-align:center;
padding:20px 0;
color:#e9e9e9;
`;

export const Review = styled.li`
  display:inline-block;
  width:33%;
  box-sizing:border-box;
  padding:4px;
  overflow:hidden;
  position:relative;
  cursor:pointer;
  & > img {
    width:100%;
  }
  & span{
    position:absolute;
    bottom: 10px;
    left: 20px;
    font-size:12px;
    color:#fff;
  }
`;

export const Event = styled.li`
width:100%;
height:100px;
box-sizing:border-box;
padding: 0 0 10px 100px;
position:relative;
text-align:left;
& p{
  font-size:12px;
  font-weight:100;
  padding-bottom:7px;
  line-height:0.7;
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

export const rvImg = styled.p`
  display:block;
  width:85%;
  min-width:82px;
  min-height:82px;
  overflow:hidden;
  position:relative;
  top:7px;
  left:10px;
  & img {
    width:100%;
  }
`;
export const Title = styled.div`
padding: 20px 30px 13px 5px;
position:relative;
font-size:18px;
& h3, h4{
  display:inline
}
& a {
  cursor:pointer;
  font-size:14px;
  opacity:0.4;
  position:absolute;
  right:15px;
  top:19px;
}
`;


export const SmallTitle = styled.div`
padding: 10px 4px 15px;

position:relative;
& h3, h4{
  display:inline;
  font-size:16px;
}
& a {
  cursor:pointer;
  font-size:14px;
  opacity:0.4;
  position:absolute;
  right:15px;
  top:30px;
}
`;


export const Likey = styled.span`
  position:absolute;
  width:16px;
  right:15px;
  top:6px;
  & .likey{
    width:100%;
    display:${props => props.likey? "none" : "inline"};
    color:red;
  }
  & .unlikey{
    width:100%;
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
