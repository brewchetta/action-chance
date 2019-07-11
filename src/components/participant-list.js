import React from "react";
import ParticipantCard from "./participant-card";
import { compareAlphabetical } from "brews-toolboxjs";

const ParticipantList = ({ participants, removeParticipant, setChances }) => {
  // console.log(isALetter("a"));
  const renderParticipantList = () => {
    return [...participants]
      .sort((a, b) => compareAlphabetical(a.name, b.name))
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
