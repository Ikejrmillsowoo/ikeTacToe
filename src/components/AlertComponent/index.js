import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function AlertComponent({ isOpen, showModal, winner }) {
  return (
    <>
      <div>{isOpen ? <div className="overlay"></div> : ""}</div>
      <div>
        {isOpen ? (
          <div className="alert">
            <h4>{winner.message}</h4>{" "}
            <h1 id={winner.mark === "X" ? "winner_blue" : "winner_yellow"}>
              <span>
                <img src={winner.icon} alt={winner.mark} />
              </span>
              Takes the round
            </h1>
            <Link to="/">
              <input type="button" value="QUIT" className="quit" />
            </Link>
            <input
              type="button"
              value="NEXT ROUND"
              className="next"
              onClick={showModal}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default AlertComponent;
