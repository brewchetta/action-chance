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
    setAttributeInput("");
  };

  const removeAttribute = attribute => {
    changeParticipantAttributes(
      participant,
      participant.attributes.filter(a => a !== attribute)
    );
  };

  return (
    <div
      style={{ border: "solid black 2px", borderRadius: "5px", margin: "3%" }}
    >
      <p>
        {participant.name} | Chances: {participant.chances} |
        <button
          onClick={() => setChances(participant, participant.chances + 1)}
        >
          Add Chance
        </button>
      </p>
      <form onSubmit={handleAttributeSubmit}>
        {participant.attributes ? (
          <ParticipantAttributes
            attributes={participant.attributes}
            removeAttribute={removeAttribute}
          />
        ) : null}
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
