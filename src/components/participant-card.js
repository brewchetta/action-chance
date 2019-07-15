import React from "react";
import ParticipantAttributes from "./participant-attributes";
import ParticipantAttrsAdd from "./participant-attributes-add.js";

const ParticipantCard = ({
  participant,
  changeParticipantAttributes,
  removeParticipant,
  setChances,
  activeParticipant
}) => {
  const handleAttributeAdd = attr => {
    if (participant.attributes) {
      changeParticipantAttributes(participant, [
        ...participant.attributes,
        attr
      ]);
    } else {
      changeParticipantAttributes(participant, [attr]);
    }
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
      <ParticipantAttrsAdd
        participantAttributes={participant.attributes}
        handleAttributeAdd={handleAttributeAdd}
      />
    </div>
  );
};

export default ParticipantCard;
