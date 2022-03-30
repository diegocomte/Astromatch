import styled from 'styled-components';


export const CardContainer = styled.div` 
display: flex;
flex-direction: column;
margin-top: 20px;
width: 360px;
height: 430px;
justify-content: flex-end;
align-items: center;
background-size: cover;
background-position: center;
background-repeat: repeat-y;
box-shadow: 0 0 10px black;
`

export const CardCharging = styled.div` 
display: flex;
flex-direction: column;
margin-top: 20px;
width: 360px;
height: 430px;
justify-content: center;
align-items: center;
text-align: center;
background-size: cover;
background-position: center;
background-repeat: repeat-y;
box-shadow: 0 0 10px black;
`

export const ButtonsContainer = styled.div` 
display: flex;
justify-content: space-evenly;
margin-top: 15px;
`

export const ButtonDislike = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 70px;
border-radius: 50%;
font-size: 33px;
font-weight: bold;
color: red;
border: 1px solid red;
:hover{
    background-color: red; 
    color: white; 
    font-size: 30px; 
    transform: scale(1.2); 
    transition-duration: 0.2s}
`

export const ButtonLike = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 70px;
border-radius: 50%;
font-size: 50px;
font-weight: bold;
color: green;
border: 1px solid green;
:hover{
    background-color: green; 
    color: white; 
    font-size: 60px; 
    transform: scale(1.2); 
    transition-duration: 0.2s}
`

export const ProfileBio = styled.div`
color: white;
width: 360px;
height: 68px;
padding-bottom: 7px;
font-weight: bold;
background-color: rgba(52, 52, 52, 0.6);
text-align: center;
border-radius: 8px;

.Profile{
    font-size: 20px;
    margin: 0px 0px;
}

.Bio{
    font-weight: normal;
    margin: 0px 0px;
    margin-top: 5px;
}
`