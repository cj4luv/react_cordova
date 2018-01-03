import styled from 'styled-components';

export const ReviewCard = styled.li`
  box-sizing:border-box;
  width:100%;
  margin-bottom:10px;
  padding:0;
  background-color:#fff;
`;

export const ReviewCardHeader = styled.div`
  width:100%;
  padding:10px 15px;
  position:relative;
  & p{
    display: inline-block;
    padding: 15px 10px;
    width: auto;
    vertical-align: top;
  }
`;

export const ReviewCardImg = styled.div`
  box-sizing:border-box;
  width:100%;
  margin-bottom:20px;
  text-align:center;
  & img{
    width:100%;
  }
`;

export const ReviewCardDesc = styled.div`
  width:100%;
  padding: 0 15px;
  & h4{
    padding:14px 0 8px;
    font-size:1.1em;
  }
  & p {
    font-size:0.8em;
    color:#292929;
    width:100%;
    padding: 10px 0;
    height:57px;
    overflow:hidden;
    text-overflow:ellipsis;
  }
`;

export const ReviewCardFooter = styled.div`
  width:100%;
  font-size:12px;
  color:#cfcfcf;
  padding-bottom:10px;
  & > div {
    width:50%;
    float:left;
  }
  &::before, &::after{
    content:"";
    display:table;
    clear:both;
  }
`;

export const Right = styled.div`
  text-align:right !important;
  box-sizing:border-box;
  padding-right:15px;
  & span img{
    width:13px;
    vertical-align:bottom;
    padding-left:9px;
    padding-right:5px;
  }
`;


export const ToggleMenu = styled.div`
  display:${props => props.toggle? "block" : "none"};
  background-color:#fff;
  position:absolute;
  right:10px;
  top:30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07);
	border: solid 1px #e9e9e9;
  & div{
    padding:10px;
  }
  & div a {
      text-decoration:none;
      color:#292929;
  }
`;


export const ButtonWrapper = styled.div`
  border-top:1px solid #f5f5f5;
  padding:12px 0;

  & button {
    width:33%;
    font-size:0.9em;
    text-align:center
  }
  & button a {
    color:#292929;
    text-decoration:none;
  }
  & button.center{
    width:34%;
  }
  & img{
    width: 18px;
    vertical-align: bottom;
    padding-right: 5px;
  }
`;

export const PinButton = styled.span`
  display: inline-block;
  text-align:center !important;
  width:16px;
  height:16px;
  position:absolute;
  right:35px;
  top:25px;
  cursor:pointer;
  & img {
    width:100%;
  }
  & .pinned {
    display:${props => props.pin? "inline" : "none"};
  }
  & .unpinned {
    display:${props => props.pin? "none" : "inline"};
  }
`;

export const Btn = styled.span`
  display: inline-block;
  text-align:center !important;
  width:4px;
  height:24px;
  position:absolute;
  right:5px;
  top:25px;
  cursor:pointer;
  & img{
    width:100%;
  }
`;

export const Likey = styled.button`
  appearance:none;
  position:relative;
  background-color:transparent;
  border:none;
  & .likey{
    display:${props => props.likey? "inline" : "none"};
  }
  & .unlikey{
    display:${props => props.likey? "none" : "inline"};
  }
`;

export const Avatar = styled.span`
  display:inline-block;
  width : 40px;
  height: 40px;
  border-radius:40px;
  background-color:#d9d9d9;
  & img {
    width:100%;
  }
`;


export const ModalWrapper = styled.div`
  width: 250px;
  height: 150px;
  position: relative;
  text-align:center;
  & h2 {
    box-sizing:border-box;
    font-size:1.1em;
    padding:20px;
  }
  & p {
    box-sizing:border-box;
    line-height:20px;
    padding:0 20px 20px;
  }
  & img {
    width:100%;
  }
  & div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const ModalButtons = styled.div`
  & a {
        text-decoration:none;
        display:inline-block;
        appearance:none;
        border:none;
        border-radius:0;
        width:${props => props.confirm? "50%" : "100%"};
        background-image: radial-gradient(circle at -10% -4%, #eb479e, #ff7387);
        height: 39px;
        box-sizing: border-box;
        padding: 13px;
        text-align:center;
        color:#fff;
  }
`;
