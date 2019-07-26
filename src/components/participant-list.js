import React from "react";
import ParticipantCard from "./participant-card";
import { compareAlphabetical } from "brews-toolboxjs";

const ParticipantList = ({
  participants,
  removeParticipant,
  setChances,
  changeParticipantAttributes,
  activeParticipant,
  changeParticipantDelayed,
  addPartOpen
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
    return (
      <div
        id="participant-list"
        style={!addPartOpen ? null : { display: "none" }}
      >
        {renderParticipantList()}
      </div>
    );
  } else {
    return <div />;
  }
};

export default ParticipantList;
