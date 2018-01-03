import styled from 'styled-components';

export const ClearBox = styled.div`
  &::before, &::after {
    content :"";
    display:table;
    clear:both;
  }
  & div img{
    width:100%;
  }
`;

export const Half = styled.p`
  width: 50vw;
  height: 31vw;
  overflow: hidden;
  float: left;
  & img{
    width:100%;
  }
`;

export const OneThird = styled.p`
    width: 33vw;
    height: 22vw;
    overflow: hidden;
    float: left;
  &.center {
    width:34%;
  }
  & img{
    width:100%;
  }
`;

export const TwoThird = styled.p`
  width:67vw;
  height:45vw;
  overflow:hidden;
  float:left;
  & img{
    width:100%;
  }
`;

export const OneThirdLast = styled.p`
    width: 33vw;
    height:45vw;
    overflow: hidden;
    float: left;
  &.center {
    width:34%;
  }
  & img{
    width:100%;
  }
`;

export const ModalWrapper = styled.div`
  width: 250px;
  height: 200px;
  position: relative;
  text-align:center;
  background-color:transparent;
  & h2 {
    box-sizing:border-box;
    font-size:1.1em;
    padding:20px;
  }
  & p {
    box-sizing:border-box;
    line-height:20px;
    padding:0 20px 20px;
  }
  & img {
    width:100%;
  }
  & div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
