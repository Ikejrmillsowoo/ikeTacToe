import React, { useState } from "react";
import "./style.css";
import icon_x from "../../assets/icon-x.svg";
import icon_o from "../../assets/icon-o.svg";

import { Link } from "react-router-dom";

function NewGame({ setPlayers, playCpu, player1, setPlayingCPU }) {
  const [clickId, setClickedId] = useState(false);
  const background = (e) => {
    //setPlayers(e);
    //console.log(e.target.id);
    if (player1 === null) {
      setPlayers(e);
      setClickedId(true);
    } else {
      setPlayers(e);
      player1 === e.target.id ? setClickedId(false) : setClickedId(true);
    }
  };

  return (
    <div className="newGame">
      <div className="start_top">
        <img src={icon_x} alt="x-icon" />
        <img src={icon_o} alt="o-icon" />
      </div>
      <div className="start_item">
        <h1 className="start_item_head">pick player 1's mark</h1>
        <div className="switch" onClick={background}>
          <span className={clickId ? "span1" : "span2"} id="X">
            X
          </span>
          <span className={clickId ? "span2" : "span1"} id="O">
            O
          </span>
        </div>
        <h3 className="start_item_foot">Remember X goes first</h3>
      </div>
      <div className="cpu" onClick={setPlayingCPU(true)}>
        <span>
          <Link className="link" to="/display">
            New game (vs CPU)
          </Link>
        </span>
      </div>
      <div className="player">
        <span>
          <Link className="link" to="/display">
            New game (vs Player)
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NewGame;
