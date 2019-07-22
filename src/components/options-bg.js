// https://stackoverflow.com/questions/5633264/javascript-get-image-dimensions
// ^ change the background class depending on the size of a linked image
// TODO: the idea here is a user will be able to link / temporarily upload an image to be used as a background image

import React, { useState } from "react";

const OptionsBG = ({ bg, setBG, bgMask, setBGMask }) => {
  const [bgInput, setBGInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [bgMaskColor, setBGMaskColor] = useState(bgMask);
  const [bgMaskIntensity, setBGMaskIntensity] = useState("50");

  const handleInput = event => {
    if (event.target.id === "bg-image-input") {
      setBGInput(event.target.value);
    } else if (event.target.id === "bg-color-input") {
      console.log(event.target.value);
      setBGMaskColor(event.target.value);
    } else if (event.target.id === "bg-intensity-input") {
      console.log(event.target.value);
      setBGMaskIntensity(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.id === "options-bg") {
      setBG(bgInput);
      setBGInput("");
    } else if (event.target.id === "options-bg-mask") {
      setBGMask(bgMaskColor);
      // TODO: Make bg mask properly take in a color value / validate color as proper choice
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
        <form id="options-bg-mask" onSubmit={handleSubmit}>
          <label>Add a background filter</label>
          <br />
          <input
            type="range"
            min="1"
            max="100"
            id="bg-color-input"
            onChange={handleInput}
          />
          <br />
          <input
            id="bg-intensity-input"
            name="Color Picker"
            type="color"
            onChange={handleInput}
          />
          <br />
          <input type="submit" value="Add" />
        </form>
      </>
    );
  } else {
    return <button onClick={handleToggleOpen}>Change Background ▼</button>;
  }
};

export default OptionsBG;
