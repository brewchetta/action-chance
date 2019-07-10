import React, { useState } from "react";

const AddParticipants = ({ participants, setParticipants }) => {
  const [nameInput, setNameInput] = useState("");
  const [chancesInput, setChancesInput] = useState(0);

  const handleInput = event => {
    if (event.target.name === "name-input") {
      setNameInput(event.target.value);
    } else {
      setChancesInput(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setParticipants([
      ...participants,
      { name: nameInput, chances: chancesInput }
    ]);
    setNameInput("");
    setChancesInput(0);
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
        <input
          type="number"
          name="chances-input"
          min="0"
          max="5"
          value={chancesInput}
          onChange={handleInput}
          placeholder="action chances"
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default AddParticipants;
