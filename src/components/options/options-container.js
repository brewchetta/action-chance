// React
import React, { useState } from "react";
// Components
import OptionsBG from "./options-bg";
import OptionsGameplay from './options-gameplay'
import OptionsRooms from './options-rooms'
// CSS
import './style.css'

/*------Component------*/
const OptionsContainer = ({ bg, setBG, bgMask, setBGMask, socketChangeBG, utilizeInitiative, setUtilizeInitiative, socketRoom, setSocketRoom }) => {
  /*------State------*/
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionsMessage, setOptionsMessage] = useState("");

  /*------Setters------*/
  const handleToggleOpen = () => {
    setOptionsOpen(!optionsOpen);
    setOptionsMessage("");
    socketChangeBG(bg, bgMask)
  };

  /*------Utilities------*/

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

          <br/>

          <OptionsGameplay {...{utilizeInitiative, setUtilizeInitiative}} />

          <br/>

          <OptionsRooms {...{socketRoom, setSocketRoom}} />

          {optionsMessage ? <p id="options-message">{optionsMessage}</p> : null}

        </div>
      );
    } else {
      return null;
    }
  };

  /*------Render------*/

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

export default OptionsContainer;
