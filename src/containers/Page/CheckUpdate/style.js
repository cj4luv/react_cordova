import styled from 'styled-components';

export const Wrapper = styled.div`
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:#fff;
  z-index:15;
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
