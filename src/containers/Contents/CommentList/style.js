import styled from 'styled-components';

export const ReplyListWrapper = styled.ul`
  width:100%;
  box-sizing:border-box;
  padding:15px;
`;

export const ReplyList = styled.div`
  width:100%;
  display:${props => props.toggle? "none":"block"};
  box-sizing:border-box;
  padding:${props => props.gray? "8px 0 8px 50px" : "10px 0 15px 50px"};
  border-bottom:1px solid #f5f5f5;
  position:relative;
  background-color:${props => props.gray? "#e9e9e9" : "#fff"};
`;

export const Avatar = styled.span`
  display:block;
  width:32px;
  height:32px;
  border-radius:32px;
  position:absolute;
  left:0;
  top:10px;
  color:transparent;
  background-color:pink;
`;

export const TextArea = styled.textarea`
width:90%;
margin:10px auto 0;
height:51px;
display:block;
box-sizing:border-box;
border:none;
`

export const ButtonArea = styled.div`
  width:90%;
  margin:auto;
  height:31px;
  background-color:#fff;
  text-align:right;
  border-top:1px solid #e9e9e9;
  & span{
    display:inline-block;
    text-align:center;
    box-sizing:border-box;
    padding:8px 14px;
    height:100%;
    background-color:red;
    color:#fff;
  }
`;
export const Top = styled.div`
  & h4 {
    display:inline;
    padding:5px 0 10px;
    padding-right:15px;
    font-size:1.1em;
  }
  & span{
    font-size:0.8em;
    color:#a9a9a9;
    vertical-align:middle;
  }
`;

export const Middle = styled.div`
  padding:7px 0;
  font-size:0.9em;
  color:#292929;
`;

export const Bottom = styled.div`
  padding-bottom:12px;
  font-size:0.7em;
`;
export const Reply = styled.span`
  padding-right:15px;
`;
export const Likey = styled.span`
  padding-right:15px;
  & img {
    vertical-align:bottom;
    width:13px;
    padding-right:3px;
  }
  & .likey {
    display:${props => props.likey? "none":"inline"};
  }
  & .unlikey {
    display:${props => props.likey? "inline":"none"};
  }
`;
