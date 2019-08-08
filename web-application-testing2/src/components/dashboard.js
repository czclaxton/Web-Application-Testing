import React from "react";

const dashboard = props => {
  const strike = () => {
    if (props.strikes >= 2) {
      return props.setStrikes(0), props.setBalls(0);
    } else {
      return props.setStrikes(props.strikes + 1);
    }
  };

  const ball = () => {
    if (props.balls >= 3) {
      return props.setBalls(0), props.setStrikes(0);
    } else {
      return props.setBalls(props.balls + 1);
    }
  };

  const foul = () => {
    if (props.strikes >= 2) {
      return props.setStrikes(props.strikes);
    } else {
      return props.setStrikes(props.strikes + 1);
    }
  };

  const hit = () => {
    return props.setBalls(0), props.setStrikes(0);
  };

  return (
    <div>
      <button onClick={strike}>Strike</button>
      <button onClick={ball}>Ball</button>
      <button onClick={foul}>Foul</button>
      <button onClick={hit}>Hit</button>
    </div>
  );
};

export default dashboard;
