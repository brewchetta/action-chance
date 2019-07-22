// https://stackoverflow.com/questions/5633264/javascript-get-image-dimensions
// ^ change the background class depending on the size of a linked image
// TODO: the idea here is a user will be able to link / temporarily upload an image to be used as a background image

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
    if (event.target.id === "options-bg") {
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
        <button onClick={handleToggleOpen}>Change Background ▲</button>
        <form id="options-bg" onSubmit={handleSubmit}>
          <label>Add a new background</label>
          <br />
          <input id="bg-image-input" value={bgInput} onChange={handleInput} />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <label>Add a background filter</label>
        <br />
        <input
          id="bg-intensity-input"
          type="range"
          min="1"
          max="50"
          onChange={handleInput}
        />
        <br />
        <input
          id="bg-color-input"
          name="Color Picker"
          type="color"
          onChange={handleInput}
        />
        <br />
        <input type="submit" value="Add" />
      </>
    );
  } else {
    return <button onClick={handleToggleOpen}>Change Background ▼</button>;
  }
};

export default OptionsBG;
