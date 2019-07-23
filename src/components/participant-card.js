import React from "react";
import ParticipantAttributes from "./participant-attributes";
import ParticipantAttrsAdd from "./participant-attributes-add";
import ParticipantImage from "./participant-image";

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
      return "participant-card-active";
    } else {
      return "participant-card";
    }
  };

  const delayParticipant = () => {
    changeParticipantDelayed(participant, true);
  };

  // https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2OC8wOTUvb3JpZ2luYWwvZ2lyYWZmZS5qcGc= tall
  // https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg wide
  // https://pathfinderwiki.com/mediawiki/images/thumb/1/1b/Fumbus.jpg/250px-Fumbus.jpg <-- tall goblin

  return (
    <div className={useActiveBorder()}>
      <ParticipantImage imageURL="https://pathfinderwiki.com/mediawiki/images/thumb/1/1b/Fumbus.jpg/250px-Fumbus.jpg" />
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
        ) : null}
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
