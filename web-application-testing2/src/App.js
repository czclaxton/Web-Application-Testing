import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Display
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
      <Dashboard
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
    </div>
  );
}

export default App;
