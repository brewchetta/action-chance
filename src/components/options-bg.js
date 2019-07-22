// https://stackoverflow.com/questions/5633264/javascript-get-image-dimensions
// ^ change the background class depending on the size of a linked image

import React, { useState } from "react";

const OptionsBG = ({ bg, setBG, bgMask, setBGMask }) => {
  const [bgInput, setBGInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = event => {
    switch (event.target.id) {
      case "bg-image-input":
        setBGInput(event.target.value);
        break;
      case "bg-color-input":
        setBGMask({ color: event.target.value, intensity: bgMask.intensity });
        break;
      case "bg-intensity-input":
        setBGMask({ color: bgMask.color, intensity: event.target.value });
        break;
      default:
        console.warning("Improper handle input");
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.id === "options-bg-image") {
      setBG(bgInput);
      setBGInput("");
    }
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <>
        <button onClick={handleToggleOpen} id="options-button">
          Change Background ▲
        </button>
        <div id="options-bg">
          {/* Change background image */}
          <form id="options-bg-image" onSubmit={handleSubmit}>
            <label>Add a new background</label>
            <br />
            <input id="bg-image-input" value={bgInput} onChange={handleInput} />
            <br />
            <input type="submit" value="Submit" />
          </form>
          <label>Add a background filter</label>
          <br />
          {/* Change background color intensity */}
          <input
            id="bg-intensity-input"
            type="range"
            min="1"
            max="75"
            defaultValue={bgMask.intensity}
            onChange={handleInput}
          />
          {/* Change background color */}
          <input
            id="bg-color-input"
            name="Color Picker"
            type="color"
            defaultValue={bgMask.color}
            onChange={handleInput}
          />
        </div>
      </>
    );
  } else {
    return (
      <button onClick={handleToggleOpen} id="options-button">
        Change Background ▼
      </button>
    );
  }
};

export default OptionsBG;