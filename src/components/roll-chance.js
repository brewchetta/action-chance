import React from "react";
import { random } from "brews-toolboxjs";

const RollChance = ({
  participants,
  setChances,
  resetRound,
  setDisplayMessage,
  setActiveParticipant
}) => {
  const nextChance = availableParticipants => {
    const activeParticipant = random(availableParticipants);
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

  return <button onClick={rollForChance}>Draw a person to act</button>;
};

export default RollChance;
