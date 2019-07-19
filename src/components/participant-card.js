import React from "react";
import ParticipantAttributes from "./participant-attributes";
import ParticipantAttrsAdd from "./participant-attributes-add.js";

const ParticipantCard = ({
  participant,
  changeParticipantAttributes,
  removeParticipant,
  setChances,
  activeParticipant,
  changeParticipantDelayed
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

  const delayParticipant = () => {
    changeParticipantDelayed(participant, true);
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
        {!participant.delayed && participant.chances ? (
          <button onClick={delayParticipant}>Delay Turn</button>
        ) : null}
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
