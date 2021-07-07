import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const strike = () => {
    if (strikes >= 2) {
      return setStrikes(0), setBalls(0);
    } else {
      return setStrikes(strikes + 1);
    }
  };

  const ball = () => {
    if (balls >= 3) {
      return setBalls(0), setStrikes(0);
    } else {
      return setBalls(balls + 1);
    }
  };

  const foul = () => {
    if (strikes >= 2) {
      return setStrikes(strikes);
    } else {
      return setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    return setBalls(0), setStrikes(0);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <Display
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
      <Dashboard ball={ball} hit={hit} foul={foul} strike={strike} />
    </div>
  );
}

export default App;
