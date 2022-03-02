import React from "react";
import "./style.css";

function ScoreCardComponent(props) {
  return (
    <div
      className="scoreCard"
      id={
        props.id === "green" ? "green" : props.id === "gray" ? "gray" : "yellow"
      }
    >
      <h3>TIES</h3>
      <h3>14</h3>
    </div>
  );
}

export default ScoreCardComponent;
