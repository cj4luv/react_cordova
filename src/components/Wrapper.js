import React, {Component} from 'react';
import styled from 'styled-components';

const WrapperBox = styled.div`
  width:100%;
  height:${props=> props.floating? "100%":"auto"};
  position:${props=> props.floating? "fixed":"static"};
  left:0;
  top:0;
  z-index:${props=> props.floating? "16":"0"};
  background-color:${props => props.gray? '#f8fafa' : '#fff'};
  background-image:${props => props.login? 'radial-gradient(circle at 12% 8%, #eb479e, #ff7387)' : 'none'};
`;

class Wrapper extends Component {
    render(){
        return(
            <WrapperBox floating={this.props.floating} gray={this.props.gray} login={this.props.login}>
                {this.props.children}
            </WrapperBox>
        )
    }
}

export default Wrapper;
