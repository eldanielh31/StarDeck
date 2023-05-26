import React, { useEffect, useState } from 'react';
import { theme } from '../../theme';
import { useNavigate } from 'react-router-dom';

import './play.css';
import { getDeck } from '../../requestApi';

function Play() {

  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    getDeck().then(data => {
      setDecks(data);
    });

  }, [setDecks])

  return (
    <div className="container" style={{ background: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.secondary}` }}>
      <div className="top-section">
        <div className="top-left">
          <div className='containerDecks'>
            <div className='rowScroll'>
              <div className='item'>
                <h1>Selecciona tu deck</h1>
              </div>
              <div className='item'>
                <div className="scrollmenu">
                  {decks.map((deck) => (
                    <a href='/play' key={deck._id} onClick={() => console.log(deck.id)}>{deck.name}</a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="top-right">
          <h2>Datos del usuario</h2>
          <h3>Usuario: </h3>
          <h3>Rival encontrado: </h3>
          <h3>Juega primero: </h3>
          <h3>ID de partida: </h3>  
        </div>
      </div>
      <div className="bottom-section">
        <div className='containerPlayButton'>
          <div className='centeredButtonPlay'>
            <button className="button-49" onClick={() => navigate('/playgame')}>
              Iniciar Partida
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Play;