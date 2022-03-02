import React, { useCallback, useState } from "react";
import HeaderComponent from "../HeaderComponent";
import ScoresComponent from "../ScoresComponent";
import SquareComponent from "../SquareComponent";
import "./style.css";

function DisplayComponent({
  currentPlayer,
  playing,
  player1,
  player2,
  playingCPU,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = useCallback(() => {
    setIsOpen(() => !isOpen);
  }, []);
  return (
    <div className="display">
      <HeaderComponent currentPlayer={currentPlayer} playing={playing} />
      <div className="display-row">
        <SquareComponent
          player1={player1}
          player2={player2}
          currentPlayer={currentPlayer}
          playing={playing}
          showModal={showModal}
          isOpen={isOpen}
          playingCPU={playingCPU}
        />

        <ScoresComponent />
      </div>
    </div>
  );
}

export default DisplayComponent;
