import React from "react";

const RollChance = ({
  participants,
  lowerChances,
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
      lowerChances(activeParticipant);
    } else {
      setDisplayMessage("No more participants with rolls, refilling chances");
      resetRound();
    }
  };

  return <button onClick={rollForChance}>Draw a person to act</button>;
};

export default RollChance;
