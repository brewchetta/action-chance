// https://stackoverflow.com/questions/5633264/javascript-get-image-dimensions
// ^ change the background class depending on the size of a linked image
// TODO: the idea here is a user will be able to link / temporarily upload an image to be used as a background image

import React, { useState } from "react";

const OptionsBG = props => {
  const [bgInput, setBGInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleBGInput = event => {
    setBGInput(event.target.value);
  };

  const handleBGSubmit = event => {
    event.preventDefault();
    console.log(bgInput);
    setBGInput("");
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <>
        <button onClick={handleToggleOpen}>Change Background</button>
        <form id="options-bg" onSubmit={handleBGSubmit}>
          <label>Add a new background</label>
          <br />
          <input value={bgInput} onChange={handleBGInput} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  } else {
    return <button onClick={handleToggleOpen}>Change Background</button>;
  }
};

export default OptionsBG;
