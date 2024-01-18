import React, { useState } from 'react';

const Weapon = () => {

    const [jugador1, setJugador1] = useState("");
    const [jugador2, setJugador2] = useState("");
    const [seleccion, setSeleccionArma] = useState("");


    return (

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
    )
}
export default Weapon