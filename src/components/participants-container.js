import React, { useState } from "react";
import AddParticipant from "./participant-add";
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
        const pChances = p.delayed ? 2 : 1;
        return { ...p, chances: pChances, delayed: false };
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

  const changeParticipantDelayed = (participant, isDelayed) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, delayed: isDelayed, chances: participant.chances - 1 }
    ]);
  };

  return (
    <div id="participant-container">
      <h3 id="display-message">{displayMessage}</h3>
      <ParticipantList
        setChances={setChances}
        participants={participants}
        removeParticipant={removeParticipant}
        changeParticipantAttributes={changeParticipantAttributes}
        activeParticipant={activeParticipant}
        changeParticipantDelayed={changeParticipantDelayed}
      />
      <div>
        <AddParticipant
          participants={participants}
          setParticipants={setParticipants}
          setDisplayMessage={setDisplayMessage}
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
    </div>
  );
};

export default ParticipantsContainer;
