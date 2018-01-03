import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
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

export const CardWrapper = styled.div`
  box-sizing:border-box;
  width:100%;
  white-space:nowrap;
  padding-bottom:60px;
  overflow-x:auto;
  & ul{
    width:100%;
  }
`;

export const SmartCard = styled.li`
  display: inline-block;
  white-space: nowrap;
  width: auto;
  min-height:380px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  vertical-align:top;
  box-shadow: 3px 3px 5px rgba(150, 150, 150, 0.3);
  & > div {
    font-size:0.8em;
    padding:10px 0;
    border-bottom:1px solid #e9e9e9;
  }
  & .add {
    margin-top:10px;
    font-size:0.8em;
    padding:10px 0;
    border-bottom:1px solid #e9e9e9;
  }
  & > .last {
    border-bottom:none;
  }
  & > div::before, & > div::after{
    content:"";
    display:table;
    clear:both;
  }
`;

export const Prop = styled.p`
  display:block;
  float:left;
  width:50px;
`;

export const Desc = styled.p`
  display:block;
  width:100px;
  float:left;
  color:#9d9d9d;
  white-space:normal;
`;

export const ImageWrapper = styled.div`
  width:100%;
  position:relative;
  & img{
    width:100%;
  }
  & span{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    color:#fff;
  }
`;

export const AddButton = styled.div`
  text-align:center;
  color:#c9c9c9;
  background-color:#f5f5f5;
  & > span{
    display:inline-block;
    width:30px;
    height:30px;
    box-sizing:border-box;
    padding:5px;
    font-size:18px;
    text-align:center;
    border-radius:30px;
    border:1px solid #c9c9c9;
  }
`;


export const StyledTabList = styled.div`
  padding-top:10px;
  background-color:#fff;
  padding-bottom:10px;
  overflow-x:auto;
`;

export const StyledTab = styled.div`
  display:inline;
  padding:5px 15px;
  white-space:nowrap;
  &.active{
    border-bottom: solid 3px #ff3979;
  }
`
