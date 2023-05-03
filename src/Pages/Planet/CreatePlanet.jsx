import React, { useRef } from 'react'
import "./CreatePlanet.css"
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import * as htmlToImage from "html-to-image";
import { createPlaneta } from '../../requestApi';
import { theme } from '../../theme';
import { Alert } from '@mui/material';


function CreatePlanet() {

    const elementCard = useRef(null);

    /* `const types` is an array of objects that contains different types of card rarity with their
    corresponding labels. This array is used to populate a dropdown menu in the form where the user
    can select the type of the card they are creating. */
    const types = [
        { value: 'raro', label: 'Raro', color: ' #a93226 ' },
        { value: 'basico', label: 'Basico', color: '#7f8c8d' },
        { value: 'popular', label: 'Popular', color: '#148f77' },
    ]

    const list_Abilities = [

    ]

    const [name, setName] = useState('Nombre del Planeta');
    const [color, setColor] = useState('#7f8c8d')
    const [cardImg, setCardImg] = useState('https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg');
    const [description, setDescription] = useState('Descripcion de la carta');
    const [abilities, setAbilities] = useState([]);
    const [type, setType] = useState('Tipo');
    const [code, setCode] = useState('P-XXXXXXXXXX');

    const [alert, setAlert] = useState(null);
    const [textAlert, settextAlert] = useState('');
    const [typeAlert, settypeAlert] = useState('');


    /**
     * The function handles form submission, generates a unique code, logs form data and downloads a
     * PNG image of a card element.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const codigo = 'P-' + uuidv4().split('').reverse().join('').slice(0, 12);

        setCode(codigo);

        await htmlToImage.toPng(elementCard.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${codigo}.png`;
                link.href = dataUrl;
                link.click();

                let carta = {
                    name: name,
                    image: dataUrl,
                    description: description,
                    abilities: abilities,
                    type: type,
                    estado: true,
                    id: codigo
                }

                createPlaneta(carta).then(
                    () => {
                        console.log("Enviado correcto.");
                        setAlert(true);
                        settextAlert('Guardado correctamente.');
                        settypeAlert('success');
                    }
                ).catch(error => {
                    setAlert(true);
                    settextAlert('No se pudo guardar.');
                    settypeAlert('error');
                });;

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
            <div className="content" style={{ background: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.secondary}` }}>
                <div className="containerCard">
                    <div className="card-content" style={{ backgroundColor: color }} ref={elementCard}>
                        <h3>{name}</h3>
                        <img className="image-box" src={cardImg} alt="imagen de la carta" />
                        <h4>{type}</h4>
                        <div className="info-box">
                            <ul className="list">
                                <li><span className="list-item-title">Habilidades: </span>{abilities}</li>
                            </ul>
                            <p className="description">{description}</p>
                            <p className="credits" align="right">{code}</p>
                        </div>
                    </div>

                </div>
                <div className="containerForm">
                    <div className='wrapperForm'>
                        <h1>Crear Planeta</h1>
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
                                    <label htmlFor="habilidad" className='inputCard'>Habilidad:</label>
                                    <select id="type" name="type" onChange={(event) => setAbilities(event.target.value)} >
                                        <option value="">Seleccione un tipo</option>
                                        {list_Abilities.map((opcion) => (
                                            <option key={opcion.value} onClick={(e) => setColor(opcion.color)} value={opcion.value}>{opcion.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='containerInputs'>
                                    <label htmlFor="habilidad" className='inputCard'>Tipo:</label>
                                    <select id="type" name="type" onChange={(event) => setType(event.target.value)} required>
                                        <option value="">Seleccione un tipo</option>
                                        {types.map((opcion) => (
                                            <option key={opcion.value} onClick={(e) => setColor(opcion.color)} value={opcion.value}>{opcion.label}</option>
                                        ))}
                                    </select>
                                </div>
                                {alert && <Alert severity={typeAlert}>{textAlert}</Alert>}
                                <button className='button-54' type="submit">Crear carta</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreatePlanet