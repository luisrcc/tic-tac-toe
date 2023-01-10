import React, {useState} from 'react'
import Boxs from './box1'

function Contenedor(props) {

  const { player } = props;

  const [inPlay, setInPlay] = useState(player.firstPlayer)
  const [winner, setWinner] = useState("");

  const handleWinner = (win) => {
    setWinner(win);
  }
  const handleInPlay = (p) => {
    setInPlay(p);
  }
  const [tmp,setTmp] = useState(0);
  return (
    <div className="main-container">
      <h3> {winner !== "" ? `${winner.toUpperCase()} win!!!` : `It is ${inPlay.toUpperCase()} turn!`}</h3>
      <button className = "btn-inicio-juego" onClick={() => { setTmp((p) => p + 1) }}>Start over</button>
      <div className="play-container">
        <Boxs player={player} handleInPlay={handleInPlay} handleWinner={handleWinner} />
      </div>
    </div>
  )
}

export default Contenedor;
