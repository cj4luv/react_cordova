import React, { Component } from 'react';
import styled from 'styled-components';

const ListWrapper = styled.li`
  width:100%;
  text-align:center;
  box-sizing:border-box;
  padding-bottom:20px;
  & * {
    text-align:left;
  }
  &::before, &::after {
    content:"";
    display:table;
    clear:both;
  }
`;

class List extends Component{
    render(){
        return(
            <ListWrapper>
                {this.props.children}
            </ListWrapper>
        )
    }
}

export default List
