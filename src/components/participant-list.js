import React from "react";
import ParticipantCard from "./participant-card";

function compareByAlphabetical(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}

const ParticipantList = ({ participants, removeParticipant, setChances }) => {
  const renderParticipantList = () => {
    return [...participants]
      .sort((a, b) => compareByAlphabetical(b.name, a.name))
      .map(par => {
        return (
          <ParticipantCard
            key={par.name}
            participant={par}
            removeParticipant={removeParticipant}
            setChances={setChances}
          />
        );
      });
  };

  if (participants.length) {
    return (
      <>
        <p>Participants</p>
        <ol>{renderParticipantList()}</ol>
      </>
    );
  } else {
    return <p>Add a participant</p>;
  }
};

export default ParticipantList;
