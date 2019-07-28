// React
import React from "react";

/*------Component------*/
const OptionsBGButtons = ({ handleSubmit }) => {
  /*------Utilities------*/
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

  /*------Render------*/

  if (localStorage.bgImages) {
    return (
      <>
        <label>Saved Backgrounds:</label>
        <br />
        <div id="saved-bg-button-container">{renderLocalImgButtons()}</div>
      </>
    );
  } else {
    return <div />;
  }
};

export default OptionsBGButtons;
