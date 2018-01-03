import styled from 'styled-components'

export const DummyInput = styled.div`
  width:100%;
  height:52px;
  background-color:#e9e9e9;
  margin-top:10px;
  margin-bottom:20px;
  position:relative;
  &::before{
    content:"댓글을 입력해주세요.";
    display:block;
    width:75%;
    height:32px;
    position:absolute;
    background-color:#fff;
    color:#999;
    left:3%;
    top:10px;
    box-sizing:border-box;
    padding:10px;
  }
  &::after{
    content:"등록";
    display:block;
    width:15%;
    height:32px;
    position:absolute;
    left:78%;
    top:10px;
    background-color:red;
    color:#fff;
    box-sizing:border-box;
    padding:10px;
    text-align:center;
  }
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