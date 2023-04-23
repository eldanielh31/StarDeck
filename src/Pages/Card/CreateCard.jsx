import React from 'react'
import "./CreateCard.css"
import { useState } from 'react';

function CreateCard() {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [race, setRace] = useState('');
    const [cost, setCost] = useState('');
    const [energy, setEnergy] = useState('');
    const [attribute, setAttribute] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ok")
    }

    return (
        <div className="container">
            <div className="content">
                <div className="sidebar">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://via.placeholder.com/200x150.png" alt="Imagen de la carta"/>
                        </div>
                        <div class="card-details">
                            <h2>Título de la carta</h2>
                            <p>Descripción de la carta</p>
                            <ul>
                                <li>Raza: Variable 1</li>
                                <li>Costo: <span class="cost">Variable 2</span></li>
                                <li>Energía: Variable 3</li>
                                <li>Tipo: Variable 4</li>
                                <li>Atributo: Variable 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <h1>Crear carta</h1>
                    <div className='containerFrom'>
                        <form onSubmit={handleSubmit}>
                            <div className='containerInputs'>
                                <label htmlFor="name">Nombre:</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="image">Imagen:</label>
                                <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="description">Descripción:</label>
                                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="description">Tipo:</label>
                                <input id="text" value={type} onChange={(e) => setType(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="race">Raza:</label>
                                <input id="text" value={race} onChange={(e) => setRace(e.target.value)} />
                            </div><div>
                                <label htmlFor="cost">Costo:</label>
                                <input id="number" value={cost} onChange={(e) => setCost(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="energy">Energia:</label>
                                <input id="number" value={energy} onChange={(e) => setEnergy(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="attribute">Atributo:</label>
                                <input id="text" value={attribute} onChange={(e) => setAttribute(e.target.value)} />
                            </div>
                            
                            <button type="submit">Crear carta</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCard