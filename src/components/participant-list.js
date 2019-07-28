import React from "react";
import ParticipantCard from "./participant-card";
import ParticipantImage from "./participant-image";
import { compareAlphabetical } from "brews-toolboxjs";

const defaultImage =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

const ParticipantList = ({
  participants,
  removeParticipant,
  setChances,
  changeParticipantAttributes,
  activeParticipant,
  changeParticipantDelayed,
  addPartOpen
}) => {
  //*------Utilities------*//
  // Checks to see whether it's the participant's turn
  const isActive = participant =>
    activeParticipant ? participant.name === activeParticipant.name : false;

  // Checks to see if a participant has an image and sets a default one if none exists
  const setImage = participant =>
    participant.image ? participant.image : defaultImage;

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
            activeParticipant={isActive(par)}
            changeParticipantDelayed={changeParticipantDelayed}
          />
        );
      });
  };

  const renderParticipantImages = () => {
    return [...participants]
      .sort((a, b) => compareAlphabetical(a.name, b.name))
      .map(par => {
        return (
          <div
            key={Math.random() * 100}
            style={{
              animation: "participant-card-appear 0.5s",
              margin: "5px"
            }}
          >
            <ParticipantImage
              imageURL={setImage(par)}
              isActive={isActive(par)}
              participantName={par.name}
            />
          </div>
        );
      });
  };

  if (participants.length && !addPartOpen) {
    return <div id="participant-list">{renderParticipantList()}</div>;
  } else if (participants.length && addPartOpen) {
    return <div id="participant-list">{renderParticipantImages()}</div>;
  } else {
    return <div />;
  }
};

export default ParticipantList;
