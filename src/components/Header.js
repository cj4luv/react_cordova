import React, {Component} from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width:100%;
  height:75px;
  position:relative;
  & h3{
    padding:20px;
    font-size:1.5em;
    text-align:center;
  }
`;

class HeaderComp extends Component{
    render(){
        return(
            <Header>
                {this.props.children}
            </Header>
        )
    }
}

export default HeaderComp
