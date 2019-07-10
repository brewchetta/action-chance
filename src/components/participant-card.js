import React from "react";

const ParticipantCard = ({ participant, removeParticipant }) => {
  return (
    <div>
      <p>
        {participant.name} | Chances: {participant.chances}
      </p>
      <button onClick={() => removeParticipant(participant)}>x</button>
    </div>
  );
};

export default ParticipantCard;
