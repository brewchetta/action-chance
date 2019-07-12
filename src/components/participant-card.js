import React, { useState } from "react";
import ParticipantAttributes from "./participant-attributes";

const ParticipantCard = ({
  participant,
  changeParticipantAttributes,
  removeParticipant,
  setChances
}) => {
  const [attributeInput, setAttributeInput] = useState("");

  const handleAttributeInput = event => {
    setAttributeInput(event.target.value);
  };

  const handleAttributeSubmit = event => {
    event.preventDefault();
    if (participant.attributes) {
      changeParticipantAttributes(participant, [
        ...participant.attributes,
        attributeInput
      ]);
    } else {
      changeParticipantAttributes(participant, [attributeInput]);
    }
  };

  const removeAttribute = attribute => {
    changeParticipantAttributes(
      participant,
      participant.attributes.filter(a => a !== attribute)
    );
  };

  return (
    <div>
      <p>
        {participant.name} | Chances: {participant.chances}
      </p>
      <button onClick={() => setChances(participant, participant.chances + 1)}>
        Add Chance
      </button>
      <br />
      {participant.attributes ? (
        <ParticipantAttributes
          attributes={participant.attributes}
          removeAttribute={removeAttribute}
        />
      ) : null}
      <form onSubmit={handleAttributeSubmit}>
        <input
          name="attribute-input"
          placeholder="Add a note"
          value={attributeInput}
          onChange={handleAttributeInput}
        />
        <input type="submit" value="Add" />
      </form>
      <button onClick={() => removeParticipant(participant)}>x</button>
    </div>
  );
};

export default ParticipantCard;
