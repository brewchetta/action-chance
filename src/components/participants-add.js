import React, { useState } from "react";

const AddParticipants = ({ participants, setParticipants }) => {
  const [nameInput, setNameInput] = useState("");
  const [chancesInput, setChancesInput] = useState(0);

  const handleInput = event => {
    if (event.target.name === "name-input") {
      setNameInput(event.target.value);
    } else {
      setChancesInput(parseInt(event.target.value));
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
        <select
          name="chances-input"
          value={chancesInput}
          onChange={handleInput}
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default AddParticipants;
