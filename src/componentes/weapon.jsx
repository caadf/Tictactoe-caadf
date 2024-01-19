import React, { useState } from 'react';


const Weapon = () => {

    const [jugador1, setJugador1] = useState("");
    const [jugador2, setJugador2] = useState("");
    const [seleccionArma, setSeleccionArma] = useState("");
    const [wins] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ])
    //const [tablero, setTablero] = useState(Array.from({ length: 9 }, () => null))
    const [tablero, setTablero] = useState(new Array(9).fill(null))

    //funciones
    const juego = (index) => {
        const board = [...tablero]
        if (board[index] === null) {
            board[index] = seleccionArma
            setTablero(board)
            if (seleccionArma === "X") {
                setSeleccionArma("0")
            } else {
                setSeleccionArma("X")
            }
            obtenerwinner(index)
        }

    }
    const obtenerwinner = (index) => {
        let opciones = wins.filter((opcion) => {
            return opcion.includes(index)
        })
        console.log(opciones)
        /* inicio */


/* aqui va mi codigo */





        /* fin */
    }




    return (
        <>
            {
                (seleccionArma !== '' && jugador1 !== '' && jugador2 !== '') ?
                    (
                        <div className='Tablero'>
                            <div className='row'>
                                <div className='col-3 posicion1' onClick={() => juego(0)}>{tablero[0]}</div>
                                <div className='col-3 posicion2' onClick={() => juego(1)}>{tablero[1]}</div>
                                <div className='col-3 posicion3' onClick={() => juego(2)}>{tablero[2]}</div>
                            </div>
                            <div className='row '>
                                <div className='col-3 posicion4' onClick={() => juego(3)}>{tablero[3]}</div>
                                <div className='col-3 posicion5' onClick={() => juego(4)}>{tablero[4]}</div>
                                <div className='col-3 posicion6' onClick={() => juego(5)}>{tablero[5]}</div>
                            </div>
                            <div className='row'>
                                <div className='col-3 posicion6' onClick={() => juego(6)}>{tablero[6]}</div>
                                <div className='col-3 posicion7' onClick={() => juego(7)}>{tablero[7]}</div>
                                <div className='col-3 posicion9' onClick={() => juego(8)}>{tablero[8]}</div>
                            </div>
                        </div>
                    ) : (

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
                    )
            }
        </>
    )
}
export default Weapon

