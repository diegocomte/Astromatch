import styled from 'styled-components';

export const MainContainer = styled.div`
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
top: 50%;
left: 50%;
width: 400px;
height: 600px;
transform: translate(-50%, -50%);
border: 2px solid black;
border-radius: 5px;
background-color: white;
box-shadow: 0 0 10px black;
overflow-y: scroll;
::-webkit-scrollbar {
    width: 0px;
}
`

export const Header = styled.section`
display: flex;
width: 400px;
height: 50px;
justify-content: space-evenly;
align-items: center;
border-bottom: 1px solid lightgray;
`

export const HeaderButtonToPageHome = styled.button` 
display: flex;
justify-content: center;
align-items: center;
height: 40px;
width: 40px;
font-size: 25px;
border-radius: 50%;
border: white;
background-color: white;
color: transparent;  
text-shadow: 0 0 0 #48a498;
:hover{background-color: #48a498; 
       color: transparent;  
       text-shadow: 0 0 0 #ffffff;
       font-size: 15px; 
       border-radius:50%; 
       transform: scale(1.1); 
       transition-duration: 0.2s};
`

export const HeaderButtonToPageMatches = styled.button` 
display: flex;
justify-content: center;
align-items: center;
height: 40px;
width: 40px;
font-size: 25px;
border-radius: 50%;
border: white;
background-color: white;
color: transparent;  
text-shadow: 0 0 0 #762d93;
:hover{background-color: #762d93; 
       color: transparent;  
       text-shadow: 0 0 0 #ffffff;
       font-size: 15px; 
       border-radius:50%; 
       transform: scale(1.1); 
       transition-duration: 0.2s};
`

export const Section = styled.div`
height: 25px;
width: 200px;
`

export const ButtonClear = styled.button`
display: flex;
justify-content: center;
position: fixed;
margin-left: 350px;
align-items: center;
height: 40px;
width: 40px;
font-size: 25px;
border-radius: 50%;
border: white;
background-color: white;
color: transparent;  
text-shadow: 0 0 0 #762d93;
:hover{background-color: #762d93; 
       color: transparent;  
       text-shadow: 0 0 0 #ffffff;
       font-size: 30px; 
       border-radius:50%; 
       transform: scale(1.1);
       transition-duration: 0.2s};
`

export const ImageLogo = styled.img`
width: 150px;
z-index: -1;
position: fixed;
`
