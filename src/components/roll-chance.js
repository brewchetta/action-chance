import React from "react";

const RollChance = ({ participants, lowerChances, resetRound }) => {
  const rollForChance = () => {
    const availableParticipants = participants.filter(p => p.chances > 0);
    console.log(availableParticipants);
    if (availableParticipants.length) {
      const activeParticipant =
        availableParticipants[
          Math.floor(Math.random() * availableParticipants.length)
        ];
      console.log(`${activeParticipant.name} was chosen!`);
      lowerChances(activeParticipant);
    } else {
      console.log("No more participants with rolls, refilling chances");
      resetRound();
    }
  };

  return <button onClick={rollForChance}>Draw a person to act</button>;
};

export default RollChance;
