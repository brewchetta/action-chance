import React from "react";
import "./App.css";
import ParticipantsContainer from "./components/participants-container";
import Options from "./components/options";

function App() {
  return (
    <div className="App">
      <div id="bg-mask" />
      <div id="bg" />
      <div id="bg-container" />
      <ParticipantsContainer />
      <Options />
    </div>
  );
}

export default App;
