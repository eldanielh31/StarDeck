import React, { useRef } from 'react'
import "./CreateCard.css"
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import * as htmlToImage from "html-to-image";
import { createCarta } from '../../requestApi';

/* The above code is a React component that creates a form for users to create a card. The form
includes input fields for the card's name, image, description, type, race, cost, and energy. The
component also includes a dropdown menu for selecting the card's rarity and race. When the user
submits the form, a unique code is generated, the form data is logged, and a PNG image of the card
element is downloaded. The component uses useState and useRef hooks to manage state and reference
the card element. */
function CreateCard() {

    const elementCard = useRef(null);

    /* `const types` is an array of objects that contains different types of card rarity with their
    corresponding labels. This array is used to populate a dropdown menu in the form where the user
    can select the type of the card they are creating. */
    const types = [
        { value: 'ultra-rara', label: 'Ultra-Rara', color: ' #f1c40f' },
        { value: 'muy-rara', label: 'Muy Rara', color: ' #b353be ' },
        { value: 'rara', label: 'Rara', color: '  #294ef7 ' },
        { value: 'normal', label: 'Normal', color: ' #2a8121 ' },
        { value: 'basica', label: 'Básica', color: ' #ed5b41 ' },
    ]

    const races = [
        { value: 'elfo', label: 'Elfo' },
        { value: 'paladin', label: 'Paladin' },
        { value: 'barbaro', label: 'Barbaro' },
    ]

    const [name, setName] = useState('Nombre de Carta');
    const [type, setType] = useState('Tipo');
    const [color, setColor] = useState(' #ed5b41 ')
    const [cardImg, setCardImg] = useState('https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg');
    const [description, setDescription] = useState('Descripcion de la carta');
    const [race, setRace] = useState('...');
    const [cost, setCost] = useState('...');
    const [energy, setEnergy] = useState('...');
    const [code, setCode] = useState('C-XXXXXXXXXX');

    /**
     * The function handles form submission, generates a unique code, logs form data and downloads a
     * PNG image of a card element.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const codigo = 'C-' + uuidv4().split('').reverse().join('').slice(0, 12);

        setCode(codigo);

        console.log(codigo)

        await htmlToImage.toPng(elementCard.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${codigo}.png`;
                link.href = dataUrl;
                link.click();

                let carta = {
                    nombre: name,
                    tipo: type,
                    imagen: dataUrl,
                    descripcion: description,
                    raza: race,
                    costo: cost,
                    energia: energy,
                    estado: true,
                    id: codigo
                }

                console.log(carta);

                createCarta(carta).then(
                    () => {
                        console.log("Enviado correcto.");
                    }
                );

            });
        
        

    }

    const handleImageChange = (file) => {
        if (!file) {
            setCardImg('');
            return;
        }

        fileToDataUri(file)
            .then(dataUri => {
                setCardImg(dataUri)
            })
    }

    const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result)
        };
        reader.readAsDataURL(file);
    })

    return (
        <div className="container">
            <div className="content">
                <div className="containerCard">
                    <div className="card-content" style={{ backgroundColor: color }} ref={elementCard}>
                        <h3>{name}</h3>
                        <img className="image-box" src={cardImg} alt="imagen de la carta" />
                        <h4>{type}</h4>
                        <div className="info-box">
                            <ul className="list">
                                <li><span className="list-item-title">Raza: </span>{race}</li>
                                <li><span className="list-item-title">Costo: </span>{cost}</li>
                                <li><span className="list-item-title">Energy: </span>{energy}</li>
                            </ul>
                            <p className="description">{description}</p>
                            <p className="credits" align="right">{code}</p>
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
                                    <input type="text" id="name" minLength={5} maxLength={30} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="image" className='inputCard'>Imagen:</label>
                                    <input type="file" id="image" onChange={(e) => handleImageChange(e.target.files[0] || null)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="description" className='inputCard'>Descripción:</label>
                                    <textarea id="description" maxLength={1000} onChange={(e) => setDescription(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="description" className='inputCard'>Tipo:</label>
                                    <select id="type" name="type" onChange={(event) => setType(event.target.value) } required>
                                        <option value="">Seleccione un tipo</option>
                                        {types.map((opcion) => (
                                            <option key={opcion.value} onClick={(e) => setColor(opcion.color)} value={opcion.value}>{opcion.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="race" className='inputCard'>Raza:</label>
                                    <select id="race" name="race" onChange={(event) => setRace(event.target.value)} required>
                                        <option value="">Seleccione una raza</option>
                                        {races.map((opcion) => (
                                            <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="cost" className='inputCard'>Costo:</label>
                                    <input id="number" type='number' min={0} max={100} onChange={(e) => setCost(e.target.value)} required />
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="energy" className='inputCard'>Energia:</label>
                                    <input id="number" type='number' min={-100} max={100} onChange={(e) => setEnergy(e.target.value)} required />
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