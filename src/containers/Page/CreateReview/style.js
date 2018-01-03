import styled from 'styled-components';

export const FloatingWrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  overflow:scroll;
  left:0;
  top:0;
  z-index:15;
  background-color:${props => props.gray? '#e9e9e9' : '#fff'}
`;

export const Wrapper = styled.div`
  width:90%;
  height:95%;
  margin:15px auto 0;
  background-color:#fff;
  overflow:scroll;
`;

export const Header = styled.div`
  position:relative;
  & h3 {
    box-sizing:border-box;
    padding:30px;
    text-align:center;
    font-size:1.2em;
  }
`;

export const Body = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:10px;
`;

export const SelectWrapper = styled.select`
  width:100%;
  box-sizing:border-box;
  padding:10px;
  border:none;
  display:block;
  background-color:#fff;
  border-bottom:1px solid #e9e9e9;
  & option {
    position:relative;
    left:5px;
  }
`;

export const SmallTitle = styled.p`
  padding:10px;
`;

export const Text = styled.input.attrs({
  type : "text"
})`
  display:inline-block;
  width:100%;
  height:36px;
  box-sizing:border-box;
  padding:10px;
  background-color:#fff;
  border:none;
  border-bottom:1px solid #d9d9d9;
`;

export const InputLabel = styled.label`
  display:inline;
  padding-right:20px;
  & span {
    padding-left:10px;
  }
`;

export const Radio = styled.input.attrs({
  type : "radio"
})`
  display:inline-block;
  width:19px;
  height:19px;
  border-radius:19px;
  vertical-align:middle;
  background-color:#fff;
  position:relative;
  &:checked::before {
    content : "";
    display:block;
    width:8px;
    heihgt:10px;
    border-left:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    transform:rotateZ(-45deg);
    position:absolute;
    top:3px;
    left:3px;
  }
`;

export const TextArea = styled.textarea`
  width:100%;
  display:block;
  min-height:55px;
  box-sizing:border-box;
  padding:10px;
  border:1px solid #e9e9e9;
`;

export const Holder = styled.div`
  width:100%;
  & img{
    width:20%;
  }
`;
export const Footer = styled.div`
  padding-top:80px;
  width:100%;
  height:52px;
  text-align:center;
  box-sizing:border-box;
  padding:16px 0;
  background-image: radial-gradient(circle at -10% -4%, #eb479e, #ff7387);
  color:#f9f9f9;
`;

export const Image = styled.li`
  width:100%;
  margin-bottom:10px;
  padding:5px 0;
  border-bottom:1px solid #d9d9d9;
  & img {
    width:150px;
  }
`;
