import React, { useState } from "react";
import ParticipantImage from "../participant-image";

const ParticipantImageList = ({ setMainImageInput, isOpen, setIsOpen }) => {
  const [imageInput, setImageInput] = useState("");
  const [imagePage, setImagePage] = useState(0);
  const pageCap = () => Math.ceil(getImages().length / 12);

  const getImages = () => {
    if (localStorage.images) {
      return JSON.parse(localStorage.images);
    } else {
      return [];
    }
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
    } else if (
      (event.target.id === "page-next" || event.target.id === "page-next-2") &&
      pageCap() > imagePage + 1
    ) {
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
        <br />
        <button
          id="page-next-2"
          className="parentheses-border"
          onClick={handlePaginate}
        >{`Page ${imagePage + 1}`}</button>
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
    return <div />;
  }
};

export default ParticipantImageList;
