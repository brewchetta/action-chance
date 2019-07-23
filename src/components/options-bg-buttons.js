import React from "react";

const OptionsBGButtons = ({ handleSubmit }) => {
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

  if (localStorage.bgImages) {
    return (
      <>
        <label>Saved Backgrounds:</label>
        <br />
        {renderLocalImgButtons()}
      </>
    );
  } else {
    return <div />;
  }
};

export default OptionsBGButtons;
