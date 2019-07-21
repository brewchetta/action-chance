import React from "react";
import ParticipantCard from "./participant-card";
import { compareAlphabetical } from "brews-toolboxjs";

const ParticipantList = ({
  participants,
  removeParticipant,
  setChances,
  changeParticipantAttributes,
  activeParticipant,
  changeParticipantDelayed
}) => {
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
            changeParticipantAttributes={changeParticipantAttributes}
            activeParticipant={
              activeParticipant ? par.name === activeParticipant.name : null
            }
            changeParticipantDelayed={changeParticipantDelayed}
          />
        );
      });
  };

  if (participants.length) {
    return <div id="participant-list">{renderParticipantList()}</div>;
  } else {
    return <p>Add a participant</p>;
  }
};

export default ParticipantList;
