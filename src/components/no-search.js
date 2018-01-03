import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:4.5em;
  text-align:center;
  background-color:#f8f8f8;
  color:#9d9d9d;
  & img {
    padding-bottom:10px;
  }
`;

const NoSearch = () => {
  return(
    <Wrapper>
      <img src="/assets/img/serch-no.png" alt="search-no"/><br/>
      검색된 결과가 없습니다.
    </Wrapper>    
  )
}


export default NoSearch;