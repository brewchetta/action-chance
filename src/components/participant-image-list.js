import React, { useState } from "react";
import ParticipantImage from "./participant-image";

const ParticipantImageList = ({ setMainImageInput, isOpen, setIsOpen }) => {
  const [imageInput, setImageInput] = useState("");
  const [imagePage, setImagePage] = useState(0);
  const pageCap = () => Math.ceil(getImages().length / 12);
  // TODO: 12 per page PLZ since it's easily formatted for grid with 6, 4, 3, 2

  const getImages = () => {
    return JSON.parse(localStorage.images);
  };

  const handleClick = image => {
    setMainImageInput(image);
    setIsOpen(!isOpen);
  };

  const renderImages = () => {
    if (localStorage.images) {
      return getImages()
        .slice(imagePage * 12, (imagePage + 1) * 12)
        .map(image => (
          <div
            key={image}
            onClick={() => handleClick(image)}
            className="add-image-div"
          >
            <ParticipantImage
              imageURL={image}
              isActive={false}
              participantName=""
            />
          </div>
        ));
    }
  };

  const handleInput = event => {
    setImageInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.images = JSON.stringify([...getImages(), imageInput]);
    setImageInput("");
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handlePaginate = event => {
    if (event.target.id === "page-previous" && imagePage > 0) {
      setImagePage(imagePage - 1);
    } else if (event.target.id === "page-next" && pageCap() > imagePage + 1) {
      setImagePage(imagePage + 1);
    }
  };

  if (isOpen) {
    return (
      <>
        <div
          id="close-add-images-container"
          className="fillscreen"
          onClick={toggleIsOpen}
        />
        {!isOpen ? <button onClick={toggleIsOpen}>Add Image</button> : null}
        <div id="add-images-container">{renderImages()}</div>
        <button
          id="page-previous"
          className={imagePage > 0 ? null : "inactive-button"}
          onClick={handlePaginate}
        >
          Previous
        </button>
        <button
          id="page-next"
          onClick={handlePaginate}
          className={pageCap() > imagePage + 1 ? null : "inactive-button"}
        >
          Next
        </button>
        <p className="parentheses-border">{`Page ${imagePage + 1}`}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={imageInput}
            onChange={handleInput}
            placeholder="add new image url"
          />
          <input type="submit" value="save" />
        </form>
      </>
    );
  } else {
    return <button onClick={toggleIsOpen}>Change Image</button>;
  }
};

export default ParticipantImageList;
