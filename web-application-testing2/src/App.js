import React from "react";
import Dashboard from "./components/dashboard";
import Display from "./components/display";

import "./App.css";

function App() {
  const [strikesCount, setStrikesCount] = useState(0);
  const [ballsCount, setBallsCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
