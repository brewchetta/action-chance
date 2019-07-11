import React from "react";
import { random } from "brews-toolboxjs";

const RollChance = ({
  participants,
  setChances,
  resetRound,
  setDisplayMessage
}) => {
  const rollForChance = () => {
    const availableParticipants = participants.filter(p => p.chances > 0);
    if (availableParticipants.length) {
      const activeParticipant = random(availableParticipants);
      setDisplayMessage(`${activeParticipant.name}'s turn to act!`);
      setChances(activeParticipant, activeParticipant.chances - 1);
    } else if (participants.length) {
      setDisplayMessage("Starting a new round...");
      resetRound();
    } else {
      setDisplayMessage("Add participants to start a new round!");
    }
  };

  return <button onClick={rollForChance}>Draw a person to act</button>;
};

export default RollChance;
