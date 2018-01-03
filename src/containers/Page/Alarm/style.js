import styled from 'styled-components';

export const AlarmDay = styled.h4`
  font-size:1.4em;
  font-weigth:bold;
  padding-left:20px;
  padding-bottom:15px;
`;

export const Avatar = styled.div`
  position:absolute;
  width:42px;
  height:42px;
  border-radius:42px;
  left:20px;
  top:15px;
  overflow:hidden;
  background-color:pink;
`;

export const List = styled.li`
  border-bottom:1px solid #e9e9e9;
  box-sizing:border-box;
  padding:16px 20px 19px 80px;
  position:relative;
  & > p{
    font-size:1em;
    padding-bottom:10px;
  }
  & > span{
    font-size:0.8em;
    color:#c6c4c4;
  }
`;
export const NoAlarm = styled.div`
text-align:center;
padding:15px 0;
`;
