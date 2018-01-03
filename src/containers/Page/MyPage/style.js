import styled from 'styled-components';

export const Wrapper = styled.div`
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#fff;
  z-index:15;
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

export const Body = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:0 20px 100px;
`;

export const ProfileImage = styled.label`
  display:block;
  width:100px;
  height:100px;
  border-radius:100px;
  background-color:#e9e9e9;
  margin:auto;
  & > input {
    opacity:o;
    position:fixed;
    left:-999px;
  }
`;

export const ProfileInputBar = styled.label`
  width:100%;
  display:block;
  padding:30px 0 7px;
  border-bottom:1px solid #e9e9e9;
  position:relative;
  & > b {
    display:inline-block;
    width:15%;
    min-width:50px;
    box-sizing:border-box;
    color:#c9c9c9;
  }
  & > input {
    display:inline-block;
    width:80%;
    padding:10px 0;

  }
  & span {
    position:absolute;
    right:10px;
    top:40px;
  }
`;

export const Image = styled.img`
  width:100px;
  border-radius:100%;
  color:transparent;
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
