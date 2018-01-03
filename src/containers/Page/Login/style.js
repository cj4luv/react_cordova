import styled from 'styled-components';

export const Header = styled.div`
  width:100%;
  box-sizing:border-box;
  padding: 80px 0;
  text-align:center;
`;

export const Body = styled.div`
  width:80%;
  margin:auto;
`;

export const Footer = styled.div`
  width:80%;
  padding-top:10px;
  margin:auto;
  position:relative;
  & a {
    display:block;
    text-align:center;
    font-size:0.8em;
    color:rgba(255,255,255,0.7);
  }
`;


export const Input = styled.input`
  display:block;
  box-sizing:border-box;
  padding:11px 0 15px 27px;
  margin-bottom:20px;
  font-size:1.1em;
  width:100%;
  height:50px;
  border-radius:50px;
  border: 1px solid rgba(240,240,240,0.5);
  background-color:rgba(240,240,240,0.12);
  color:#fff;
`;

export const SignUp = styled.p`
  position:absolute;
  width:100%;
  text-align:center;
  left:50%;
  bottom:-20px;
  transform:translateX(-50%);
  color:rgba(255,255,255,0.7);
  font-size:0.9em;
  & a {
    text-decoration:none;
    display:inline;
    font-size:0.9em;
    color:#fff;
    text-weight:bold;
  }
`;
