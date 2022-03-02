import React from "react";
import "./style.css";
import icon_x from "../../assets/icon-x.svg";
import icon_o from "../../assets/icon-o.svg";
import restart from "../../assets/icon-restart.svg";
import { Link } from "react-router-dom";

function HeaderComponent({ playing, currentPlayer }) {
  return (
    <div className="header">
      <div className="header_start">
        <img src={icon_x} alt="x-icon" name="X" onClick={playing} />
        <img src={icon_o} alt="o-icon" name="O" onClick={playing} />
      </div>

      <div className="header_mid">
        <span>{currentPlayer}</span> TURN
      </div>
      <div className="restart">
        <Link to="/">
          <img src={restart} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
