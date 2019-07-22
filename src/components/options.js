import React, { useState } from "react";
import OptionsBG from "./options-bg";

const Options = ({ bg, setBG, bgMask, setBGMask }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionsMessage, setOptionsMessage] = useState("");

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
            setOptionsMessage={setOptionsMessage}
          />
          {optionsMessage ? <span>{optionsMessage}</span> : null}
          {/* TODO: Style the message so it's smaller and more out of the way */}
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
