// React
import React, { useState, useEffect } from "react";
//Redux
import {useSelector, useDispatch} from 'react-redux'
import {setAddParticipantIsOpen, setImageListIsOpen, setParticipantToEdit} from '../../redux/actions'
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

  /*------Redux------*/

  const {participants, activeParticipant, utilizeInitiative, imageListIsOpen, participantToEdit} = useSelector(state => state)
  const dispatch = useDispatch()

  /*------Props------*/

  const {
    setParticipants,
    setDisplayMessage
  } = props;

  /*------State------*/

  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState(
    "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg"
  );
  const [initiativeInput, setInitiativeInput] = useState(10)

  useEffect(() => {
    if (participantToEdit) {
      console.log(participantToEdit)
      setNameInput(participantToEdit.name)
      setImageInput(participantToEdit.image)
    }
  }, [participantToEdit])

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

  const addParticipant = () => {
    if (!participants.filter(p => p.name === nameInput).length) {
      // Chances depends on whether there is an active participant and whether they come before or after in initiative
      const chances = activeParticipant && parseInt(initiativeInput) < activeParticipant.initiative ? 1 : !activeParticipant ? 1 : 0
      // Add the participant and reset
      setParticipants([
        ...participants,
        { name: nameInput, chances, image: imageInput, initiative: parseInt(initiativeInput) }
      ]);
      setDisplayMessage(`${nameInput} is ready!`);
      setNameInput("");
      setImageInput("");

    } else {
      alert(`A character already exists with that name!`)
    }
  }

  const editParticipant = () => {
    // Create new participant list
    const newParticipants = participants.filter(p => p !== participantToEdit)
    // Add newly edited participant
    newParticipants.push({...participantToEdit, name: nameInput, image: imageInput, initiative: initiativeInput})
    // Set everything
    setParticipants(newParticipants)
    setDisplayMessage(`${nameInput} is ready!`);
    dispatch(setAddParticipantIsOpen(false))
    dispatch(setParticipantToEdit(null))
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Fire this if adding a participant
    if (nameInput.length && !participantToEdit) {
        addParticipant()
    // Fire this if editing a participant
    } else if (nameInput.length) {
        editParticipant()
    }
  };

  const toggleIsOpen = () => {
    dispatch(setAddParticipantIsOpen(false))
  }

  /*------Render------*/

  return (
    <div id="participant-add-container">

      {/* Background mask to click out of this screen */}
      <div
        id="close-add-participants-container"
        className="fillscreen"
        onClick={toggleIsOpen}
      />

      {/* Form below renders if image list isn't open */}
      {!imageListIsOpen ? (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(setImageListIsOpen(!imageListIsOpen))}
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
      />

      {/* Participant Form */}
      <form
        onSubmit={handleSubmit}
        className={imageListIsOpen ? "display-none" : null}
      >

        {/* Name */}
        <input
          id="name-input"
          type="text"
          name="name-input"
          value={nameInput}
          onChange={handleInput}
          placeholder="name"
        />
        <br/>

        {/* Initiative */}
        <label>Initiative: </label>
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

        <br/>

        <input type="submit" value={participantToEdit ? `Edit ${participantToEdit.name}` : "Add"} />
      </form>
    </div>
  );
};

export default AddParticipants;
