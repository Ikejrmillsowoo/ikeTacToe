import React from "react";
import ScoreCardComponent from "../ScoreCardComponent";
import "./style.css";

function ScoresComponent() {
  return (
    <div className="scores">
      <div>
        <ScoreCardComponent id="green" />
      </div>
      <div>
        <ScoreCardComponent id="gray" />
      </div>
      <div>
        <ScoreCardComponent id="yellow" />
      </div>
    </div>
  );
}

export default ScoresComponent;
