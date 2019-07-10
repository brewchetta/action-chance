import React from "react";
import ParticipantCard from "./participant-card";

const ParticipantList = ({ participants, removeParticipant, setChances }) => {
  const renderParticipantList = () => {
    return participants.map(par => {
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