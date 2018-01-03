import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  box-sizing:border-box;
  background-color:#fff;
`;

export const NoSearch = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:4.5em;
  text-align:center;
  background-color:#f8f8f8;
  color:#9d9d9d;
  & img {
    padding-bottom:10px;
  }
`;

export const Header = styled.div``;

export const Body = styled.div``;


export const ReviewListWrapper = styled.ul`
  width:100%;
  box-sizing:border-box;
`;
export const ReviewList = styled.li`
  width:100%;
  height:65px;
  margin-top:10px;
  margin-bottom:10px;
  & img {
    height:100%;
  }
  & div {
    width:auto;
    display:inline-block;
    padding:10px 15px;
    vertical-align:top;
  }
  & div span{
    font-size:17px;
    font-weight:bold;
    padding-bottom:10px;
  }
`;
