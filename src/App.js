import React, { useState } from "react";
import "./App.css";
import ParticipantsContainer from "./components/participants-container";
import Options from "./components/options";

function App() {
  const [bg, setBG] = useState(
    "https://i.pinimg.com/originals/a1/26/66/a12666d9f1539b13e7139d8d7d8389e7.jpg"
  );

  const [bgMask, setBGMask] = useState({ color: "#7D7D7D", intensity: 25 });

  return (
    <div className="App">
      <div
        id="bg-mask"
        style={{
          backgroundColor: `${bgMask.color}`,
          opacity: `${bgMask.intensity * 0.01}`
        }}
      />
      <div id="bg" style={{ backgroundImage: `url(${bg})` }} />
      <div id="bg-container" />
      <ParticipantsContainer />
      <Options bg={bg} setBG={setBG} bgMask={bgMask} setBGMask={setBGMask} />
    </div>
  );
}

export default App;
