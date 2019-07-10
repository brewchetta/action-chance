import React from "react";

const RollChance = ({
  participants,
  setChances,
  resetRound,
  setDisplayMessage
}) => {
  const rollForChance = () => {
    const availableParticipants = participants.filter(p => p.chances > 0);
    if (availableParticipants.length) {
      const activeParticipant =
        availableParticipants[
          Math.floor(Math.random() * availableParticipants.length)
        ];
      setDisplayMessage(`${activeParticipant.name} was chosen!`);
      setChances(activeParticipant, activeParticipant.chances - 1);
    } else {
      setDisplayMessage("No more participants with rolls, refilling chances");
      resetRound();
    }
  };

  return <button onClick={rollForChance}>Draw a person to act</button>;
};

export default RollChance;
