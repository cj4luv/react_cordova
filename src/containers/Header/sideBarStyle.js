import styled from 'styled-components';

export const Wrapper = styled.div`
  width:100%;
  height:100%;
  padding:20px;
  background-color:white;
`;

export const UserProfile = styled.div`
  padding:85px 30px;
  text-align:center;
  box-sizing:border-box;
  & a {
      text-decoration:none;
      color:#292929;
  }
`;
export const SideBarMenus = styled.div`
  width:100%;
  & a{
      display:block;
      text-decoration:none;
      color:#292929;
      box-sizing:border-box;
      width:100%;
      padding:15px 40px;
      border-top:1px solid #e9e9e9;
      position:relative;
      & span{
        display:block;
        position:absolute;
        white-space:nowrap;
        left:3px;
        top:12px;
        width:28px;
        height:27px;
        border-radius:100%;
        overflow:hidden;
        text-align:center;
      }
      & span img {
        width:65%;
      }
  }
`;

export const Avatar = styled.p`
  line-height:65px;
  width:65px;
  height:65px;
  border-radius:65px;
  display:inline-block;
  padding:0 10px 30px;
  overflow:hidden;
  position:relative;
  & img{
    width:100%;
  }
  & span{
    position:absolute;
    left:50%;
    bottom:-13px;
    transform:translateX(-50%);
  }
`;
