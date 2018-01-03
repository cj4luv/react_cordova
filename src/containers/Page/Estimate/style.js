import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:570px;
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

export const Title = styled.div`
  width:100%;
  background-color:pink;
`;

export const Card = styled.li`
  width:100%;
  background-color:blue;
  color:#fff;
`;
