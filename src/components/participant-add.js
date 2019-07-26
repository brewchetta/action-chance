import React, { useState } from "react";
import ParticipantImageList from "./participant-image-list";
import ParticipantImage from "./participant-image";

const capitalize = string => {
  if (string[0]) {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    return "";
  }
};

const AddParticipants = ({
  participants,
  setParticipants,
  setDisplayMessage,
  imageListIsOpen,
  setImageListIsOpen
}) => {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState(
    "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg"
  );

  const handleInput = event => {
    setNameInput(capitalize(event.target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (nameInput.length) {
      setParticipants([
        ...participants,
        { name: nameInput, chances: 1, image: imageInput }
      ]);
      setDisplayMessage(`${nameInput} is ready!`);
      setNameInput("");
      setImageInput("");
    }
  };

  return (
    <div id="participant-add-container">
      {!imageListIsOpen ? (
        <ParticipantImage
          imageURL={imageInput}
          isActive={true}
          participantName={nameInput}
        />
      ) : null}
      <ParticipantImageList
        setMainImageInput={setImageInput}
        isOpen={imageListIsOpen}
        setIsOpen={setImageListIsOpen}
      />
      <form
        onSubmit={handleSubmit}
        className={imageListIsOpen ? "display-none" : null}
      >
        <input
          id="name-input"
          type="text"
          name="name-input"
          value={nameInput}
          onChange={handleInput}
          placeholder="name"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddParticipants;
