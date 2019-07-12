import React from "react";
import "./App.css";
import ParticipantsContainer from "./components/participants-container";

function App() {
  return (
    <div className="App">
      <div id="bg-mask" />
      <div id="bg-container" />
      <ParticipantsContainer />
    </div>
  );
}

export default App;
