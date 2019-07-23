import React, { useState } from "react";
import OptionsBG from "./options-bg";

const Options = ({ bg, setBG, bgMask, setBGMask }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionsMessage, setOptionsMessage] = useState("");

  const handleToggleOpen = () => {
    setOptionsOpen(!optionsOpen);
    setOptionsMessage("");
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
          {optionsMessage ? <p id="options-message">{optionsMessage}</p> : null}
          {/* TODO: Style the message so it's smaller and more out of the way */}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div id="options-container">
      <img
        src="https://www.shareicon.net/data/32x32/2017/01/17/872814_gear_512x512.png"
        alt="Options"
        onClick={handleToggleOpen}
        id="options-toggle-open-button"
      />
      {renderOptions()}
    </div>
  );
};

export default Options;
