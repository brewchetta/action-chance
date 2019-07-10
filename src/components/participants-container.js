import React, { useState } from "react";
import AddParticipant from "./participants-add";
import ParticipantList from "./participant-list";
import RollChance from "./roll-chance";

const ParticipantsContainer = props => {
  const [participants, setParticipants] = useState([]);

  const removeParticipant = participant => {
    setParticipants([...participants].filter(item => item !== participant));
  };

  const resetRound = () => {
    setParticipants(
      [...participants].map(p => {
        return { ...p, chances: 1 };
      })
    );
  };

  const lowerChances = participant => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, chances: participant.chances - 1 }
    ]);
  };

  return (
    <div>
      <AddParticipant
        participants={participants}
        setParticipants={setParticipants}
      />
      <ParticipantList
        participants={participants}
        removeParticipant={removeParticipant}
      />
      <RollChance
        participants={participants}
        lowerChances={lowerChances}
        resetRound={resetRound}
      />
    </div>
  );
};

export default ParticipantsContainer;
