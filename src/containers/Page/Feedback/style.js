import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  z-index:10;
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
  box-sizing:border-box;
  width:100%;
  padding:30px;
  text-align:center;
`;

export const Button = styled.button`
  appearance:none;
  position:absolute;
  left:20px;
  top:20px;
  font-size:1.3em;
`;

export const Body = styled.div`
  box-sizing:border-box;
  width:100%;
  background-color:#e9e9ea;
  min-height:200px;
  padding:20px 30px;
  & textarea{
    width:100%;
    min-height:180px;
  }
`;

export const Footer = styled.div`
  width:100%;
  margin-top:30px;
`;
