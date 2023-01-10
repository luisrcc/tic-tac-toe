import React, { useState } from 'react'
import Box from './box';

const isWinner = (arrSol) => {
    if (arrSol[0] + arrSol[1] + arrSol[2] === 3) {
      return true;
    }
    if (arrSol[3] + arrSol[4] + arrSol[5] === 3) {
      return true;
    }
    if (arrSol[6] + arrSol[7] + arrSol[8] === 3) {
      return true;
    }
    if (arrSol[0] + arrSol[3] + arrSol[6] === 3) {
        return true;
      }
      if (arrSol[1] + arrSol[4] + arrSol[7] === 3) {
        return true;
      }
      if (arrSol[2] + arrSol[5] + arrSol[8] === 3) {
        return true;
      }
      if (arrSol[0] + arrSol[4] + arrSol[8] === 3) {
        return true;
      }
      if (arrSol[2] + arrSol[4] + arrSol[6] === 3) {
        return true;
      }
  }

function Boxs(props) {
    const {player, handleInPlay, handleWinner } = props;
    const [currentInPlay, setCurrentInPlay] = useState(player.firstPlayer );
    const [solZero, setSolZero] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [solEquis, setSolEquis] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [activePlay, setActivePlay] = useState(true);
  
    const handleBoxClick = (pos) => {
      if (currentInPlay === 'x') {
        // Guarda la jugada del jugador PlayerOne X
        let newSolArr = [...solEquis];
        newSolArr[pos - 1] = 1;
        setSolEquis(newSolArr);
        // Reviso si es una jugada ganadora
        if (isWinner(newSolArr)) {
          handleWinner(player.player1);
          setActivePlay(false);
        }
        else {
          // En caso que no sea ganadora, turno del proximo jugador
          setCurrentInPlay('o');
          handleInPlay(player.player2 + ': o');
        }
      }
      else {
        let newSolArr = [...solZero];
        newSolArr[pos - 1] = 1;
        setSolZero(newSolArr)
        if (isWinner(newSolArr)) {
          handleWinner(player.player2);
        setActivePlay(false);
        }
        setCurrentInPlay('x');
        handleInPlay(player.player1 + ': x');
      }
    }
  


    return (
        <div>
            <div className="grid-game" >
                <Box position={1} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={2} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={3} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={4} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={5} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={6} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={7} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={8} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
                <Box position={9} currentInPlay={currentInPlay} handleBoxClick={handleBoxClick} activePlay={activePlay}/>
            </div >
            
        </div>
    )
}

export default Boxs