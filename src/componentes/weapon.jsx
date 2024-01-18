import React, { useState } from 'react';


const Weapon = () => {

    const [jugador1, setJugador1] = useState("");
    const [jugador2, setJugador2] = useState("");
    const [seleccionArma, setSeleccionArma] = useState("");


    return (
        <>
{
                (seleccionArma !== '' && jugador1 !== '' && jugador2 !== '') && (
                    <div className='Tablero'>
                        <div className='row'>
                            <div className='col-3 posicion1'>1</div>
                            <div className='col-3 posicion2'>2</div>
                            <div className='col-3 posicion3'>3</div>
                        </div>
                        <div className='row '>
                            <div className='col-3 posicion4'>4</div>
                            <div className='col-3 posicion5'>5</div>
                            <div className='col-3 posicion6'>6</div>
                        </div>
                        <div className='row'>
                            <div className='col-3 posicion6'>7</div>
                            <div className='col-3 posicion7'>8</div>
                            <div className='col-3 posicion9'>9</div>
                        </div>
                    </div>
                )
            }
            <div className='juego'>
            <div className="players">
                <h3>Choose your weapon</h3>

                <input
                    type="text"
                    placeholder="player1"
                    value={jugador1}
                    onChange={(e) => {
                        setJugador1(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="player2"
                    value={jugador2}
                    onChange={(e) => {
                        setJugador2(e.target.value);
                    }}
                />
                <button className="boton" onClick={() => setSeleccionArma('X')}>
                    X
                </button>
                <button className="boton" onClick={() => setSeleccionArma('O')}>
                    O
                </button>
            </div>
            </div>
       </>
    )
}
export default Weapon