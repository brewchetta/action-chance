import React, { useState } from "react";
import OptionsBG from "./options-bg";

const Options = ({ bg, setBG, bgMask, setBGMask }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleToggleOpen = () => {
    setOptionsOpen(!optionsOpen);
  };

  const renderOptions = () => {
    if (optionsOpen) {
      return (
        <div>
          <div
            className="fillscreen"
            onClick={handleToggleOpen}
            style={{ zIndex: "-1" }}
          />
          <OptionsBG
            bg={bg}
            setBG={setBG}
            bgMask={bgMask}
            setBGMask={setBGMask}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div id="options-container">
      <button onClick={handleToggleOpen}>◀ Options ▶</button>
      {renderOptions()}
    </div>
  );
};

export default Options;
