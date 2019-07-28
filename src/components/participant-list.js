// React
import React from "react";
// Components
import ParticipantCard from "./participant-card";
import ParticipantImage from "./participant-image";
// Toolbox
import { compareAlphabetical } from "brews-toolboxjs";
// Images
const defaultImage =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

//*------Component------*//
const ParticipantList = props => {
  //

  //*------Props------*//
  const {
    participants,
    removeParticipant,
    setChances,
    changeParticipantAttributes,
    activeParticipant,
    changeParticipantDelayed,
    addPartOpen
  } = props;

  //*------Utilities------*//

  // Checks to see whether it's the participant's turn
  const isActive = participant =>
    activeParticipant ? participant.name === activeParticipant.name : false;

  // Checks to see if a participant has an image and sets a default one if none exists
  const setImage = participant =>
    participant.image ? participant.image : defaultImage;

  // Renders a single card
  const renderParticipantCard = participant => (
    <ParticipantCard
      {...{
        key: participant.name,
        participant,
        removeParticipant,
        setChances,
        changeParticipantAttributes,
        activeParticipant: isActive(participant),
        changeParticipantDelayed
      }}
    />
  );

  // Renders a single image
  const renderParticipantImage = participant => (
    <div
      key={Math.random() * 100}
      style={{
        animation: "participant-card-appear 0.5s",
        margin: "5px"
      }}
    >
      <ParticipantImage
        {...{
          imageURL: setImage(participant),
          isActive: isActive(participant),
          participantName: participant.name
        }}
      />
    </div>
  );

  // Renders all participants in either full or image format depending on whether AddParticipant is open
  const renderParticipantList = () => {
    return [...participants]
      .sort((a, b) => compareAlphabetical(a.name, b.name))
      .map(!addPartOpen ? renderParticipantCard : renderParticipantImage);
  };

  const listClass = () => {
    return !addPartOpen ? "participant-list" : "participant-list-reduced";
  };

  //*------Render------*//
  return <div id={listClass()}>{renderParticipantList()}</div>;
};

export default ParticipantList;
