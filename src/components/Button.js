import React, { Component } from 'react'
import styled from 'styled-components';

const Btn = styled.button`
  display: inline-block;
  padding: 0.3em 0.5em;
  margin-bottom: 0;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: top;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 2px;
  appearance: none;
  box-sizing:border-box;
  color:#f9f9f9;
  background-color: #9d9d9d;
`;

export class Button extends Component{
  render(){
    return (
      <Btn onClick={this.props.handleClick}>
        {this.props.text}
      </Btn>
    )
  }
}
