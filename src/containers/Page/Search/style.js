import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  z-index:99;
  left:0;
  top:0;
  box-sizing:border-box;
  background-color:#fff;
`;

export const Header = styled.div`
  height:75px;
  padding:20px 15px;
  box-sizing:border-box;
  & > div, & > input {
    float:left;
  }
  &::before, &::after{
    content:"";
    display:table;
    clear:both;
  }
`;

export const Input = styled.input`
  padding:0.2em 0.3em;
  display:block;
  height:34px;
  width:80%;
  box-sizing:border-box;
  border:1px solid #e9e9e9;
`;

export const BackBtn = styled.div`
  display:block;
  width:10%;
  height:34px;
  position:relative;
  &::before{
    content:"";
    display:block;
    width:14px;
    height:14px;
    border-left:1px solid #292929;
    border-bottom:1px solid #292929;
    transform: rotateZ(45deg);
    position:absolute;
    left:8px;
    top:10px;
  }
`;

export const SearchBtn = styled.div`
  display:block;
  width:10%;
  height:34px;
  background-color:#c0c0c0;
  opacity:0.9;
  position:relative;
  border-radius:2px;
  &:hover {
    opacity:1;
  }
  &::before, &::after {
    content:'';
    display:block;
    width:16px;
    height:1px;
    border-bottom:1px solid #fff;
    position:absolute;
    left:8px;
    top:15px;
  }
  &::before{
    transform:rotateZ(45deg);
  }
  &::after{
    transform:rotateZ(-45deg);
  }
`;
