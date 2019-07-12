import React, { useState } from "react";
import AddParticipant from "./participants-add";
import ParticipantList from "./participant-list";
import RollChance from "./roll-chance";

const ParticipantsContainer = props => {
  const [participants, setParticipants] = useState([]);
  const [displayMessage, setDisplayMessage] = useState("|||");
  const [activeParticipant, setActiveParticipant] = useState(null);

  const removeParticipant = participant => {
    setParticipants([...participants].filter(item => item !== participant));
  };

  const resetRound = () => {
    setParticipants(
      [...participants].map(p => {
        return { ...p, chances: 1 };
      })
    );
    setActiveParticipant(null);
  };

  const reset = () => {
    setParticipants([]);
    setDisplayMessage("|||");
    setActiveParticipant(null);
  };

  const setChances = (participant, newChances) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, chances: newChances }
    ]);
  };

  const changeParticipantAttributes = (participant, newAttributes) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, attributes: newAttributes }
    ]);
  };

  return (
    <div>
      <h3>{displayMessage}</h3>
      <AddParticipant
        participants={participants}
        setParticipants={setParticipants}
        setDisplayMessage={setDisplayMessage}
      />
      <ParticipantList
        setChances={setChances}
        participants={participants}
        removeParticipant={removeParticipant}
        changeParticipantAttributes={changeParticipantAttributes}
        activeParticipant={activeParticipant}
      />
      <RollChance
        participants={participants}
        setChances={setChances}
        resetRound={resetRound}
        setDisplayMessage={setDisplayMessage}
        setActiveParticipant={setActiveParticipant}
      />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ParticipantsContainer;
