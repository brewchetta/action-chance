// React
import React, {useState} from "react";
// Components
import ParticipantAttributes from "../participant_attributes/participant-attributes";
import ParticipantAttrsAdd from "../participant_attributes/participant-attributes-add";
import ParticipantImage from "../participant-image";
// Images
const defaultImage =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

//*------Component------*//
const ParticipantCard = props => {

  /* ------ State ------ */

  const [attributesAddIsOpen, setAttributesAddIsOpen] = useState(false)

  //*------Props------*//
  const {
    participant,
    changeParticipantAttributes,
    removeParticipant,
    setChances,
    activeParticipant,
    changeParticipantDelayed,
    utilizeInitiative
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
  const isActive = () => {
    if (activeParticipant) {
      return "participant-card participant-card-active"
    } else if (participant.chances <= 0) {
      return "participant-card participant-card-exhausted"
    } else {
      return "participant-card"
    }
  }

  // Sets the participant to delayed
  const delayParticipant = () => {
    changeParticipantDelayed(participant, true);
  };

  const renderChances = (string,i) => {
    return i > participant.chances ? string : string + "⚔" + renderChances(string, i + 1)
  }

  //*------Render------*//
  return (
    <div className={isActive()}>
      <ParticipantImage
        imageURL={participant.image ? participant.image : defaultImage}
        isActive={activeParticipant}
        participantName={participant.name}
      />

      {utilizeInitiative ?
        <p className='participant-card-initiative'>{participant.initiative}</p>
        : participant.chances ?
        <p className='participant-card-initiative'>{renderChances('', 1)}</p>
        : null }

      <p>
        {participant.name}
      </p>

      <div className="participant-card-buttons">
        {!utilizeInitiative ?
          <button onClick={() => setChances(participant, participant.chances + 1)}>Add Chance</button>
          : <div/>}
        {!utilizeInitiative && !participant.delayed && participant.chances ? (
          <button onClick={delayParticipant}>Delay</button>
        ) : (
          <div />
        )}
        <button onClick={() => setAttributesAddIsOpen(!attributesAddIsOpen)}>Tags</button>
        <button onClick={() => removeParticipant(participant)}>Remove</button>
      </div>

      <br />

      {participant.attributes ? (
        <div className='participant-attributes-container'>
          <ParticipantAttributes
            attributes={participant.attributes}
            removeAttribute={removeAttribute}
            />
        </div>
      ) : null}

      <ParticipantAttrsAdd
        participantAttributes={participant.attributes}
        handleAttributeAdd={handleAttributeAdd}
        isOpen={attributesAddIsOpen}
        setIsOpen={setAttributesAddIsOpen}
      />

    </div>
  );
};

export default ParticipantCard;
