import React from "react";

const Display = props => {
  // if (props.strikes >= 3) {
  //   return setStrikes(0);
  // } else {
  //   props.strikes = props.strikes;
  // }

  return (
    <div>
      <div>Strikes: {props.strikes}</div>
      <div>Balls: {props.balls}</div>
    </div>
  );
};

export default Display;
