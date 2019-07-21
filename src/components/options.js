import React, { useState } from "react";
import OptionsBG from "./options-bg";

const Options = props => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleToggleOpen = () => {
    setOptionsOpen(!optionsOpen);
  };

  const renderOptions = () => {
    if (optionsOpen) {
      return (
        <div>
          <OptionsBG />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div id="options-container">
      <button onClick={handleToggleOpen}>Options</button>
      {renderOptions()}
    </div>
  );
};

export default Options;
