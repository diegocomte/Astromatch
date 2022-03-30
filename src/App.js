import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Matches from './Pages/Matches';
import Logo from './Assets/Logo.png';
import axios from 'axios';
import { URL_Base } from './Constants/URL_Base';
import {
  MainContainer,
  Header,
  HeaderButtonToPageHome,
  HeaderButtonToPageMatches,
  Section,
  ButtonClear,
  ImageLogo
} from './Components/StyleApp'


function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const changePage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'Matches':
        return <Matches setCurrentPage={setCurrentPage} />
      default:
        return <Home />
    }
  }

  return (
    <MainContainer>
      <Header>
        <ImageLogo
          src={Logo}
          alt="Logo AstroMatch" />

        {currentPage === 'Matches' &&   //Disply button only in 'Matches'
          <HeaderButtonToPageHome
            title='Perfis'
            onClick={() => {
              setCurrentPage('Home')
            }}>
            👥
          </HeaderButtonToPageHome>}

          <ButtonClear
            title='Reiniciar escolhas'
            onClick={() => {
              axios.put(`${URL_Base}clear`, Header)
              setCurrentPage('Home')
            }}>
            ↺
          </ButtonClear>

        <Section>
        </Section>

        {currentPage === 'Home' &&  //Disply button only in 'Home'
          <HeaderButtonToPageMatches
            title='Matches'
            onClick={() => {
              setCurrentPage('Matches')
            }}>
            💘
          </HeaderButtonToPageMatches>}
      </Header>
      {changePage()}
    </MainContainer>
  );
}

export default App;
