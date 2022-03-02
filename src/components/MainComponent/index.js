import React, { useState } from "react";
import { Store } from "react-notifications-component";
import { Route, Routes } from "react-router-dom";
import AlertComponent from "../AlertComponent";
import DisplayComponent from "../DisplayComponent";
import NewGame from "../NewGameDisp";
import "./style.css";

function MainComponent() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [playingCPU, setPlayingCPU] = useState(null);

  const playCpu = () => {
    setPlayingCPU(true);
  };

  const playing = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const setPlayers = (e) => {
    const mark = e.target.id;

    setPlayer1(mark);
    setPlayer2(mark === "X" ? "O" : "X");

    Store.addNotification({
      title: "IkeTacToe!",
      message: `Player 1 mark is ${mark}`,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  };

  return (
    <div className="main-screen">
      <Routes>
        <Route
          path="/"
          element={
            <NewGame
              setPlayers={setPlayers}
              playCpu={playCpu}
              player1={player1}
              setPlayingCPU={setPlayingCPU}
            />
          }
        />
        <Route path="alert" element={<AlertComponent />} />
        <Route
          path="display"
          element={
            <DisplayComponent
              player1={player1}
              player2={player2}
              playingCPU={playingCPU}
              currentPlayer={currentPlayer}
              playing={playing}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default MainComponent;
