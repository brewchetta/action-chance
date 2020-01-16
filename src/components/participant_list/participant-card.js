// React
import React, {useState} from "react";
// Redux
import {useSelector} from 'react-redux'
// Components
import ParticipantAttributes from "../participant_attributes/participant-attributes";
import ParticipantAttrsAdd from "../participant_attributes/participant-attributes-add";
import ParticipantImage from "../participant-image";
// Images
const defaultImage =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

/*------Component------*/
const ParticipantCard = props => {

  /*------Redux------*/

  const activeParticipant = useSelector(state => state.activeParticipant)
  const utilizeInitiative = useSelector(state => state.utilizeInitiative)

  /*------ State ------*/

  const [attributesAddIsOpen, setAttributesAddIsOpen] = useState(false)

  /*------Props------*/
  const {
    participant,
    changeParticipantAttributes,
    removeParticipant,
    setChances,
    changeParticipantDelayed,
    changeInitiative
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

  const handleClickInitiative = () => {
    const newInitiative = prompt('New Initiative:', participant.initiative)
    if (parseInt(newInitiative) && parseInt(newInitiative) >= 0 && parseInt(newInitiative) <= 40) {
      changeInitiative(participant, newInitiative)
    } else if (newInitiative) {
      alert(`[${newInitiative}] is invalid`)
    }
  }

  // Removes attribute from participant
  const removeAttribute = attribute => {
    changeParticipantAttributes(
      participant,
      participant.attributes.filter(a => a !== attribute)
    );
  };

  // Determines whether a participant uses the active border or not
  const isActiveCard = () => {
    if (activeParticipant && activeParticipant.name === participant.name) {
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
    <div className={isActiveCard()}>
      <ParticipantImage
        imageURL={participant.image ? participant.image : defaultImage}
        isActive={activeParticipant && activeParticipant.name === participant.name}
        participantName={participant.name}
        floatLeft={true}
      />

      {utilizeInitiative ?
        <p className='participant-card-initiative' onClick={handleClickInitiative}>{participant.initiative}</p>
        : participant.chances ?
        <p className='participant-card-initiative'>{renderChances('', 1)}</p>
        : null }

      <p style={{margin: '0.7em'}}>
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

      <div className='participant-attributes-container'>
        <ParticipantAttributes
          attributes={participant.attributes ? participant.attributes : []}
          removeAttribute={removeAttribute}
          setAttributesAddIsOpen={setAttributesAddIsOpen}
          />
      </div>

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
