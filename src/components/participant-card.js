import React from "react";

const ParticipantCard = ({ participant, removeParticipant }) => {
  debugger;
  return (
    <div>
      <p>{participant.name}</p>
      <button onClick={() => removeParticipant(participant)}>x</button>
    </div>
  );
};

export default ParticipantCard;
