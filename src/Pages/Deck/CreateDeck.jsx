import React, { useEffect, useState } from 'react'

import './CreateDeck.css'
import { createDeck, getCartas, getDeck } from '../../requestApi';
import { v4 as uuidv4 } from "uuid";
import { theme } from '../../theme';
import { Alert } from '@mui/material';


function CreateDeck() {

    const [cards, setCards] = useState([]);
    const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [decks, setDecks] = useState([]);

    const [alert, setAlert] = useState(null);
    const [textAlert, settextAlert] = useState('');
    const [typeAlert, settypeAlert] = useState('');

    /* istanbul ignore next */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(cartasSeleccionadas.length === 18)) {
            setAlert(true);
            settypeAlert('error');
            settextAlert('Debe ingresar 18 cartas');
        } else if (existsName(name)) {
            setAlert(true);
            settypeAlert('error');
            settextAlert('El nombre ya existe');
        }
        else {
            sendDeck();
        }

    };

    /* istanbul ignore next */
    const existsName = (name) => {
        return decks.some(deck => deck.name === name);
    };

    /* istanbul ignore next */
    const sendDeck = () => {

        const codigo = 'C-' + uuidv4().split('').reverse().join('').slice(0, 12);

        setCode(codigo);
        let baraja = {
            name: name,
            cards: cartasSeleccionadas,
            id: code,
            id_User: 1
        }

        createDeck(baraja).then(
            () => {
                console.log("Enviado correcto.");
                setDecks([...decks,  baraja]);
                setAlert(true);
                settypeAlert('success');
                textAlert('Guardado Correctamente');
            }
        );

    }

    /* istanbul ignore next */
    const manejarSeleccionDeCarta = (id) => {
        if (cartasSeleccionadas.includes(id)) {
            setCartasSeleccionadas(cartasSeleccionadas.filter((c) => c !== id));
        } else {
            setCartasSeleccionadas([...cartasSeleccionadas, id]);
        }
    };

    /* istanbul ignore next */
    useEffect(() => {
        
        getCartas().then(
            (findCards) => {
                setCards(findCards);
            }
        );

        getDeck().then(
            (findDeck) => {
                setDecks(findDeck)
            }
        );

        function confirmLeave(e) {
            e.preventDefault();
            e.returnValue = '¿Seguro que deseas abandonar esta página? Los cambios que hayas realizado se perderán.';
        }

        window.addEventListener('beforeunload', confirmLeave);

        return () => {
            window.removeEventListener('beforeunload', confirmLeave);
        };

    }, [setCards, setDecks]);

    /* istanbul ignore next */
    return (
        <>
            <div className='containerDeck'>
                <div className='containermenuDeck'>

                    <form className='containeritemMenu' onSubmit={handleSubmit}>
                        <div className='rigthItemMenu'>
                            <h3>Cartas({cards?.length})</h3>
                        </div>

                        <div className='centerItemMenu'>
                            <input minLength={5} maxLength={30} className='inputNameDeck' onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder='Inserte el nombre de la baraja' id="" required />
                            {alert && <Alert severity={typeAlert}>{textAlert}</Alert>}
                        </div>

                        <div className='leftItemMenu'>
                            <h3>Seleccionadas({cartasSeleccionadas.length})</h3>
                            <button className="button-57" type='submit'><span className="text">Crear</span><span>Ok!</span></button>
                        </div>
                    </form>

                </div>
                <div className='containerCards'>
                    {cards?.map((card) => (
                        <div key={card.id} value={card.id} onClick={() => manejarSeleccionDeCarta(card.id)} style={{
                            textAlign: "center", 
                            height: "20em", margin: 
                            "10px", padding: "10px", 
                            border: `5px solid ${cartasSeleccionadas.includes(card.id) ? "red" : "black"}`, 
                            borderRadius: "5px",
                            background: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.secondary}`,
                        }}>
                            <img src={card.imagen} width={200} height={250} alt="Imagen" />
                            <h3 style={{color: 'white' }}>{card.nombre}</h3>
                        </div>
                    ))}
                </div>

            </div>

        </>

    )
}

export default CreateDeck