// React
import React, { useState, useEffect } from "react";
// Redux
import {useDispatch} from 'react-redux'
import {setImageListIsOpen} from '../../redux/actions'
// Components
import ParticipantImage from "../participant-image";
import ParticipantAddImagePortrait  from './participant-add-image-portrait'

/*------Component------*/
const ParticipantImageList = ({ setMainImageInput, isOpen, setIsOpen }) => {

  /*------State------*/
  const [imageInput, setImageInput] = useState("");
  const [imagePage, setImagePage] = useState(0);

  /*------State------*/

  const dispatch = useDispatch()

  /*------Effects------*/

  useEffect(() => {
    window.scroll({left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
  })

  /*------Setters------*/

  const handleSelectImage = image => {
    setMainImageInput(image);
    dispatch(setImageListIsOpen(false));
  };

  const handleInput = event => {
    setImageInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const img = new Image();
    img.onload = () => {
      if (img.width && !getImages().includes(imageInput)) {
        localStorage.images = JSON.stringify([...getImages(), imageInput]);
        handleSelectImage(imageInput)
        setImageInput("");
      } else if (getImages().includes(imageInput)) {
        alert('Image already exists')
      } else {
        alert('Invalid image')
      }
    }

    img.src = imageInput
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  /*------Utilities------*/

  // Returns a parsed array of all saved images
  const getImages = () => {
    if (localStorage.images) {
      return JSON.parse(localStorage.images);
    } else {
      return [];
    }
  };

  // Determines how many pages there can be dependant on number of saved images
  const pageCap = () => Math.ceil(getImages().length / 12);

  // Renders a single image
  const renderImage = image => {
    return (
      <div
        key={image}
        onClick={() => handleSelectImage(image)}
        className="add-image-div"
      >
        <ParticipantImage
          imageURL={image}
          isActive={false}
          participantName=""
        />
      </div>
    );
  };

  // Renders each image in an array
  const renderImages = () => {
    if (localStorage.images) {
      return getImages()
        .slice(imagePage * 12, (imagePage + 1) * 12)
        .map(renderImage);
    }
  };

  // Handles movement through different pages of images
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

  /*------Render------*/

  if (isOpen) {
    return (
      <>
        {/* Background mask to close container */}
        <div
          id="close-add-images-container"
          className="fillscreen"
          onClick={toggleIsOpen}
        />

        {/* Images container */}
        <div id="add-images-container">
          {renderImages()}
          <ParticipantAddImagePortrait
            handleSelectImage={handleSelectImage}
            getImages={getImages} />
        </div>

        <div id="add-images-pagination-buttons">
          <div/>
          {/* Previous Page */}
          <button
            id="page-previous"
            className={imagePage > 0 ? null : "inactive-button"}
            onClick={handlePaginate}
            style={{borderRadius: '0 0 0 10px'}}
          >
            Previous
          </button>
          {/* Page number display */}
          <span style={{width: '7em', color: 'white', margin: 'auto'}}>{`Page ${imagePage + 1}`}</span>
          {/* Next Page */}
          <button
            id="page-next"
            onClick={handlePaginate}
            className={pageCap() > imagePage + 1 ? null : "inactive-button"}
            style={{borderRadius: '0 0 10px 0'}}
          >
            Next
          </button>
        </div>
        <br />
        {/* Add new image form */}
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
    return <button onClick={toggleIsOpen}>Choose Portait</button>
  }
};

export default ParticipantImageList;
