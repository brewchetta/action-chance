import React, { useState } from "react";

const AddParticipants = ({ participants, setParticipants }) => {
  const [input, setInput] = useState("");

  const handleInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!participants[input]) {
      setParticipants([...participants, { name: input }]);
      setInput("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default AddParticipants;
