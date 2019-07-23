import React, { useState } from "react";
import "./App.css";
import ParticipantsContainer from "./components/participants-container";
import Options from "./components/options";

function App() {
  const [bg, setBG] = useState(
    "https://clipart.wpblink.com/sites/default/files/wallpaper/drawn-forest/372214/drawn-forest-adobe-illustrator-372214-239163.jpg"
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
