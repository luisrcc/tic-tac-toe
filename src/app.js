import React, { useState } from "react";
import Contenedor from "./contenedor";
import Registro from "./registro";
import Formulario from "./formulario";

function App() {
  const [player, setPlayer] = useState({
    player1: "",
    player2: "",
    jugar: false,
    firstPlayer: ""
  });

  const accionDelClick = (player1, player2, firstPlayer) => {
    if (player1.trim() !== "" && !player2.trim() !== "") {
      setPlayer({
        player1: player1,
        player2: player2,
        jugar: true,
        firstPlayer: firstPlayer
      });
    }
  };
  return (
    <div className="container">
      <h1>Tic Tac Toe en React.js</h1>
      {player.jugar ? (
        <Contenedor player={player} />
      ) : (
        <Registro accionDelClick={accionDelClick} />
      )}
    </div>
  );
}
export default App;
