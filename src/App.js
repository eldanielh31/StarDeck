import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateDeck from './Pages/Deck/CreateDeck';
import CreateCard from './Pages/Card/CreateCard';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/createDeck' element={<CreateDeck/>}/>
        <Route path='/' element={<CreateCard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
