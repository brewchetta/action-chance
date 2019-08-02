// React
import React from "react";
// Components
import ParticipantAttributes from "../participant_attributes/participant-attributes";
import ParticipantAttrsAdd from "../participant_attributes/participant-attributes-add";
import ParticipantImage from "../participant-image";
// Images
const defaultImage =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

//*------Component------*//
const ParticipantCard = props => {
  //

  //*------Props------*//
  const {
    participant,
    changeParticipantAttributes,
    removeParticipant,
    setChances,
    activeParticipant,
    changeParticipantDelayed
  } = props;

  //*------Utilities------*//

  // Adds attribute to participant
  const handleAttributeAdd = attr => {
    participant.attributes
      ? changeParticipantAttributes(participant, [
          ...participant.attributes,
          attr
        ])
      : changeParticipantAttributes(participant, [attr]);
  };

  // Removes attribute from participant
  const removeAttribute = attribute => {
    changeParticipantAttributes(
      participant,
      participant.attributes.filter(a => a !== attribute)
    );
  };

  // Determines whether a participant uses the active border or not
  const useActiveBorder = () => {
    if (activeParticipant) {
      return "participant-card participant-card-active";
    } else {
      return "participant-card";
    }
  };

  // Sets the participant to delayed
  const delayParticipant = () => {
    changeParticipantDelayed(participant, true);
  };

  //*------Render------*//
  return (
    <div className={useActiveBorder()}>
      <ParticipantImage
        imageURL={participant.image ? participant.image : defaultImage}
        isActive={activeParticipant}
        participantName={participant.name}
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
        <button onClick={() => removeParticipant(participant)}>Remove</button>
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
