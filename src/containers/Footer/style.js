import styled from 'styled-components';

export const Footer = styled.div`
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    height:52px;
    background-color:#fff;
    box-shadow: 0 0 5px 0 rgba(200, 200, 200, 0.5);
`;
export const FooterTab = styled.div`
    width:100%;
    height:100%;
`;

export const Button = styled.div`
    background-color:#fff;
    float:left;
    cursor:pointer;
    border:0;
    width:20%;
    height:100%;
    border-radius:0;
    & a{
        display:block;
        width:100%;
        height:100%;
        box-sizing:border-box;
        padding:12px 0;
        text-align:center;
    }
`;
