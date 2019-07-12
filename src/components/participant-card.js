import React, { useState } from "react";
import ParticipantAttributes from "./participant-attributes";

const ParticipantCard = ({
  participant,
  changeParticipantAttributes,
  removeParticipant,
  setChances,
  activeParticipant
}) => {
  console.log(participant, activeParticipant);
  const [attributeInput, setAttributeInput] = useState("");

  const handleAttributeInput = event => {
    setAttributeInput(event.target.value);
  };

  const handleAttributeSubmit = event => {
    event.preventDefault();
    if (participant.attributes) {
      console.log(
        "adding to existing:",
        participant.attributes,
        attributeInput
      );
      changeParticipantAttributes(participant, [
        ...participant.attributes,
        attributeInput
      ]);
    } else {
      console.log(
        "creating attributes:",
        participant.attributes,
        attributeInput
      );
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

  const useActiveBorder = () => {
    if (activeParticipant) {
      return { border: "solid green 6px", borderRadius: "5px", margin: "3%" };
    } else {
      return {
        border: "solid black 2px",
        borderRadius: "5px",
        margin: "3%",
        padding: "4px"
      };
    }
  };

  return (
    <div style={useActiveBorder()}>
      <p>
        {participant.name} | Chances: {participant.chances} |
        <button
          onClick={() => setChances(participant, participant.chances + 1)}
        >
          Add Chance
        </button>
        <button onClick={() => removeParticipant(participant)}>x</button>
      </p>
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
    </div>
  );
};

export default ParticipantCard;
