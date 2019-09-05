// React
import React from "react";
// Redux
import {useSelector} from 'react-redux'
// Toolbox
import { random } from "brews-toolboxjs";

/*------Component------*/
const RollChance = props => {

  /*------Redux------*/

  const participants = useSelector(state => state.participants)

  /*------Props------*/
  const {
    setChances,
    resetRound,
    setDisplayMessage,
    setActiveParticipant,
    addPartOpen,
    utilizeInitiative
  } = props;

  /*------Utilities------*/

  const getActiveParticipant = availableParticipants => {
    if (utilizeInitiative) {
      return random(availableParticipants.filter(part => part.initiative === Math.max(...availableParticipants.map(p => p.initiative))))
    } else {
      return random(availableParticipants)
    }
  }

  const nextChance = availableParticipants => {
    const activeParticipant = getActiveParticipant(availableParticipants)
    setDisplayMessage(`${activeParticipant.name}'s turn to act!`);
    setChances(activeParticipant, activeParticipant.chances - 1);
    setActiveParticipant(activeParticipant);
    // document.title = `${activeParticipant.name}'s Turn`;
  };

  const startNewRound = () => {
    setDisplayMessage("Starting a new round...");
    resetRound();
    setActiveParticipant(null);
    // document.title = `New Round`;
  };

  const rollForChance = () => {
    const availableParticipants = participants.filter(p => p.chances > 0);
    if (availableParticipants.length) {
      nextChance(availableParticipants);
    } else if (participants.length) {
      startNewRound();
    } else {
      setDisplayMessage("Add participants to start a new round!");
      // document.title = `Action Chance`;
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
      Next
    </button>
  );
};

export default RollChance;
