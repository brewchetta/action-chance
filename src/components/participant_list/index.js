// React
import React from "react";
//Redux
import {useSelector} from 'react-redux'
// Components
import ParticipantCard from "./participant-card";
import ParticipantAddCard from "./participant-add-card"
import ParticipantImage from "../participant-image";
// Toolbox
import { compareAlphabetical } from "brews-toolboxjs";
// CSS
import "./style.css"
// Images
const defaultImage =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

/*------Component------*/
const ParticipantList = props => {

  /*------Redux------*/

  const {participants, activeParticipant, addParticipantIsOpen} = useSelector(state => state)

  /*------Props------*/
  const {
    removeParticipant,
    setChances,
    changeParticipantAttributes,
    changeParticipantDelayed,
    changeInitiative,
    changeParticipantName
  } = props;

  /*------Utilities------*/

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
        changeParticipantDelayed,
        changeInitiative,
        changeParticipantName
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
    return (
      <>
        {[...participants]
        .sort((a, b) => {
          if (a.initiative === b.initiative) return compareAlphabetical(a.name, b.name)
          return b.initiative - a.initiative
        })
        .map(!addParticipantIsOpen ? renderParticipantCard : renderParticipantImage)}
        {!addParticipantIsOpen ? <ParticipantAddCard /> : null}
      </>
    )
  };

  const listClass = () => {
    return !addParticipantIsOpen ? "participant-list" : "participant-list-reduced";
  };

  //*------Render------*//
  return <div id={listClass()}>{renderParticipantList()}</div>;
};

export default ParticipantList;
