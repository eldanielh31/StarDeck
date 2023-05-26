import React, { useEffect, useState } from 'react'

import { theme } from '../../theme';
import './playgame.css'
import { getDeck } from '../../requestApi';

function PlayGame() {
    const [deck, setDeck] = useState(null);

    useEffect(() => {
        getDeck().then(res => {
            setDeck(res ? res[0] : null);
        });
    }, [setDeck]);

    return (
        <div className="containerGame" style={{ background: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.secondary}` }}>
            <div className="top-sectionGame">
                <div className='containerCardsHand'>
                    <div className='boxCardHand'>
                        <h2>
                            Cartas en mano
                        </h2>
                    </div>
                    <div className='boxCardHand'>
                        {deck?.cards.slice(0, 7).map((card) => (
                            <div key={card} style={{
                                textAlign: "center",
                                height: "15em", margin:
                                    "10px", padding: "10px",
                                // border: `5px solid ${cartasSeleccionadas.includes(card.id) ? "red" : "black"}`,
                                borderRadius: "5px",
                                background: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.secondary}`,
                            }}>
                                <img src='https://img.freepik.com/vector-gratis/personaje-dibujos-animados-caballero-sobre-fondo-blanco_1308-116116.jpg?w=2000' width={150} height={170} alt="Imagen" />
                                <h5 style={{ color: 'white' }}>{'Nombre'}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom-sectionGame">

                <div className="bottom-leftGame">
                    <h3>
                        Usuario: user1
                    </h3>
                    <h3>
                        Rival: user1234
                    </h3>
                    <h3>
                        Monedas: 100
                    </h3>
                    <h3>
                        Tiempo restante: 20s
                    </h3>
                </div>
                <div className="bottom-rightGame">

                    <div className='containerCardsHand'>
                        <div className='boxCardHand'>
                            <h2>
                                Planetas
                            </h2>
                        </div>
                        <div className='boxCardHand'>
                            {deck?.cards.slice(0, 3).map((card) => (
                                <div key={card} style={{
                                    textAlign: "center",
                                    height: "14em", margin:
                                        "10px", padding: "10px",
                                    // border: `5px solid ${cartasSeleccionadas.includes(card.id) ? "red" : "black"}`,
                                    borderRadius: "5px",
                                    background: `linear-gradient(to top, ${theme.colors.primary}, ${theme.colors.secondary}`,
                                }}>
                                    <img src='https://static.nationalgeographic.es/files/styles/image_3200/public/940.jpg?w=1600&h=1202' width={200} height={140} alt="Imagen" />
                                    <h5 style={{ color: 'white' }}>{'Nombre'}</h5>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PlayGame