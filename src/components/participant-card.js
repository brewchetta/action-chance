import React from "react";
import ParticipantAttributes from "./participant-attributes";
import ParticipantAttrsAdd from "./participant-attributes-add";
import ParticipantImage from "./participant-image";
import { random } from "brews-toolboxjs";

const randomImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hL_ZuDEH4GXsm8iPrXXAnH6_Te0QXq6hjoRS7gwxBbvPD2XQ",
  "https://pathfinderwiki.com/mediawiki/images/thumb/1/1b/Fumbus.jpg/250px-Fumbus.jpg <-- tall goblin",
  "https://i.pinimg.com/originals/11/95/77/119577ce8dda216bb2ef5c8b0bc81739.png",
  "https://secure.meetupstatic.com/photos/event/7/7/3/1/highres_456690513.jpeg"
];

const ParticipantCard = ({
  participant,
  changeParticipantAttributes,
  removeParticipant,
  setChances,
  activeParticipant,
  changeParticipantDelayed
}) => {
  const handleAttributeAdd = attr => {
    if (participant.attributes) {
      changeParticipantAttributes(participant, [
        ...participant.attributes,
        attr
      ]);
    } else {
      changeParticipantAttributes(participant, [attr]);
    }
  };

  const removeAttribute = attribute => {
    changeParticipantAttributes(
      participant,
      participant.attributes.filter(a => a !== attribute)
    );
  };

  const useActiveBorder = () => {
    if (activeParticipant) {
      return "participant-card participant-card-active";
    } else {
      return "participant-card";
    }
  };

  const delayParticipant = () => {
    changeParticipantDelayed(participant, true);
  };

  return (
    <div className={useActiveBorder()}>
      <ParticipantImage
        imageURL={participant.image ? participant.image : random(randomImages)}
        isActive={activeParticipant}
      />
      <p>
        {participant.name} | Chances: {participant.chances}
      </p>
      <div className="participant-card-buttons">
        <button
          onClick={() => setChances(participant, participant.chances + 1)}
        >
          Add Chance
        </button>
        {!participant.delayed && participant.chances ? (
          <button onClick={delayParticipant}>Delay Turn</button>
        ) : (
          <div />
        )}
        <button onClick={() => removeParticipant(participant)}>X</button>
      </div>
      <br />
      {participant.attributes ? (
        <ParticipantAttributes
          attributes={participant.attributes}
          removeAttribute={removeAttribute}
        />
      ) : null}
      <ParticipantAttrsAdd
        participantAttributes={participant.attributes}
        handleAttributeAdd={handleAttributeAdd}
      />
    </div>
  );
};

export default ParticipantCard;
