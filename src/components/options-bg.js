// https://clipart.wpblink.com/sites/default/files/wallpaper/drawn-forest/372214/drawn-forest-adobe-illustrator-372214-239163.jpg <-- pine forest vector art

// https://pre11.deviantart.net/e360/th/pre/f/2008/049/9/3/forest_never_sleeps_by_zalas.jpg <-- figure in forest

import React, { useState } from "react";

const OptionsBG = ({ bg, setBG, bgMask, setBGMask, setOptionsMessage }) => {
  const [bgNameInput, setBGNameInput] = useState("");
  const [bgImageInput, setBGImageInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = event => {
    setOptionsMessage("");
    switch (event.target.id) {
      case "bg-image-input":
        setBGImageInput(event.target.value);
        break;
      case "bg-name-input":
        setBGNameInput(event.target.value);
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
      setBG(bgImageInput);
      setOptionsMessage(`Added ${bgNameInput} to backgrounds`);
      addImageToLocalStorage({ name: [bgNameInput], image: bgImageInput });
      setBGImageInput("");
      setBGNameInput("");
    } else if (event.target.classList.contains("saved-bg-button")) {
      setOptionsMessage(`Changed background to ${event.target.innerText}`);
      setBG(event.target.dataset.image);
    } else if (event.target.classList.contains("saved-bg-button-remove")) {
      removeImageFromLocalStorage(event.target.dataset.id);
    }
  };

  const removeImageFromLocalStorage = id => {
    const images = JSON.parse(localStorage.bgImages);
    delete images[id];
    localStorage.bgImages = JSON.stringify(images);
    setOptionsMessage(`Deleted ${id}`);
  };

  const addImageToLocalStorage = newImage => {
    if (localStorage.bgImages) {
      localStorage.bgImages = JSON.stringify({
        ...JSON.parse(localStorage.bgImages),
        [newImage.name]: newImage.image
      });
    } else {
      localStorage.bgImages = JSON.stringify({
        [newImage.name]: newImage.image
      });
    }
  };

  const renderLocalImgButtons = () => {
    const json = JSON.parse(localStorage.bgImages);
    return Object.keys(json).map(item => {
      return (
        <>
          <button
            key={item}
            className="saved-bg-button"
            data-image={json[item]}
            onClick={handleSubmit}
          >
            {item}
          </button>
          <button
            key={`${item}-remove`}
            className="saved-bg-button-remove"
            data-id={item}
            onClick={handleSubmit}
          >
            X
          </button>
        </>
      );
    });
  };

  const renderLocalBGButtons = () => {
    if (localStorage.bgImages) {
      return (
        <>
          <label>Saved Backgrounds:</label>
          <br />
          {renderLocalImgButtons()}
        </>
      );
    } else {
      return null;
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
          {/* Use local background image */}
          {renderLocalBGButtons()}
          {/* Add background image */}
          <form id="options-bg-image" onSubmit={handleSubmit}>
            <label>Add a new background</label>
            <br />
            <label>Name</label>
            <input
              id="bg-name-input"
              value={bgNameInput}
              onChange={handleInput}
            />
            <br />
            <label>URL</label>
            <input
              id="bg-image-input"
              value={bgImageInput}
              onChange={handleInput}
            />
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
