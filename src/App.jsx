import { useState } from "react";
import RoundOne from "./components/roundDesigns/RoundOne/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive/RoundFive";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="contianer">
      <div className="home">
        <Home />
      </div>
      <div className="rounds">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
