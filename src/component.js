import React from "react";
import "./styles.css"; // Import the CSS file
import jsonData from "./data.json";
import reactionIcon from "./images/icon-reaction.svg";
import memoryIcon from "./images/icon-memory.svg";
import verbalIcon from "./images/icon-verbal.svg";
import visualIcon from "./images/icon-visual.svg";

const categoryIcons = {
  Reaction: reactionIcon,
  Memory: memoryIcon,
  Verbal: verbalIcon,
  Visual: visualIcon,
};

const fiss = " / 100";

function CardComponent() {
  return (
    <div className="parent">
      <div className="container">
        <div className="outer-gradient">
          <h3>Your Result</h3>
          <div className="inner-gradient">
            {" "}
            <h1>76</h1> <span>of 100</span>
          </div>
          <h1>Great</h1>
          <p>
            {" "}
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="DataContainer">
          <h3>Summary</h3>
          <div>
            {" "}
            {jsonData.map((item, index) => (
              <div className={`card ${item.category}`} key={index}>
                <div className="data">
                  <img
                    src={categoryIcons[item.category]}
                    alt={`${item.category} Icon`}
                  />
                  <h5>{item.category}</h5>
                </div>
                <div>
                  <span className="score">{item.score}</span>
                  <span className="fiss">{fiss}</span>
                </div>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
