import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateCard from './Pages/Card/CreateCard';
import CreatePlanet from './Pages/Planet/CreatePlanet';
import Main from './Pages/Principal/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path="/createcard" element={<CreateCard />} />
        <Route path="/createplanet" element={<CreatePlanet />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
