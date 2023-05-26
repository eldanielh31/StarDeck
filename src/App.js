import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateDeck from './Pages/Deck/CreateDeck';
import CreateCard from './Pages/Card/CreateCard';
import CreatePlanet from './Pages/Planet/CreatePlanet';
import Main from './Pages/Principal/Main';
import NavBar from './Components/NavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Play from './Pages/Play/Play';
import PlayGame from './Pages/PlayGame/PlayGame';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ color: theme.colors.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.fontSize, lineHeight: theme.typography.lineHeight }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/play' element={<Play/>}/>
            <Route path="/createcard" element={<CreateCard />} />
            <Route path="/createplanet" element={<CreatePlanet />} />
            <Route path='/createDeck' element={<CreateDeck />} />
            <Route path='/playgame' element={<PlayGame/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>

  );
}

export default App;
