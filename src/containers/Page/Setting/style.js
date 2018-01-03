import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  background-color:${props => props.gray? '#f8fafa' : '#fff'}
`;

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

export const Header = styled.div`
  width:100%;
  padding:20px 0 15px;
  text-align:center;
`;
export const BackBtn = styled.button`
  appearance:none;
  background-color:transparent;
  border:none;
  position:fixed;
  font-size:1.2em;
  left:20px;
  top:12px;
`;

export const Body = styled.div`
  width:100%;
  padding:10px 20px;
  background-color:#f8f8f8;
`;

export const List = styled.li`
  width:100%;
  box-sizing:border-box;
  padding:19px 10px;
  border-bottom:1px solid #e9e9e9;
  & a{
      text-decoration:none;
      color:#292929;
  }
`;


export const ModalWrapper = styled.div`
  width: 250px;
  height: 150px;
  position: relative;
  text-align:center;
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

export const ModalButtons = styled.div`
  & a {
    display:inline-block;
    text-decoration:none;
    appearance:none;
    border:none;
    border-radius:0;
    width:${props => props.confirm? "50%" : "100%"};
    background-image: radial-gradient(circle at -10% -4%, #eb479e, #ff7387);
    height: 39px;
    box-sizing: border-box;
    padding: 13px;
    text-align:center;
    color:#fff;
  }
`;
