import React from 'react'
import "./CreateCard.css"
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid"


function CreateCard() {

    const types = [
        { value: 'ultra-rara', label: 'Ultra-Rara' },
        { value: 'muy-rara', label: 'Muy Rara' },
        { value: 'rara', label: 'Rara' },
        { value: 'normal', label: 'Normal' },
        { value: 'basica', label: 'Básica' },
    ]

    const races = [
        { value: 'elfo', label: 'Elfo' },
        { value: 'paladin', label: 'Paladin' },
        { value: 'barbaro', label: 'Barbaro' },
    ]

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [race, setRace] = useState('');
    const [cost, setCost] = useState('');
    const [energy, setEnergy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const codigo = 'C-' + uuidv4().split('').reverse().join('').slice(0, 12);
        console.log(codigo)
        const attribute = 'activo'
        console.log([name, type, image, description, race, cost, energy, attribute]);
    }

    return (
        <div className="container">
            <div className="content">
                <div className="containerCard">
                    <div className="card-content">
                        <h3>{name ? name : 'Nombre de Carta'}</h3>
                        <img className="image-box" src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="dragon-by-Ciruelo" />
                        <h4>{type ? type : 'Tipo'}</h4>
                        <div className="info-box">
                            <ul className="list">
                                <li><span className="list-item-title">Raza: </span>{race ? race : '...'}</li>
                                <li><span className="list-item-title">Costo: </span>{cost ? cost : '...'}</li>
                                <li><span className="list-item-title">Energy: </span>{energy ? energy : '...'}</li>
                            </ul>
                            <p className="description">{description ? description : 'Descripción de la carta'}</p>
                            <p className="credits" align="right">C-XXXXXXXXXXXX</p>
                        </div>
                    </div>

                </div>
                <div className="containerForm">
                    <div className='wrapperForm'>
                        <h1>Crear carta</h1>
                        <div className='containerFrom'>
                            <form onSubmit={handleSubmit}>
                                <div className='containerInputs'>
                                    <label htmlFor="name" className='inputCard'>Nombre:</label>
                                    <input type="text" id="name" value={name} minLength={5} maxLength={30} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="image" className='inputCard'>Imagen:</label>
                                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="description" className='inputCard'>Descripción:</label>
                                    <textarea id="description" value={description} maxLength={1000} onChange={(e) => setDescription(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="description" className='inputCard'>Tipo:</label>
                                    <select id="type" name="type" value={type} onChange={(event) => setType(event.target.value)} required>
                                        <option value="">Seleccione un tipo</option>
                                        {types.map((opcion) => (
                                            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="race" className='inputCard'>Raza:</label>
                                    <select id="race" name="race" value={race} onChange={(event) => setRace(event.target.value)} required>
                                        <option value="">Seleccione una raza</option>
                                        {races.map((opcion) => (
                                            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="cost" className='inputCard'>Costo:</label>
                                    <input id="number" type='number' min={0} max={100} value={cost} onChange={(e) => setCost(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="energy" className='inputCard'>Energia:</label>
                                    <input id="number" type='number' min={-100} max={100} value={energy} onChange={(e) => setEnergy(e.target.value)} required />
                                </div>

                                <button className='button-54' type="submit">Crear carta</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateCard