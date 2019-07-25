import React, { useState } from "react";
import ParticipantImageList from "./participant-image-list";

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
  setDisplayMessage
}) => {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const handleInput = event => {
    if (event.target.id === "name-input") {
      setNameInput(capitalize(event.target.value));
    } else if (event.target.id === "image-input") {
      setImageInput(event.target.value);
    }
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="name-input"
          type="text"
          name="name-input"
          value={nameInput}
          onChange={handleInput}
          placeholder="name"
        />
        <input
          id="image-input"
          type="text"
          name="image-input"
          value={imageInput}
          onChange={handleInput}
          placeholder="image url"
        />
        <input type="submit" value="Add" />
      </form>
      <ParticipantImageList setMainImageInput={setImageInput} />
    </>
  );
};

export default AddParticipants;
