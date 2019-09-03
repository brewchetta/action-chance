// React
import React, { useState } from "react";
// Components
import ParticipantImageList from "./participant-add-image-list";
import ParticipantImage from "../participant-image";
// CSS
import './style.css'

const capitalize = string => {
  if (string[0]) {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    return "";
  }
};

/*------component------*/
const AddParticipants = props => {
  //

  /*------Props------*/

  const {
    participants,
    setParticipants,
    setDisplayMessage,
    imageListIsOpen,
    setImageListIsOpen,
    setAddPartOpen,
    utilizeInitiative,
    activeParticipant
  } = props;

  /*------State------*/

  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState(
    "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg"
  );
  const [initiativeInput, setInitiativeInput] = useState(10)

  /*------Setters------*/

  const handleInput = event => {
    switch (event.target.name) {
      case 'name-input':
        setNameInput(capitalize(event.target.value));
        break;
      case 'initiative-input':
        setInitiativeInput(capitalize(event.target.value));
        break;
      default:

    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const chances = parseInt(initiativeInput) > activeParticipant.initiative ? 0 : 1

    if (nameInput.length) {
      setParticipants([
        ...participants,
        { name: nameInput, chances, image: imageInput, initiative: parseInt(initiativeInput) }
      ]);
      setDisplayMessage(`${nameInput} is ready!`);
      setNameInput("");
      setImageInput("");
    }
  };

  const toggleIsOpen = () => {
    setAddPartOpen(false)
  }

  /*------Render------*/

  return (
    <div id="participant-add-container">
      <div
        id="close-add-participants-container"
        className="fillscreen"
        onClick={toggleIsOpen}
      />
      {!imageListIsOpen ? (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setImageListIsOpen(!imageListIsOpen)}
        >
          <ParticipantImage
            imageURL={imageInput}
            isActive={true}
            participantName={nameInput}
          />
        </div>
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
        {utilizeInitiative ?
          <input
          id="initiative-input"
          type="number"
          name="initiative-input"
          value={initiativeInput}
          onChange={handleInput}
          style={{width: '3em'}}
          max='40'
          min='0'
          />
        : null}
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddParticipants;
