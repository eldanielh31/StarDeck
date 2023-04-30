import React, { useEffect, useRef, useState } from 'react'

import './CreateDeck.css'
import { createDeck, getCarta } from '../../requestApi';
import { v4 as uuidv4 } from "uuid";


function CreateDeck() {

    const [cards, setCards] = useState([]);
    const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const codigo = 'C-' + uuidv4().split('').reverse().join('').slice(0, 12);

        setCode(codigo);
        let baraja = {
            name: name,
            cards: cartasSeleccionadas,
            id: code,
            id_User : 1
        }
        createDeck(baraja).then(
            () => {
                console.log("Enviado correcto.");
            }
        );
    };

    const manejarSeleccionDeCarta = (id) => {
        if (cartasSeleccionadas.includes(id)) {
            setCartasSeleccionadas(cartasSeleccionadas.filter((c) => c !== id));
        } else {
            setCartasSeleccionadas([...cartasSeleccionadas, id]);
        }
    };

    useEffect(() => {
        getCarta().then(
            (findCards) => {
                setCards(findCards);
            }
        );

    }, [setCards]);

    return (
        <div className='containerDeck'>
            <div className='containermenuDeck'>

                <form className='containeritemMenu' onSubmit={handleSubmit}>
                    <div className='rigthItemMenu'>
                        <h3>Cartas({cards.length})</h3>
                        <button>Fill</button>
                    </div>

                    <div className='centerItemMenu'>
                        <input minLength={5} maxLength={30} className='inputNameDeck' onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder='Inserte el nombre de la baraja' id="" required/>
                    </div>

                    <div className='leftItemMenu'>
                        <h3>Seleccionadas({cartasSeleccionadas.length})</h3>
                        <button type='submit'>Crear</button>
                    </div>
                </form>

            </div>
            <div className='containerCards'>
                {cards.map((card) => (
                    <div key={card.id} value={card.id} onClick={() => manejarSeleccionDeCarta(card.id)} style={{
                        textAlign: "center", margin: "10px", padding: "10px", border: `5px solid ${cartasSeleccionadas.includes(card.id) ? "red" : "black"}`, borderRadius: "5px" }}>
                        <img src={card.imagen} width={200} height={250} alt="Imagen" />
                        <h3>{card.nombre}</h3>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default CreateDeck