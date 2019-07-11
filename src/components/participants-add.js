import React, { useState } from "react";

const capitalize = string => {
  return string[0].toUpperCase() + string.slice(1);
};

const AddParticipants = ({
  participants,
  setParticipants,
  setDisplayMessage
}) => {
  const [nameInput, setNameInput] = useState("");

  const handleInput = event => {
    setNameInput(capitalize(event.target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setParticipants([...participants, { name: nameInput, chances: 1 }]);
    setDisplayMessage(`${nameInput} is ready!`);
    setNameInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name-input"
          value={nameInput}
          onChange={handleInput}
          placeholder="name"
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default AddParticipants;
