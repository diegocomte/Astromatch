import styled from "styled-components";

export const MatchContainer = styled.div` 
display: flex;
align-items: center;
width: 360px;
height: 65px;
margin: 10px 0px;
border: 1px solid white;
border-radius: 10px;
:hover{border: 1px solid lightgray; background-color: #f1f1f1; cursor: pointer;}
:active{border: 1px solid gray; background-color: #bebebe; cursor: pointer;}
`
export const ContainerImage = styled.div` 
margin: 0px 10px;
width: 50px;
height: 50px;
border-radius: 50%;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border: 1px solid gray;
`