import React, { useState } from "react";
import AddParticipant from "./participants-add";
import ParticipantList from "./participant-list";
import RollChance from "./roll-chance";

const ParticipantsContainer = props => {
  const [participants, setParticipants] = useState([]);
  const [displayMessage, setDisplayMessage] = useState("");

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

  const setChances = (participant, newChances) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, chances: newChances }
    ]);
  };

  return (
    <div>
      <AddParticipant
        participants={participants}
        setParticipants={setParticipants}
      />
      <ParticipantList
        setChances={setChances}
        participants={participants}
        removeParticipant={removeParticipant}
      />
      <RollChance
        participants={participants}
        setChances={setChances}
        resetRound={resetRound}
        setDisplayMessage={setDisplayMessage}
      />
      <h3>{displayMessage}</h3>
    </div>
  );
};

export default ParticipantsContainer;
