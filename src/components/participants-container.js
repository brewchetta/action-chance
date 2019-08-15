// React
import React, { useState } from "react";
// Components
import AddParticipant from "./participant_add/participant-add";
import ParticipantList from "./participant_list/participant-list";
import RollChance from "./roll-chance";

/*------Component------*/
const ParticipantsContainer = ({participants, setParticipants, activeParticipant, setActiveParticipant, displayMessage, setDisplayMessage, utilizeInitiative}) => {
  //

  /*------State------*/
  const [addPartOpen, setAddPartOpen] = useState(false);
  const [imageListIsOpen, setImageListIsOpen] = useState(false);

  /*------Setters------*/

  // Removes participant from participants
  const removeParticipant = participant => {
    setParticipants(
      [...participants].filter(item => item !== participant)
    );
  };

  // Resets the round and resets certain participant statuses
  const resetRound = () => {
    setParticipants(
      [...participants].map(p => {
        const pChances = p.delayed ? 2 : 1;
        return { ...p, chances: pChances, delayed: false };
      })
    );
    setActiveParticipant(null);
  };

  // Removes all participants
  const reset = () => {
    setParticipants([]);
    setDisplayMessage("|||");
    setActiveParticipant(null);
  };

  // Sets a single participant's chances
  const setChances = (participant, newChances) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, chances: newChances }
    ]);
  };

  // Sets a participant's attributes
  const changeParticipantAttributes = (participant, newAttributes) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, attributes: newAttributes }
    ]);
  };

  // Gives participant the delayed status
  const changeParticipantDelayed = (participant, isDelayed) => {
    setParticipants([
      ...participants.filter(p => p !== participant),
      { ...participant, delayed: isDelayed, chances: participant.chances - 1 }
    ]);
  };

  // Either closes the add participant image, closes the add participant window,
  // or opens the add participant window depending on state
  const setAddPartAndImageOpen = () => {
    imageListIsOpen ?
    setImageListIsOpen(!imageListIsOpen) :
    setAddPartOpen(!addPartOpen)
  }

  /*------Render------*/

  return (
    <div id="participant-container">
      <h3 id="display-message">{displayMessage}</h3>
      <ParticipantList
        setChances={setChances}
        participants={participants}
        removeParticipant={removeParticipant}
        changeParticipantAttributes={changeParticipantAttributes}
        activeParticipant={activeParticipant}
        changeParticipantDelayed={changeParticipantDelayed}
        addPartOpen={addPartOpen}
        utilizeInitiative={utilizeInitiative}
      />

      {!imageListIsOpen ? (
        <div id='roll-chance-container'>
          <RollChance {...{
              participants,
              setChances,
              resetRound,
              setDisplayMessage,
              setActiveParticipant,
              addPartOpen,
              utilizeInitiative}}
          />
          <button
            onClick={reset}
            className={
              addPartOpen || participants.length === 0 ? "display-none" : null
            }
          >
            Reset
          </button>
        </div>
      ) : null}
      {addPartOpen ? (
        <AddParticipant
        imageListIsOpen={imageListIsOpen}
        setImageListIsOpen={setImageListIsOpen}
        participants={participants}
        setParticipants={setParticipants}
        setDisplayMessage={setDisplayMessage}
        setAddPartOpen={setAddPartOpen}
        />
      ) : null}
      <button
        id="add-participant-button"
        className="parentheses-border"
        onClick={setAddPartAndImageOpen}
      >
        {!addPartOpen ? "Add a participant" : "Back"}
      </button>
    </div>
  );
};

export default ParticipantsContainer;
