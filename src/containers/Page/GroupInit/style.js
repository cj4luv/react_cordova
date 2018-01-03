import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  z-index:999;
  overflow:scroll;
  background-color:#fff;
`;

export const Header = styled.div`
  width:100%;
  padding:79px 0 120px;
  text-align:center;
  line-height:20px;
`;

export const Body = styled.div`
  width:100%;
  text-align:center;
  padding-bottom:150px;
  & img {
    width:50%;
    display:block;
    margin:auto;
  }
`;

export const Footer = styled.div`
  width:100%;
  padding:0 20px;
  box-sizing:border-box;
`;

export const Button = styled.div`
  width:100%;
  heihgt:50px;
  border-radius:50px;
  text-align:center;
  box-sizing:border-box;
  padding:17px;
  margin-top:10px;
  background-image : ${props => props.gradient? 'radial-gradient(circle at -10% -4%, #eb479e, #ff7387)' : "none"};
  background-color : ${props => props.gradient? "pink" : "#fff"};
  color: ${props => props.gradient? "#fff" : "#d9d9d9"};
  border: ${props => props.gradient? "none" : "1px solid #c9c9c9"};
`;
