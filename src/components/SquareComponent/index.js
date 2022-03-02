import React, { useEffect, useMemo, useState } from "react";

import icon_x from "../../assets/icon-x.svg";
import icon_o from "../../assets/icon-o.svg";

import "./style.css";
import AlertComponent from "../AlertComponent";

function SquareComponent({
  currentPlayer,
  playing,
  player1,
  player2,
  showModal,
  isOpen,
  playingCPU,
}) {
  console.log(playingCPU);
  const [gamePlays, setGamePlays] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const winningConditions = useMemo(() => {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
  }, []);

  const randNum = () => {
    Math.floor(Math.random() * 9);
  };

  console.log(player2);

  useEffect(() => {
    const newRand = randNum();
    if (gamePlays[newRand] === "") {
      gamePlays[newRand] = player2;
    }
    randNum();
  }, [randNum, playing]);

  // const cpuMove = () => {
  //   const newRand = randNum();
  //   if (gamePlays[newRand] === "") {
  //     gamePlays[newRand] = !currentPlayer;
  //   }
  // else {

  // }
  // gamePlays[randNum] = player2;
  //};

  // const cpuMove = () => {
  //   const randNum = Math.floor(Math.random() * 9);
  //   if (!gamePlays[randNum] === "") return;
  //   gamePlays[randNum] = player2;
  // };

  const [winner, setWinner] = useState({
    icon: "",
    mark: "",
    message: "",
  });

  useEffect(() => {
    const whoWon = () => {
      let roundWon = false;
      for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gamePlays[winCondition[0]];
        let b = gamePlays[winCondition[1]];
        let c = gamePlays[winCondition[2]];
        if (a === "" || b === "" || c === "") {
          continue;
        }
        if (a === b && b === c) {
          roundWon = true;
          break;
        }
      }
      if (roundWon) {
        setWinner({
          mark: currentPlayer === "O" ? "X" : "O",
          icon: currentPlayer === "O" ? icon_x : icon_o,
          message: "YOU WON!",
        });
        showModal();
        return;
      }
    };
    whoWon();
  }, [gamePlays, winningConditions, currentPlayer, showModal]);

  const setIcon = (e) => {
    const itemNum = e.target.id;

    if (gamePlays[itemNum] !== "") return;
    gamePlays[itemNum] = currentPlayer;

    if (playingCPU === true) {
      randNum();
    }
    playing();
  };

  const list = gamePlays.map(function (play, index) {
    if (gamePlays[index] === "X") {
      return (
        <div key={index} className="gameItem" id={index} onClick={setIcon}>
          {" "}
          <img src={icon_x} alt="" />{" "}
        </div>
      );
    } else if (gamePlays[index] === "O") {
      return (
        <div key={index} className="gameItem" id={index} onClick={setIcon}>
          {" "}
          <img src={icon_o} alt="" />{" "}
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className="gameItem"
          id={index}
          onClick={setIcon}
        ></div>
      );
    }
  });

  return (
    <>
      <div className="item">{list}</div>
      <AlertComponent isOpen={isOpen} showModal={showModal} winner={winner} />
    </>
  );
}

export default SquareComponent;
