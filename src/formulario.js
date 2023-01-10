import React, { useState } from 'react'


const Formulario = (props) => {
    const {accionDelClick} = props;
    
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "player1") {
          setPlayer1(e.target.value)
        }
        else {
          setPlayer2(e.target.value)
        }
      }

    return (
        
            <div className= "formulario">
                <h2>
                    Choose your Weapon
                </h2>
                <form>
                    <input name ="player1" value ={player1} type ="text" placeholder = "Player 1 username"onChange={handleChange}></input>
                    <input name ="player2" value ={player2}type = "text" placeholder = "Player 2 username"onChange={handleChange}></input>
                </form>
                <div className = "botones-formulario">
                <button className ="x" onClick={() => accionDelClick(player1, player2, 'x')}>X</button>
                <button className ="o" onClick={() => accionDelClick(player1, player2, 'O')}>0</button>
                </div>
            </div>
            
       
    )
}

export default Formulario;