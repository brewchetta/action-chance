// React
import React from "react";
// Toolbox
import { random } from "brews-toolboxjs";

/*------Component------*/
const RollChance = props => {
  //

  /*------Props------*/
  const {
    participants,
    setChances,
    resetRound,
    setDisplayMessage,
    setActiveParticipant,
    addPartOpen
  } = props;

  /*------Utilities------*/

  const nextChance = availableParticipants => {
    const activeParticipant = random(availableParticipants.filter(part => part.initiative === Math.max(...availableParticipants.map(p => p.initiative))))
    setDisplayMessage(`${activeParticipant.name}'s turn to act!`);
    setChances(activeParticipant, activeParticipant.chances - 1);
    setActiveParticipant(activeParticipant);
    document.title = `${activeParticipant.name}'s Turn`;
  };

  const startNewRound = () => {
    setDisplayMessage("Starting a new round...");
    resetRound();
    setActiveParticipant(null);
    document.title = `New Round`;
  };

  const rollForChance = () => {
    const availableParticipants = participants.filter(p => p.chances > 0);
    if (availableParticipants.length) {
      nextChance(availableParticipants);
    } else if (participants.length) {
      startNewRound();
    } else {
      setDisplayMessage("Add participants to start a new round!");
      document.title = `Action Chance!`;
    }
  };

  /*------Render------*/

  return (
    <button
      onClick={rollForChance}
      className={
        addPartOpen || participants.length === 0 ? "display-hidden" : null
      }
    >
      Draw a person to act
    </button>
  );
};

export default RollChance;
