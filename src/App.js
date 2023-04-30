import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateDeck from './Pages/Deck/CreateDeck';
import CreateCard from './Pages/Card/CreateCard';
import CreatePlanet from './Pages/Planet/CreatePlanet';
import Main from './Pages/Principal/Main';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path="/createcard" element={<CreateCard />} />
        <Route path="/createplanet" element={<CreatePlanet />} />
        <Route path='/createDeck' element={<CreateDeck/>}/>
        <Route path='/' element={<CreateCard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
