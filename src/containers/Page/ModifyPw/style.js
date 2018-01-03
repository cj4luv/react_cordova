import styled from 'styled-components';

export const Wrapper = styled.div`
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:10;
  background-color:#fff;
  & .react-tabs__tab {
    display:inline;
  }
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
  padding:15px;
`;

export const Input = styled.input`
  width:100%;
  border: 1px solid transparent;
  border-bottom:1px solid #c9c9c9;
  box-sizing:border-box;
  padding:10px;
  margin-bottom:30px;
`;

export const Footer = styled.div`
  width:100%;
  text-align:center;
  & button {
    width: 303px;
    box-sizing:border-box;
    height: 50px;
    border-radius: 25px;
    color:#fff;
    font-size:1.3em;
    background-image: radial-gradient(circle at 0 36%, #ea489e, #ff7387);
  }
`;
