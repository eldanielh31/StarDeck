import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateDeck from './Pages/Deck/CreateDeck';
import CreateCard from './Pages/Card/CreateCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/createDeck' element={<CreateDeck/>}/>
        <Route path='/' element={<CreateCard />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
