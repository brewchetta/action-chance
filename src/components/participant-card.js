import React from "react";

const ParticipantCard = ({ participant, removeParticipant, setChances }) => {
  return (
    <div>
      <p>
        {participant.name} | Chances: {participant.chances}
      </p>
      <button onClick={() => setChances(participant, participant.chances + 1)}>
        Add Chance
      </button>
      <button onClick={() => removeParticipant(participant)}>x</button>
    </div>
  );
};

export default ParticipantCard;
