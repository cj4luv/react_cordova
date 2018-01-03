import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  z-index:999;
  background-color:#fff;
`;

export const Header = styled.div`
  width:100%;
  text-align:center;
  padding:56px 0;
  color:#fff;
  background-image: radial-gradient(circle at 12% 8%, #eb479e, #ff7387);
  & h3 {
    font-size:1.1em;
  }
  & img {
    width:33%;
    margin:auto;
    pdding:20px 0;
  }
  & p {
    line-height:20px;
    font-size:0.9em;
  }
`;

export const Body = styled.div`
  width:100%;
  box-sizing:border-box;
  text-align:center;
  position:relative;
  padding:60px 45px 100px;
  & span {
    display:inline-block;
    width:42px;
    height:28px;
    padding: 7px 0px;
    box-sizing:border-box;
    background-color:#ff7387;
    border-radius:28px;
    color:#fff;
    text-align:center;
    position:absolute;
    left:55px;
    top:63px;
  }
  & p{
    line-height:20px;
    font-size:0.9em;
    color:#393939;
  }
`;

export const Footer = styled.div`
  width:100%;
  padding:20px;
  box-sizing:border-box;
  border-top:1px solid #f5f5f5;
  text-align:center;
  & a{
    text-decoration:none;
    color:#292929;
    display:block;
  }
`;

export const Button = styled.div`
  width:100%;
  heihgt:50px;
  border-radius:50px;
  text-align:center;
  box-sizing:border-box;
  padding:17px;
  margin-top:20px;
  margin-bottom:20px;
  background-image : ${props => props.gradient? "none" : 'radial-gradient(circle at -10% -4%, #eb479e, #ff7387)'};
  background-color : ${props => props.gradient?  "#fff" : "pink"};
  color: ${props => props.gradient? "#d9d9d9" : "#fff" };
  border: ${props => props.gradient? "1px solid #c9c9c9" : "none"};
`;

export const Text = styled.input.attrs({
  type:"text"
})`
  display:inline-block;
  width:100%;
  height:36px;
  box-sizing:border-box;
  padding:10px;
  background-color:#fff;
  border:none;
  border-bottom:1px solid #d9d9d9;
  text-indent: 50px;
`;
